import getTag from './global/getTag.js'

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
export default function isString(value) {
    const type = typeof value;
    return type == 'string' || (type == 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]');
}