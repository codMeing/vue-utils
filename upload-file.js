import uuid from './uuid';
import { isFunction } from './type';

/**
 * 函数创建input上传文件
 * @param {*} opts
 */
export default function uploadFile(opts) {
    let options = {
        accept: "image/*",                // 接收文件类型
        capture: '',                      // 直接调用摄像头 example: "image/*"对应"camera" || "video/*"对应"camcorder"
        callback: function (e) { },       // 回调函数
    };
    options = Object.assign({}, options, opts);

    const id = uuid();
    let inputEle = document.createElement("input");
    inputEle.id = id;
    inputEle.type = "file";
    inputEle.accept = options.accept;
    if (options.capture) {
        inputEle.capture = options.capture;
    }

    if (!isFunction(options.callback)) {
        throw new Error('回掉函数不合法！');
    }

    inputEle.click();
    inputEle.addEventListener("change", e => options.callback(e), false);
}