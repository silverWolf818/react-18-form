import {Field} from '@formily/react'
import {Input} from 'antd'

const InlineEditor = ({fieldNamePath}: { fieldNamePath: string }) => {
    return <div>
        <Field name={`${fieldNamePath}.label`} component={[Input]}/>
        <div>
            RadioButton
        </div>
    </div>
}

export default InlineEditor