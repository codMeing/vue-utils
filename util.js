import compressImg from './compress-img';
import deepClone from './deep-clone';
import debounce from './debounce';
import fillContainerWhenImgLoad from './fill-container-when-img-load';

const install = function(Vue, opts = {}) {
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
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default { install };
