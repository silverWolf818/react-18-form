import Observable from './Observable'

export const AddAction = new Observable()
export const RemoveAction = new Observable()
export const MoveAction = new Observable()
export const UpdateAction = new Observable()

export const createNewField = (item: any) => {
    return {
        ...item,
        apiCode: Math.random().toString(36).slice(-6)
    }
}
