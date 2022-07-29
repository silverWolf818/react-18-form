const defaultProps = (args: any) => {
    return {
        choices: [{
            name: '选项1',
            id: Math.random().toString(36).slice(-6),
            value: Math.random().toString(36).slice(-6),
            selected: false,
            hidden: false,
        }, {
            name: '选项2',
            id: Math.random().toString(36).slice(-6),
            value: Math.random().toString(36).slice(-6),
            selected: false,
            hidden: false,
        }, {
            name: '选项3',
            id: Math.random().toString(36).slice(-6),
            value: Math.random().toString(36).slice(-6),
            selected: false,
            hidden: false,
        }]
    }
}

export default defaultProps