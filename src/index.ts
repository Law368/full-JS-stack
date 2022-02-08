import './style.scss';
import createElement from './createElement';
import {getData} from './getData';

const wrapper = document.querySelector('.content-wrapper');
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
interface Photos {
    id: number;
    photos: Record<string, unknown>[];
}
const state = {
    _screen: 'albums',
    _id: 1 as number,
    _photos: {},
    set photos(albums: Photos) {
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

async function setThumbnailSource(albumId: number) {
    const photosArr = await getData(
        `https://jsonplaceholder.typicode.com/albums/${albumId + 1}/photos`
    );
    console.log(photosArr);
    const result = photosArr[0].thumbnailUrl;
    state.photos = {id: albumId, photos: result};
    if (result !== undefined) {
        return result;
    }
    return '';
}

function createBtn() {
    const returnBtn = createElement({
        tag: 'button',
        className: 'gallery__btn-back',
        value: 'return',
    });
    wrapper.appendChild(returnBtn);
    returnBtn.addEventListener('click', () => {
        wrapper.innerHTML = '';
        console.log(`The old screen was ${state.screen}`);
        state.screen = 'albums';
        console.log(`The new screen is ${state.screen}`);
    });
    return returnBtn;
}

async function renderGallery() {
    try {
        wrapper.innerHTML = '';
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
        console.log(state.photos);
        // const photosArr = await getData(
        //     `https://jsonplaceholder.typicode.com/albums/${state.id}/photos`
        // );

        // ДЕлать запрос фото из state
        const photosArr = state.photos[state.id];
        for (let i = 0; i < photosArr.length; i += 1) {
            const image = createElement({
                tag: 'img',
                className: 'gallery__image',
                id: photosArr[i].id,

                attribute: 'src',
                attrValue: photosArr[i].url,
            });
            galleryWrapper.appendChild(image);
        }
        createBtn();
    } catch (err) {
        console.log('The gallery wasnt created');
    }
}

const defaultAlbumsNumberOnPage: number = 4;
async function renderAlbums() {
    try {
        const albumsArr = await getData(albumsUrl);

        for (let i = 0; i < defaultAlbumsNumberOnPage; i++) {
            const album = createElement({
                tag: 'div',
                className: 'album',
                id: i.toString(),
            });
            wrapper.appendChild(album);
            const heading = createElement({
                tag: 'h3',
                className: 'album__heading',
                value: albumsArr[i].title,
            });
            album.appendChild(heading);
            album.appendChild(heading);
            const id = createElement({
                tag: 'p',
                className: 'album__ID',
                value: i.toString(),
            });
            album.appendChild(id);
            const thumbnail = createElement({
                tag: 'img',
                className: 'album__first-image',
                attribute: 'src',
                attrValue: await setThumbnailSource(i),
            });
            album.appendChild(thumbnail);
            album.addEventListener('click', () => {
                console.log(`The old screen was ${state.screen}`);
                console.log(`The old state ID was ${state.id}`);
                state.id = album.id;
                state.screen = 'gallery';
                console.log(`The new state ID is ${state.id}`);
                console.log(`The new screen is ${state.screen}`);
            });
        }
    } catch (err) {
        console.log('There was an error', err);
    }
}

renderAlbums();

/*
---------------- АЛГОРИТМ РАБОТЫ ------------------------------------
1. Страница загружается, происходит запуск функции createAlbums из свойства объекта state.albumsView. На сервер отправляется запрос на получение альбомов. Албомы получаются. Создаются элементы альбомов и им присваиваются нужные им данные. На каждый альбом навешивается обработчик клика.
2. Пользователь кликает на альбом, происходит запуск функции createGallery из свойства объекта state.galleryView. На сервер отправляется запрос на получение фото. Создается кнопка  с обработчиком клика для возврата окна просмтора альбомов.Создаются фото и присваиваются значения.
3. Пользователь кликает на кнопку return, происходит запуск функции createAlbums из свойства объекта state.albumsView.
*/
