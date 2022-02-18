import {createElement} from '../createElement';
import {renderFullImage} from './renderFullImage';
function renderImage(array: any, imageIndex: any, wrapper: any) {
    for (let i = 0; i < array.length; i += 1) {
        const imageContainer = createElement({
            tag: 'div',
            className: 'gallery__image-container',
        });
        wrapper.appendChild(imageContainer);
        let image = createElement({
            tag: 'img',
            className: 'gallery__image',
            id: String(array[i].id),

            attribute: 'src',
            attrValue: array[i].url,
        });
        image.dataset.order = i.toString();
        imageContainer.appendChild(image);

        image.addEventListener('click', () => {
            imageIndex = Number(image.dataset.order);
            localStorage.setItem('fullImageUrl', image.getAttribute('src'));
            renderFullImage(localStorage.getItem('fullImageUrl'));
        });
    }
}

export {renderImage};
