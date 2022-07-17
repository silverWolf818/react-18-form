import formFieldGroups from '../mock/formFieldGroups.json'
import {AddAction, createNewField} from '../util/FieldAction'


const FormFieldsPanel = () => {

    const onAddField = (item: any) => {
        AddAction.notify({index: 0, data: createNewField(item)})
    }

    return <div className="form-fields-panel">
        <div className="fields-group">
            {
                formFieldGroups.map(item => <div onClick={() => onAddField(item)} className="fields-panel-button"
                                                 key={item.type}>{item.typeName}</div>)
            }
        </div>
    </div>
}

export default FormFieldsPanel
