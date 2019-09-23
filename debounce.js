/**
 * 函数防抖-在一定时间内触发函数不执行函数，超过指定时间间隔后执行一次
 * @param func
 * @param wait
 * @param args
 * @returns {Function}
 */
export default function debounce(func, wait = 500, ...args) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}
