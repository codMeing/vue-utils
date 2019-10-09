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

const install = function (Vue, opts = {}) {
    const utils = {
        compressImg,
        debounce,
        deepClone,
        fillContainerWhenImgLoad,
        validator,
        validata,
        throttle,
        distinct,
        sleep,
        type,
    };
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
