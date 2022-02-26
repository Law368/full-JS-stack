import {createElement} from '../create elements/createElement';
import {createBtn} from './createBtn';
import {getData} from '../fetch data/getData';
import {ScreenType, GalleryMode} from '../Enums and Types/enums';
import {getId, getPhotos} from '../state/state';
import {Photos} from '../Enums and Types/types';
import {renderFullImage} from './renderFullImage';
import {renderModalWindow} from './renderModal';
import {renderImage} from './renderImage';
import {useCorrectIDfromArray} from '../helpers/useCorrectIDfromArray';

const wrapper = document.querySelector('.content-wrapper');
const galleryMode = localStorage.getItem('galleryMode');

const imageIndex = 0;

export async function renderGallery() {
    const idFromState = getId();
    const photosFromState = getPhotos();

    const albumId = idFromState || Number(localStorage.getItem('albumID'));
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
        renderModalWindow(photos, albumId);
        renderImage(photosArr, imageIndex, galleryWrapper);
        createBtn();
        localStorage.setItem('screenType', ScreenType.gallery);
        localStorage.setItem('galleryMode', GalleryMode.thumbnails);

        if (galleryMode === GalleryMode.fullscreen) {
            renderFullImage(localStorage.getItem('fullImageUrl'));
            console.log(localStorage.getItem('fullImageUrl'));
        }
    } catch (err) {
        console.log('The gallery wasnt created', err);
    }
}

export {imageIndex};
