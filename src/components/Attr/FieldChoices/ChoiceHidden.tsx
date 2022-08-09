import {StopOutlined} from "@ant-design/icons";
import {observer, useField} from "@formily/react";
import {Field} from "@formily/core";

const ChoiceHidden = observer(() => {
    const {value, setValue} = useField() as Field

    const onClick = () => {
        setValue(!value)
    }

    return <div className="choice-hidden" onClick={onClick}><StopOutlined/></div>
})

export default ChoiceHidden
