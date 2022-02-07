import './style.scss';
import fetchData from './fetchData';
import createElement from './createElement';
import {setThumbnailSource, photosUrl} from './setThumbnailSource';

const albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums/';

const defaultAlbumsNumberOnPage: number = 16;
const wrapper = document.querySelector('.content-wrapper');

let clickedElementId: string = '';

const state = {
    albumsView: async function createAlbums() {
        try {
            const albumsArr = await fetchData(albumsUrl);
            for (let i = 0; i < defaultAlbumsNumberOnPage; i++) {
                const album = createElement(
                    'div',
                    'album',
                    (i + 1).toString(),
                    undefined,
                    undefined,
                    undefined,
                    wrapper
                );
                const heading = createElement(
                    'h3',
                    'album__heading',
                    undefined,
                    albumsArr[i].title,
                    undefined,
                    undefined,
                    album
                );
                const id = createElement(
                    'p',
                    'album__ID',
                    undefined,
                    i.toString(),
                    undefined,
                    undefined,
                    album
                );
                const thumbnail = createElement(
                    'img',
                    'album__first-image',
                    undefined,
                    undefined,
                    'src',
                    await setThumbnailSource(i),
                    album
                );

                album.addEventListener('click', state.galleryView);
            }
        } catch (err) {
            console.log('There was an error', err);
        }
    },
    galleryView: async function createGallery() {
        try {
            clickedElementId = (event.target as HTMLElement).id;
            wrapper.innerHTML = '';
            const galleryWrapper = createElement(
                'div',
                'gallery__Wrapper',
                undefined,
                undefined,
                undefined,
                undefined,
                wrapper
            );
            const returnBtn = createElement(
                'button',
                'gallery__btn-back',
                undefined,
                'return',
                undefined,
                undefined,
                galleryWrapper
            );

            returnBtn.addEventListener('click', () => {
                wrapper.innerHTML = '';
                state.albumsView();
            });

            const photosArr = await fetchData(photosUrl);
            const currentGallery = photosArr.filter(
                (image: any) => image.albumId.toString() === clickedElementId
            );

            for (let i = 0; i < currentGallery.length; i++) {
                const image = createElement(
                    'img',
                    'gallery__image',
                    undefined,
                    undefined,
                    'src',
                    currentGallery[i].url,
                    galleryWrapper
                );
            }
        } catch (err) {
            console.log('The gallery wasnt created');
        }
    },
};

document.addEventListener('DOMContentLoaded', state.albumsView);

/*
---------------- АЛГОРИТМ РАБОТЫ ------------------------------------
1. Страница загружается, происходит запуск функции createAlbums из свойства объекта state.albumsView. На сервер отправляется запрос на получение альбомов. Албомы получаются. Создаются элементы альбомов и им присваиваются нужные им данные. На каждый альбом навешивается обработчик клика.
2. Пользователь кликает на альбом, происходит запуск функции createGallery из свойства объекта state.galleryView. На сервер отправляется запрос на получение фото. Создается кнопка  с обработчиком клика для возврата окна просмтора альбомов.Создаются фото и присваиваются значения.
3. Пользователь кликает на кнопку return, происходит запуск функции createAlbums из свойства объекта state.albumsView.
*/
