import compressImg from './compress-img';
import deepClone from './deep-clone';
import debounce from './debounce';
import fillContainerWhenImgLoad from './fill-container-when-img-load';
import { validator } from './validator';
import validata from './validata';
import throttle from './throttle';
import distinct from './distinct';
import isObject from './isObject';
import isFunction from './isFunction';
import isNumber from './isNumber';
import isArray from './isArray';
import sleep from './sleep';

const install = function (Vue, opts = {}) {
    Object.defineProperties(Vue.prototype, {
        $compressImg: {
            value: compressImg,
        },
        $debounce: {
            value: debounce,
        },
        $deepClone: {
            value: deepClone,
        },
        $fillContainerWhenImgLoad: {
            value: fillContainerWhenImgLoad,
        },
        $validator: {
            value: validator,
        },
        $validata: {
            value: validata,
        },
        $qys_compressImg: {
            value: compressImg,
        },
        $qys_debounce: {
            value: debounce,
        },
        $qys_deepClone: {
            value: deepClone,
        },
        $qys_fillContainerWhenImgLoad: {
            value: fillContainerWhenImgLoad,
        },
        $qys_validator: {
            value: validator,
        },
        $qys_validata: {
            value: validata,
        },
        $qys_throttle: {
            value: throttle,
        },
        $qys_distinct: {
            value: distinct,
        },
        $qys_isObject: {
            value: isObject,
        },
        $qys_isFunction: {
            value: isFunction,
        },
        $qys_isNumber: {
            value: isNumber,
        },
        $qys_isArray: {
            value: isArray,
        },
        $qys_sleep: {
            value: sleep,
        },
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default { install };
