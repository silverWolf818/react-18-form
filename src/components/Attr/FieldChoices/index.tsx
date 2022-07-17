import {ArrayField, Field} from "@formily/react"
import {Button, Input} from "antd"

const FieldChoices = ({fieldNamePath}: { fieldNamePath: string }) => {
    return <div className='field-choice'>
        <ArrayField name={`${fieldNamePath}.choices`}>
            {
                (field) => {
                    return <div>
                        {
                            field.value.map((item, index) => {
                                return <div key={index}>
                                    <Field name={`${index}.name`} component={[Input]}/>
                                </div>
                            })
                        }
                        <div style={{marginTop: '20px'}}>
                            <Button onClick={async () => {
                                await field.push({
                                    name: '选项',
                                    value: Math.random().toString(36).slice(-6),
                                    selected: false,
                                    hidden: false,
                                })
                            }} type='primary'>Add</Button>
                        </div>
                    </div>
                }
            }
        </ArrayField>
    </div>
}

export default FieldChoices
