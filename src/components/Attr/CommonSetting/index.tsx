import {Button} from "antd"
import {RemoveAction} from "../../../util/FieldAction";

const CommonSetting = ({fieldNamePath}: { fieldNamePath: string }) => {
    const onRemove = () => {
        RemoveAction.notify({cid: fieldNamePath})
    }
    
    return <div className="common-setting">
        <Button>复制</Button>
        <Button onClick={onRemove}>删除</Button>
    </div>
}

export default CommonSetting
