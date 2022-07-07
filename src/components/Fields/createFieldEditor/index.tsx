import {ComponentType, Suspense} from 'react'

const createFieldEditor = ({renderer}: { renderer: ComponentType<any> }) => {
    const EditorComponent = renderer
    return ({fieldNamePath}: { fieldNamePath: string }) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <div className="field-editor-container"><EditorComponent fieldNamePath={fieldNamePath}/></div>
        </Suspense>
    }
}

export default createFieldEditor