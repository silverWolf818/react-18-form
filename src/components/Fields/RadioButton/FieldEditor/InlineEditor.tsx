import {Field} from '@formily/react'
import {Input} from 'antd'
import FieldChoices from '../../../Attr/FieldChoices'

const InlineEditor = ({fieldNamePath}: { fieldNamePath: string }) => {
    return <div className="field-inline-editor">
        <div className="field-label">
            <Field name={`${fieldNamePath}.label`} component={[Input]}/>
        </div>
        <FieldChoices fieldNamePath={fieldNamePath}/>
    </div>
}

export default InlineEditor
