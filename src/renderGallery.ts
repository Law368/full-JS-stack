import {createElement} from './createElement';
import {createBtn} from './modules/createBtn';
import {getData} from './getData';
import {ScreenType, GalleryMode} from './enums';
import {shiftNextImgSrc} from './shiftNextImageSrc';
import {shiftPrevImgSrc} from './shiftPrevImageSrc';
import {getStateValue} from './state';
import {Photos} from './modules/types';
import {renderFullImage} from './modules/renderFullImage';
import {renderModalWindow} from './modules/renderModal';
const wrapper = document.querySelector('.content-wrapper');
const galleryMode = localStorage.getItem('galleryMode');
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';

let imageIndex = 0;

export async function renderGallery() {
    const idFromState = getStateValue('id');
    const photosFromState = getStateValue('photos');

    const albumId = idFromState
        ? idFromState
        : Number(localStorage.getItem('albumID'));
    let photos: Photos;
    // {[key: string]: []}

    if (Object.keys(photosFromState).length !== 0) {
        photos = photosFromState;
    } else {
        photos = {
            [albumId]: await getData(
                `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
            ),
        };
    }

    try {
        wrapper.innerHTML = '';
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
        // TODO: класть в local storage все альбомы (использовать json.stringify чтобы объект переконвертировать в строку)
        const albumsArr = await getData(albumsUrl);
        const galleryInfo = createElement({
            tag: 'div',
            className: 'gallery__info',
        });
        galleryWrapper.appendChild(galleryInfo);
        const galleryHeading = createElement({
            tag: 'h1',
            className: 'gallery__heading',
            value: `${albumsArr[albumId].title}`,
        });
        galleryInfo.appendChild(galleryHeading);
        const photosArr = photos[albumId];
        renderModalWindow(photos, albumId);
        //TODO: Вынести отдельно функцию создания изображений
        for (let i = 0; i < photosArr.length; i += 1) {
            const imageContainer = createElement({
                tag: 'div',
                className: 'gallery__image-container',
            });
            galleryWrapper.appendChild(imageContainer);
            let image = createElement({
                tag: 'img',
                className: 'gallery__image',
                id: String(photosArr[i].id),

                attribute: 'src',
                attrValue: photosArr[i].url,
            });
            image.dataset.order = i.toString();
            imageContainer.appendChild(image);

            image.addEventListener('click', () => {
                imageIndex = Number(image.dataset.order);
                localStorage.setItem('fullImageUrl', image.getAttribute('src'));
                renderFullImage(localStorage.getItem('fullImageUrl'));
            });
        }
        createBtn();
        localStorage.setItem('screenType', ScreenType.gallery);
        localStorage.setItem('galleryMode', GalleryMode.thumbnails);

        if (galleryMode === GalleryMode.fullscreen) {
            renderFullImage(localStorage.getItem('fullImageUrl'));
        }
    } catch (err) {
        console.log('The gallery wasnt created', err);
    }
}

export {imageIndex};
