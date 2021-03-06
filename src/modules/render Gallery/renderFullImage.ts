import {createElement} from '../create elements/createElement';
import {ScreenType, GalleryMode} from '../Enums and Types/enums';

function renderFullImage(imageURL: string) {
    const modal: HTMLElement = document.querySelector('.modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const fullImage = createElement({
        tag: 'img',
        className: 'gallery__image--selected',
        attribute: 'src',
        attrValue: `${imageURL}`,
    });
    const modalContent: HTMLElement = document.querySelector('.modal-content');
    modalContent.appendChild(fullImage);
    localStorage.setItem('screenType', ScreenType.gallery);
    localStorage.setItem('galleryMode', GalleryMode.fullscreen);
    console.log();
}

export {renderFullImage};
