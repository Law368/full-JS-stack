import {createElement} from '../create elements/createElement';
import {shiftNextImgSrc} from '../helpers/shiftNextImageSrc';
import {shiftPrevImgSrc} from '../helpers/shiftPrevImageSrc';
import {GalleryMode} from '../Enums and Types/enums';
import {Photos} from '../Enums and Types/types';

let fullImage;
let imageIndex = 0;
function renderModalWindow(photos: Photos, albumId: number) {
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
    nextImage.addEventListener('click', () => {
        if (Number(imageIndex) >= photos[albumId].length - 1) {
            imageIndex = 0;
        }
        fullImage = createElement({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: `${
                photos[albumId][Number(shiftNextImgSrc(imageIndex))].url
            }`,
        });
        modalContent.appendChild(fullImage);
        imageIndex += 1;
    });

    const previousImage = createElement({
        tag: 'a',
        className: 'image-previous',
        value: 'PREV',
    });
    modal.appendChild(previousImage);
    previousImage.addEventListener('click', () => {
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
        imageIndex -= 1;
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('galleryMode', GalleryMode.thumbnails);
    });
    document.body.appendChild(modal);
}

export {imageIndex, renderModalWindow};
