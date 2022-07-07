class Observable {
    private observers: any[]

    constructor() {
        this.observers = []
    }

    subscribe(f: any) {
        this.observers.push(f)
    }

    unsubscribe(f: any) {
        this.observers = this.observers.filter(subscriber => subscriber !== f)
    }

    notify(data: any) {
        this.observers.forEach(observer => observer(data))
    }
}

export default Observable
