/**
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
export default function isObject(value) {
    const type = typeof value
    return value != null && (type == 'object' || type == 'function')
}