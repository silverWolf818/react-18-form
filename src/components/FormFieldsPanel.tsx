import formFieldGroups from '../mock/formFieldGroups.json'

const FormFieldsPanel = ()=> {
    return <div className="form-fields-panel">
       <div className="fields-group">
           {
               formFieldGroups.map(item => <div className="fields-panel-button" key={item.type}>{item.typeName}</div>)
           }
       </div>
    </div>
}

export default FormFieldsPanel
