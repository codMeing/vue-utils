/**
 * 图片加载成功自动撑满父级容器
 */
export default function fillContainerWhenImgLoad() {
    let scale = event.target.parentElement.offsetWidth / event.target.parentElement.offsetHeight;
    let image = event.target;
    if (image.complete == true) {
        if (image.width > image.height * scale) {
            image.style.cssText = 'width: 100%;';
        } else {
            image.style.cssText = 'height: 100%;';
        }
    }
}
