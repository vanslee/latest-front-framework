class BusClass {
    emit?: (name: string) => void;
    on?: (name: string, callback: Function) => void;
}
type ParamsKey = string | number | symbol
type List = {
    [key: ParamsKey]: Array<Function>
}
class Bus implements BusClass {
    list: List
    constructor() {
        this.list = {}
    }
    emit(eventName: string, ...args: Array<any>) {
        let event: Array<Function> = this.list[eventName]
        event.forEach(element => {

            element.apply(this, args)
        });
    }
    on(name: string, callback: Function) {
        let fn: Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }

}
export default new Bus()