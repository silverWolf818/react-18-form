import {onFieldInitialValueChange, onFieldReact, onFieldValueChange} from '@formily/core'
import {useFormEffects} from '@formily/react'
import { toJS } from '@formily/reactive'

const FormSettingPanel = () => {
    useFormEffects(() => {
        onFieldReact('fields', (field) => {
            // @ts-ignore
            console.log(toJS(field.value))
        })
        // onFieldInitialValueChange('fields', (field) => {
        //     console.log(field.value)
        // })
        // onFieldValueChange('fields', (field) => {
        //     console.log(field.value)
        // })
    })
    return <div className="form-setting-panel">1</div>
}

export default FormSettingPanel
