import {ArrayField, observer, useField} from '@formily/react'
import {ArrayField as ArrayFieldType} from '@formily/core'
import {useEffect} from 'react'
import {AddAction} from '../util/FieldAction'
import TypeMap from './Fields/editorMap'

const FormCanvasGroup = observer(() => {
    const {value, insert} = useField<ArrayFieldType>()

    const addField = async ({index, data}: any) => {
        await insert(index, data)
    }

    const removeField = () => {

    }

    useEffect(() => {
        AddAction.subscribe(addField)
        return () => {
            AddAction.unsubscribe(addField)
        }
    }, [])

    return <div>
        {
            value.map((item, index) => {
                const FieldEditor = TypeMap[item.type]
                return <div key={index}><FieldEditor fieldNamePath={`${index}`}/></div>
            })
        }
    </div>
})

const FormCanvasPanel = () => {
    return <div className="form-canvas-panel">
        <ArrayField name="fields" component={[FormCanvasGroup]}/>
    </div>
}

export default FormCanvasPanel
