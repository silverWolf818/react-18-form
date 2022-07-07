const defaultProps = (args: any) => {
    return {
        choices: [{
            name: '选项1',
            value: Math.random().toString(36).slice(-6),
            selected: false,
            hidden: false,
        }, {
            name: '选项2',
            value: Math.random().toString(36).slice(-6),
            selected: false,
            hidden: false,
        }, {
            name: '选项3',
            value: Math.random().toString(36).slice(-6),
            selected: false,
            hidden: false,
        }]
    }
}

export default defaultProps