import EXIF from 'exif-js';

/**
 * 图片压缩，自带图片方向角纠正配置项
 * @param file 图片原文件 【必填】
 * @param opts 配置项
 * @returns {Promise<any>}
 */
export default function compressImg(file = null, opts) {
    let Orientation = '';
    // 定义默认配置参数
    let options = {
        outputType: 'base64', // 导出格式，默认以base64格式导出，可取值：'base64' || 'blob'
        quality: 0.7, // 压缩质量，取值范围(0, 1]
        type: 'png', // 图片导出格式，默认'png'
        maxDefaultSize: 10, // 压缩后的最大值限制，默认10M，压缩后还超过该值，则报错
        maxWidth: 1200, // 压缩后图片最大宽度
        maxHeight: 900, // 压缩后图片最大高度
        autoOrientation: true, // 是否自动纠正图片旋转角度
    };
    options = Object.assign({}, options, opts);

    // 旋转角度
    if (options.autoOrientation) {
        EXIF.getData(file, function() {
            EXIF.getAllTags(this);
            Orientation = EXIF.getTag(this, 'Orientation');
        });
    }

    let imgQuality = options.quality > 1 ? 1 : options.quality <= 0 ? 0.1 : options.quality;
    let reader = new FileReader();
    let img = new Image();
    // 图片转base64后的大小
    let imgSize = 0;

    // 选择的文件是图片
    if (file.type.indexOf('image') === 0) {
        reader.readAsDataURL(file);
    } else {
        console.error('请选择图片文件进行压缩！');
        return false;
    }
    // 文件base64化，以便获知图片原始尺寸
    reader.onload = function(e) {
        imgSize = e.total;
        img.src = e.target.result;
    };

    // 创建缩放图片所需的canvas
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    // 返回promise对象
    return new Promise((resolve, reject) => {
        // base64地址图片加载完毕后
        img.onload = e => {
            // 图片原始尺寸
            let originWidth = img.width;
            let originHeight = img.height;

            // 目标尺寸
            let targetWidth = originWidth;
            let targetHeight = originHeight;

            // 图片大小或尺寸超过最大限制
            if (originWidth > options.maxWidth || originHeight > options.maxHeight) {
                // 图片原始宽高比例大于最大宽高比例，按照宽度限定尺寸
                if (originWidth / originHeight > options.maxWidth / options.maxHeight) {
                    targetWidth = options.maxWidth;
                    targetHeight = Math.round(options.maxWidth * (originHeight / originWidth));
                } else {
                    targetWidth = Math.round(options.maxHeight * (originWidth / originHeight));
                    targetHeight = options.maxHeight;
                }
            }

            // 使用canvas对图片进行缩放压缩操作
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            // 清除画布
            context.clearRect(0, 0, targetWidth, targetHeight);
            // 图片压缩
            context.drawImage(img, 0, 0, targetWidth, targetHeight);
            if (options.autoOrientation && Orientation != '' && Orientation != 1 && Orientation != undefined) {
                let width = targetWidth;
                let height = targetHeight;
                switch (Orientation) {
                    case 6: //需要顺时针90度旋转
                        canvas.width = height;
                        canvas.height = width;
                        context.rotate((90 * Math.PI) / 180);
                        context.drawImage(img, 0, 0, width, -height);
                        break;
                    case 8: //需要逆时针90度旋转
                        canvas.width = height;
                        canvas.height = width;
                        context.rotate((-90 * Math.PI) / 180);
                        context.drawImage(img, 0, 0, -width, height);
                        break;
                    case 3: //需要180度旋转
                        context.rotate((180 * Math.PI) / 180);
                        context.drawImage(img, 0, 0, -width, -height);
                        break;
                }
            }

            if (options.outputType === 'base64') {
                // canvas转为base64上传
                let targetType = options.type ? `image/${options.type}` : file.type || 'image/jpeg';
                let base64 = canvas.toDataURL(targetType, imgQuality);
                let strContent = base64.split('base64,')[1].replace(/=/g, '');
                let contentLen = strContent.length;
                let base64Size = parseInt(contentLen - (contentLen / 8) * 2);
                // 压缩后还大于压缩后最大值限制
                if (base64Size > options.maxDefaultSize * 1024 * 1024) {
                    let errMsg = `图片超过${options.maxDefaultSize}M,请重新选择`;
                    reject(errMsg);
                } else {
                    resolve(base64);
                }
            } else if (options.outputType === 'blob') {
                prefillToBlob();
                // canvas转为blob上传
                canvas.toBlob(blob => {
                    resolve(blob);
                }, `image/${options.type}` || file.type || 'image/jpeg');
            }
        };
        img.onerror = () => {
            let errMsg = '图片加载失败';
            reject(errMsg);
        };
    });
}

// 解决部分手机没有toBlob的问题
function prefillToBlob() {
    if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value(callback, type, quality) {
                var binStr = atob(this.toDataURL(type, quality).split(',')[1]),
                    len = binStr.length,
                    arr = new Uint8Array(len);

                for (var i = 0; i < len; i++) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback(new Blob([arr], { type: type || 'image/png' }));
            },
        });
    }
}
