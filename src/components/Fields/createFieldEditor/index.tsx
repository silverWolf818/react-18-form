import {ComponentType, memo, Suspense} from 'react'
import {FieldEditorContainer} from '../declarations'
import CommonSetting from "../../Attr/CommonSetting"

const createFieldEditor = ({renderer}: { renderer: ComponentType<any> }) => {
    const EditorComponent = renderer
    const FieldEditor = ({fieldNamePath, cid}: FieldEditorContainer) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <div className="field-editor-container">
                <EditorComponent cid={cid} fieldNamePath={fieldNamePath}/>
                <CommonSetting fieldNamePath={fieldNamePath}/>
            </div>
        </Suspense>
    }
    return memo(FieldEditor, (prevProps, nextProps) => prevProps.cid === nextProps.cid)
}

export default createFieldEditor
