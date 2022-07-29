import {Field} from '@formily/react'
import {Input} from 'antd'

const InlineEditor = ({fieldNamePath}: { fieldNamePath: string }) => {
    return <div className="field-inline-editor">
        <div className="field-label">
            <Field name={`${fieldNamePath}.label`} component={[Input]}/>
        </div>
        <div style={{width: '50%'}}>
            <Input readOnly/>
        </div>
    </div>
}

export default InlineEditor
