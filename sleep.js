/**
 * 阻塞
 * @param {*} time 等待时间
 */
export default function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}