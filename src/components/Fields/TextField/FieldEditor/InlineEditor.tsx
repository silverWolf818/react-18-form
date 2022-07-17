import {Field} from '@formily/react'
import {Input} from 'antd'

const InlineEditor = ({fieldNamePath}: { fieldNamePath: string }) => {
    return <div>
        <div>
            <div>{fieldNamePath}</div>
            <Field name={`${fieldNamePath}.label`} component={[Input]}/>
        </div>
        <div>
            <Input readOnly/>
        </div>
    </div>
}

export default InlineEditor
