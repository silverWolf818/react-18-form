import {HolderOutlined, MinusCircleOutlined} from '@ant-design/icons'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import {Field} from '@formily/react'
import {Input} from 'antd'
import {memo} from 'react'
import ChoiceHidden from "./ChoiceHidden";

interface ChoiceItemProps {
    index: number
    item?: any
    onRemove: (index: number) => Promise<void>
}

const ChoiceItem = memo(({index, onRemove}: ChoiceItemProps) => {
    return <>
        <Field name={`${index}.name`} component={[Input, {className: 'choice-name'}]}/>
        <Field name={`${index}.hidden`} component={[ChoiceHidden]}/>
        <div className="choice-delete"><MinusCircleOutlined onClick={() => onRemove(index)}/></div>
    </>
})

const ChoiceItemContainer = ({index, item, onRemove}: ChoiceItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: item.id})
    const style = {
        transform: CSS.Transform.toString({
            x: 0,
            y: 0,
            ...transform,
            scaleX: 1,
            scaleY: 1,
        }),
        transition
    }

    return <div className="choice-item" ref={setNodeRef} style={style}>
        <div className="choice-drag" {...attributes} {...listeners}><HolderOutlined/></div>
        <ChoiceItem index={index} onRemove={onRemove}/>
    </div>
}

export default ChoiceItemContainer
