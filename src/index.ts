import './style.scss';
import {renderGallery} from './renderGallery';
import {getData} from './getData';
import {renderAlbums} from './renderAlbums';
import {createElement} from './createElement';
import {setThumbnailSource} from './setThumbnailSource';
import {ScreenType, GalleryMode} from './enums';

const defaultAlbumsNumberOnPage: number = 8; // переименовать в defaultAlbumsAmount
let pageCounter = 1;

////////////////////////// Вынести в отдельную функцию
const screenType = localStorage.getItem('screenType');
const galleryMode = localStorage.getItem('galleryMode');
///////////////////////

export async function onLoadMore() {
    const albumsWrapper = document.querySelector('.albumPage__wrapper');
    const newAlbums = await getData(
        `https://jsonplaceholder.typicode.com/albums/?_start=${
            defaultAlbumsNumberOnPage * pageCounter + 1
        }&_end=${
            defaultAlbumsNumberOnPage * pageCounter +
            defaultAlbumsNumberOnPage +
            1
        }`
    );
    for (let i = 0; i < newAlbums.length; i++) {
        console.log(newAlbums[i].id);
        const album = createElement({
            tag: 'div',
            className: 'album',
            id: newAlbums[i].id.toString(),
        });
        albumsWrapper.appendChild(album);
        album.addEventListener('click', () => {
            console.log(`The old screen was ${state.screen}`);
            console.log(`The old state ID was ${state.id}`);
            state.id = newAlbums[i].id;
            state.screen = 'gallery';
            console.log(`The new state ID is ${state.id}`);
            console.log(`The new screen is ${state.screen}`);
        });
        const thumbnail = createElement({
            tag: 'img',
            className: 'album__first-image',
            attribute: 'src',
            attrValue: await setThumbnailSource(newAlbums[i].id),
        });
        album.appendChild(thumbnail);
        const albumInfo = createElement({
            tag: 'div',
            className: 'album__info',
        });
        album.appendChild(albumInfo);
        // console.log(newAlbums[i]);
        const heading = createElement({
            tag: 'h3',
            className: 'album__heading',
            value: newAlbums[i].title,
        });
        albumInfo.appendChild(heading);
        const id = createElement({
            tag: 'p',
            className: 'album__ID',
            value: (newAlbums[i].id - 1).toString(),
        });
        albumInfo.appendChild(id);
    }
    pageCounter++;
}

const state: {
    _screen: string;
    screen: string;
    id: any;
    _id: any;
    _photos: any;
    photos: any;
} = {
    _screen: 'albums',
    _id: null,
    _photos: {},
    set photos(albums) {
        this._photos = {...this._photos, [albums.id]: albums.photos};
    },
    get photos() {
        return this._photos;
    },
    set screen(type) {
        this._screen = type;
        // body.innerHTML = '';
        if (type === 'gallery') {
            renderGallery();
            return;
        }
        renderAlbums();
    },
    get screen() {
        return this._screen;
    },
    set id(data) {
        this._id = Number(data);
    },
    get id(): number {
        return this._id;
    },
};
async function renderPage() {
    if (screenType === ScreenType.albums) {
        renderAlbums();
    } else if (screenType === ScreenType.gallery) {
        renderGallery();
    }
}

renderPage();

export {state};
