/**
 * 函数节流-达到一定时间间隔将会触发一次
 * @param func
 * @param wait
 * @param args
 * @returns {Function}
 */
export default function throttle(func, wait = 500, ...args) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                clearTimeout(timer);
            }, wait);
        }
    };
}
