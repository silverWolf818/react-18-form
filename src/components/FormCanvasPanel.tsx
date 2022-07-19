import {ArrayField, ObjectField, observer, useField} from '@formily/react'
import {ObjectField as ObjectFieldType, ArrayField as ArrayFieldType} from '@formily/core'
import {useEffect, useRef, Fragment} from 'react'
import {AddAction} from '../util/FieldAction'
import TypeMap from './Fields/editorMap'

const FormCanvasGroup = observer(() => {
    const dictInstance = useField<ArrayFieldType>()
    const fieldsInstance = useRef<ObjectFieldType | null>(null)

    const addField = async ({index, data}: any) => {
        await dictInstance.insert(index, {
            __cid: data.__cid,
            type: data.type
        })
        await fieldsInstance.current?.addProperty(data.__cid, data)
    }

    const removeField = () => {

    }

    useEffect(() => {
        AddAction.subscribe(addField)
        return () => {
            AddAction.unsubscribe(addField)
        }
    }, [])

    return <ObjectField name="fields" basePath="">
        {
            (field) => {
                fieldsInstance.current = field
                return <div className="fields-editor-group">
                    {
                        dictInstance.value?.map((item: any) => {
                            const FieldEditor = TypeMap[item.type]
                            return <Fragment key={item.__cid}>
                                <FieldEditor cid={item.__cid} fieldNamePath={`${item.__cid}`}/>
                            </Fragment>
                        })
                    }
                </div>
            }
        }
    </ObjectField>
})

const FormCanvasPanel = () => {
    return <div className="form-canvas-panel">
        <ArrayField name="dict" component={[FormCanvasGroup]}/>
    </div>
}

export default FormCanvasPanel
