import {ArrayField, observer, useField} from '@formily/react'
import { ArrayField as ArrayFieldType } from '@formily/core'

const FormCanvasGroup = observer(()=> {
    const field = useField<ArrayFieldType>()
    console.log(field);
    return <div>{
        field.value.map(item => {
            return <div>{item.name}</div>
        })
    }</div>
})

const FormCanvasPanel =()=> {
    return <ArrayField name="fields" component={[FormCanvasGroup]} />
}

export default FormCanvasPanel
