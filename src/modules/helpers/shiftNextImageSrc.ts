import {imageIndex} from '../render Gallery/renderModal';
// Поставить imgIndex как параметр
function shiftNextImgSrc(imageIndex: number) {
    return imageIndex + 1;
}

export {shiftNextImgSrc};
