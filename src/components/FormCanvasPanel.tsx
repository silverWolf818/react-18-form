import {ObjectField, observer, useField} from '@formily/react'
import {ObjectField as ObjectFieldType} from '@formily/core'
import {useEffect} from 'react'
import {AddAction} from '../util/FieldAction'
import TypeMap from './Fields/editorMap'

const FormCanvasGroup = observer(() => {
    const field = useField<ObjectFieldType>()

    const [keys = [], values = []] = Object.entries(field.value)

    const addField = async ({index, data}: any) => {

    }

    const removeField = () => {

    }

    useEffect(() => {
        AddAction.subscribe(addField)
        return () => {
            AddAction.unsubscribe(addField)
        }
    }, [])

    console.log(values)

    return <>
        {
            values.map((item: any) => {
                return <div>123</div>
            })
        }
    </>
})

const FormCanvasPanel = () => {
    return <div className="form-canvas-panel">
        <ObjectField name="fields" component={[FormCanvasGroup]}/>
    </div>
}

export default FormCanvasPanel
