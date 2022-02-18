import {createElement} from './createElement';
import {createBtn} from './modules/createBtn';
import {getData} from './getData';
import {ScreenType, GalleryMode} from './enums';
import {getStateValue} from './state';
import {Photos} from './modules/types';
import {renderFullImage} from './modules/renderFullImage';
import {renderModalWindow} from './modules/renderModal';
import {renderImage} from './modules/renderImage';
import {useCorrectIDfromArray} from './modules/useCorrectIDfromArray';
const wrapper = document.querySelector('.content-wrapper');
const galleryMode = localStorage.getItem('galleryMode');

let imageIndex = 0;

export async function renderGallery() {
    const idFromState = getStateValue('id');
    const photosFromState = getStateValue('photos');

    const albumId = idFromState
        ? idFromState
        : Number(localStorage.getItem('albumID'));
    let photos: Photos;

    if (Object.keys(photosFromState).length !== 0) {
        photos = photosFromState;
        console.log('The very first Load');
    } else {
        photos = {
            [albumId]: await getData(
                `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
            ),
        };
        console.log('Second Load');
    }

    try {
        console.log(`ID STATE VALUE: ${idFromState}`);
        console.log(
            `ID FROM LOCALSTORAGE: ${Number(localStorage.getItem('albumID'))}`
        );
        wrapper.innerHTML = '';
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
        const restoredAlbums = JSON.parse(localStorage.getItem('albumsInfo'));
        console.log(restoredAlbums);
        console.log(albumId);
        console.log(restoredAlbums[albumId].title);
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
