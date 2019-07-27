/**
 * 防抖动
 * @param func
 * @param wait
 * @param args
 * @returns {Function}
 */
export default function debounce(func, wait = 500, ...args) {
    let timer = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}
