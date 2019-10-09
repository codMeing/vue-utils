import compressImg from './compress-img';
import deepClone from './deep-clone';
import debounce from './debounce';
import fillContainerWhenImgLoad from './fill-container-when-img-load';
import { validator } from './validator';
import validata from './validata';
import throttle from './throttle';
import distinct from './distinct';
import * as type from './type';
import sleep from './sleep';

const utilsObj = Object.assign({}, { ...type }, { compressImg, deepClone, debounce, fillContainerWhenImgLoad, validator, validata, throttle, distinct, sleep, });

const install = function (Vue, opts = {}) {
    let utils = {}, temp = {};
    for (let k in utilsObj) {
        temp[k] = {
            value: utilsObj[k],
        };
    }

    Object.defineProperties(utils, temp);
    Object.defineProperties(Vue.prototype, {
        $qUtils: {
            value: utils,
        },
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default { install };
