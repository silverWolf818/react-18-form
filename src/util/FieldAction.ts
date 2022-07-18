import Observable from './Observable'
import defaultPropsMap from '../components/Fields/defaultPropsMap'

export const AddAction = new Observable()
export const RemoveAction = new Observable()
export const MoveAction = new Observable()
export const UpdateAction = new Observable()

export const createNewField = (item: any) => {
    const defaultProps = defaultPropsMap[item.type]
    const props = defaultProps()
    return {
        ...item,
        ...props,
        __cid: Math.random().toString(36).slice(-6)
    }
}
