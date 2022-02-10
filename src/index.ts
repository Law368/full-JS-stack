import './style.scss';
import {renderGallery} from './renderGallery';
import {getData} from './getData';
import {renderAlbums} from './renderAlbums';
import createElement from './createElement';
import {setThumbnailSource} from './setThumbnailSource';

const defaultAlbumsNumberOnPage: number = 8; // переименовать в defaultAlbumsAmount
let pageCounter = 1;

export async function onLoadMore() {
    const albumsWrapper = document.querySelector('.albumPage__wrapper');
    const newAlbums = await getData(
        `https://jsonplaceholder.typicode.com/albums/?_start=${
            defaultAlbumsNumberOnPage * pageCounter
        }&_end=${
            defaultAlbumsNumberOnPage * pageCounter + defaultAlbumsNumberOnPage
        }`
    );
    for (let i = 0; i < newAlbums.length; i++) {
        console.log(newAlbums[i].id);
        const album = createElement({
            tag: 'div',
            className: 'album',
            id: (newAlbums[i].id - 1).toString(),
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

const state = {
    _screen: 'albums',
    _id: 1 as number,
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
        this._id = Number(data) + 1;
    },
    get id(): number {
        return this._id;
    },
};

renderAlbums();

/*
---------------- АЛГОРИТМ РАБОТЫ ------------------------------------
1. Страница загружается, происходит запуск функции createAlbums из свойства объекта state.albumsView. На сервер отправляется запрос на получение альбомов. Албомы получаются. Создаются элементы альбомов и им присваиваются нужные им данные. На каждый альбом навешивается обработчик клика.
2. Пользователь кликает на альбом, происходит запуск функции createGallery из свойства объекта state.galleryView. На сервер отправляется запрос на получение фото. Создается кнопка  с обработчиком клика для возврата окна просмтора альбомов.Создаются фото и присваиваются значения.
3. Пользователь кликает на кнопку return, происходит запуск функции createAlbums из свойства объекта state.albumsView.
*/

export {state};
