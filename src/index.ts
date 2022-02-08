import './style.scss';
import createBtn from './createBtn';
import createElement from './createElement';
import fetchData from './fetchData';
import {setThumbnailSource} from './setThumbnailSource';
import renderAlbums from './renderAlbums';

const body = document.querySelector('body');

const albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums/';
const photosUrl: string = 'https://jsonplaceholder.typicode.com/photos/';
const wrapper = document.querySelector('.content-wrapper');

// const defaultAlbumsNumberOnPage: number = 4;

renderAlbums();
createBtn();

/*
---------------- АЛГОРИТМ РАБОТЫ ------------------------------------
1. Страница загружается, происходит запуск функции createAlbums из свойства объекта state.albumsView. На сервер отправляется запрос на получение альбомов. Албомы получаются. Создаются элементы альбомов и им присваиваются нужные им данные. На каждый альбом навешивается обработчик клика.
2. Пользователь кликает на альбом, происходит запуск функции createGallery из свойства объекта state.galleryView. На сервер отправляется запрос на получение фото. Создается кнопка  с обработчиком клика для возврата окна просмтора альбомов.Создаются фото и присваиваются значения.
3. Пользователь кликает на кнопку return, происходит запуск функции createAlbums из свойства объекта state.albumsView.
*/

export {renderAlbums};
