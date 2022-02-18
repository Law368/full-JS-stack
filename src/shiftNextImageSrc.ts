import {imageIndex} from './modules/renderModal';
//Поставить imgIndex как параметр
function shiftNextImgSrc(imageIndex: number) {
    return imageIndex + 1;
}

export {shiftNextImgSrc};
