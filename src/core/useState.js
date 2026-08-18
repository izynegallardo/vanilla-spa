// core/useState.js
export const useState = (initialValue) => {
    let value = initialValue
    const subscribers = new Set()

    const get = () => value
    const set = (newValue) => {
        value = typeof newValue === 'function' ? newValue(value) : newValue
        subscribers.forEach((fn) => fn(value))
    }
    const subscribe = (fn) => {
        subscribers.add(fn)
        return () => subscribers.delete(fn)
    }

    return [get, set, subscribe]
}
