import {createElement} from './createElement';
import {createBtn} from './createBtn';
import {getData} from './getData';
import {ScreenType, GalleryMode} from './enums';
import {getPhotos, getId} from './state';
import {Photos} from './types';
import {renderFullImage} from './renderFullImage';
import {renderModalWindow} from './renderModal';
import {renderImage} from './renderImage';
import {useCorrectIDfromArray} from './useCorrectIDfromArray';
const wrapper = document.querySelector('.content-wrapper');
const galleryMode = localStorage.getItem('galleryMode');

let imageIndex = 0;

export async function renderGallery() {
    const idFromState = getId();
    const photosFromState = getPhotos();

    const albumId = idFromState
        ? idFromState
        : Number(localStorage.getItem('albumID'));
    let photos: Photos;

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
        const restoredAlbums = JSON.parse(localStorage.getItem('albumsInfo'));
        const galleryInfo = createElement({
            tag: 'div',
            className: 'gallery__info',
        });
        galleryWrapper.appendChild(galleryInfo);
        const galleryHeading = createElement({
            tag: 'h1',
            className: 'gallery__heading',
            value: `${restoredAlbums[useCorrectIDfromArray(albumId)].title}`,
        });
        galleryInfo.appendChild(galleryHeading);
        const photosArr = photos[albumId];
        debugger;
        renderModalWindow(photos, albumId);
        renderImage(photosArr, imageIndex, galleryWrapper);
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
