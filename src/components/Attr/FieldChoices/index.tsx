import {ArrayField, observer, useField} from '@formily/react'
import {ArrayField as ArrayFieldType} from '@formily/core'
import {toJS} from '@formily/reactive'
import {Button} from 'antd'
import './index.css'
import {DndContext, useSensors, PointerSensor, KeyboardSensor, useSensor, closestCenter} from '@dnd-kit/core'
import {SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from '@dnd-kit/sortable'
import ChoiceItem from './ChoiceItem'
import {DragEndEvent} from '@dnd-kit/core/dist/types'

const FieldChoices = observer(({fieldNamePath}: { fieldNamePath: string }) => {
    const field = useField<ArrayFieldType>()
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const onDragEnd = async (event: DragEndEvent) => {
        const {active, over} = event
        if (active.id !== over?.id) {
            const oldIndex = active?.data?.current?.sortable.index
            const newIndex = over?.data?.current?.sortable.index
            await field.move(oldIndex, newIndex)
        }
    }

    return <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <div className="field-choice">
            <SortableContext items={toJS(field.value)} strategy={verticalListSortingStrategy}>
                {
                    field.value?.map((item, index) => {
                        return <ChoiceItem key={item.id} index={index} item={item} onRemove={field.remove}/>
                    })
                }
            </SortableContext>
            <div style={{marginTop: '20px'}}>
                <Button onClick={async () => {
                    await field.push({
                        name: '选项',
                        id: Math.random().toString(36).slice(-6),
                        value: Math.random().toString(36).slice(-6),
                        selected: false,
                        hidden: false,
                    })
                }} type="primary">添加选项</Button>
            </div>
        </div>
    </DndContext>
})

const FieldChoicesContainer = ({fieldNamePath}: { fieldNamePath: string }) => {
    return <ArrayField name={`${fieldNamePath}.choices`} component={[FieldChoices, {fieldNamePath}]}/>
}

export default FieldChoicesContainer
