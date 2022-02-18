import {createElement} from './createElement';
import {shiftNextImgSrc} from './shiftNextImageSrc';
import {shiftPrevImgSrc} from './shiftPrevImageSrc';
import {GalleryMode} from './enums';

let fullImage;
let imageIndex = 0;
function renderModalWindow(photos: any, albumId: any) {
    const modal = createElement({
        tag: 'div',
        className: 'modal',
    });

    const closeModal = createElement({
        tag: 'span',
        className: 'close-modal',
        value: 'X',
    });
    modal.appendChild(closeModal);

    const modalContent = createElement({
        tag: 'div',
        className: 'modal-content',
    });
    modal.appendChild(modalContent);

    const nextImage = createElement({
        tag: 'a',
        className: 'image-next',
        value: 'NEXT',
    });
    modal.appendChild(nextImage);
    nextImage.addEventListener('click', function () {
        if (Number(imageIndex) >= photos[albumId].length - 1) {
            imageIndex = 0;
        }
        console.log(photos, albumId, imageIndex);
        fullImage = createElement({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: `${
                photos[albumId][Number(shiftNextImgSrc(imageIndex))].url
            }`,
        });
        modalContent.appendChild(fullImage);
        imageIndex = imageIndex + 1;
    });

    const previousImage = createElement({
        tag: 'a',
        className: 'image-previous',
        value: 'PREV',
    });
    modal.appendChild(previousImage);
    previousImage.addEventListener('click', function () {
        if (Number(imageIndex) <= 0) {
            imageIndex = photos[albumId].length;
        }
        fullImage = createElement({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: `${
                photos[albumId][Number(shiftPrevImgSrc(imageIndex))].url
            }`,
        });
        modalContent.appendChild(fullImage);
        imageIndex = imageIndex - 1;
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('galleryMode', GalleryMode.thumbnails);
    });
    document.body.appendChild(modal);
}

export {imageIndex, renderModalWindow};
