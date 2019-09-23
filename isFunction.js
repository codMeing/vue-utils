import getTag from './global/getTag.js';
import isObject from './isObject.js';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 */
export default function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    const tag = getTag(value);
    return tag == '[object Function]' || tag == '[object AsyncFunction]' ||
        tag == '[object GeneratorFunction]' || tag == '[object Proxy]';
}
