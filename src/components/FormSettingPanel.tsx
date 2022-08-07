import {onFieldInitialValueChange, onFieldReact, onFieldValueChange} from '@formily/core'
import {observer, useFormEffects} from '@formily/react'

const FormSettingPanel = observer(() => {
    useFormEffects(() => {
        onFieldReact('fields', (field) => {
            // @ts-ignore
            console.log(JSON.stringify(field.value))
        })
        // onFieldInitialValueChange('fields', (field) => {
        //     console.log(field.value)
        // })
        // onFieldValueChange('fields', (field) => {
        //     console.log(field.value)
        // })
    })
    return <div className="form-setting-panel">1</div>
})

export default FormSettingPanel
