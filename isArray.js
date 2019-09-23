import getTag from './global/getTag.js'
import isObjectLike from './global/isObjectLike.js'
/**
 * isArray({})
 * // => false
 *
 * isArray([1, 2, 3])
 * // => true
 *
 * isArray(Function)
 * // => false
 *
 * isArray(null)
 * // => false
 */
export default function isArray(value) {
    return isObjectLike(value) && getTag(value) == '[object Array]';
}