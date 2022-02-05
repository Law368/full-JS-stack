import './style.scss';
import fetchData from './fetchData';
import createElement from './createElement';

const albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums/';
const photosUrl: string = 'https://jsonplaceholder.typicode.com/photos/';
const defaultAlbumsNumberOnPage: number = 8;
const wrapper = document.querySelector('.content-wrapper');

let clickedElementId: string = '';

async function setThumbnailSource(albumId: number) {
    const photosArr = await fetchData(photosUrl);
    const result = photosArr.find(
        (image: any) => image.albumId === albumId + 1
    );
    if (result !== undefined) {
        return result.thumbnailUrl;
    }
    return '';
}

async function createAlbums() {
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

            album.addEventListener('click', createGallery);
        }
    } catch (err) {
        console.log('There was an error', err);
    }
}

async function createGallery() {
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
            createAlbums();
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
}
document.addEventListener('DOMContentLoaded', createAlbums);
// 1. написать отдельную функцию fetchData для альбомов и изображений async function fetchData(url) +++
// 2. разбить функции createAlbums и createGalleries +++
// 3. навесить обработчики событий в момент создания элементов +++
// 4. добавить wrapper внутрь body который будет обнулятся при создании элементов клике на альбом или кнопке +++
// 5. убрать задокументированный код +++
// 6. написать полный алгоритм работы приложения с условиями, без учета local storage. Как переместить состояние приложения в какой то объект либо делать какое то кастомное событие чтобы менять вид приложения с альбома на галллерею и наоборот. +++
// 7. создать универсальную функцию для создания элементов в которую будут заноситься элементы, аттрибуты, классы и другие свойства. +++
// 8. разнести функции fetchData в отдельные файлы и другие фнукции, чтобы очистить index.js
// 9. теории promise, async/await и c .then

/*
---------------- АЛГОРИТМ РАБОТЫ ------------------------------------
1. Страница загружается, происходит запуск функции createAlbums. На сервер отправляется запрос на получение альбомов. Албомы получаются. Создаются элементы альбомов и им присваиваются нужные им данные.
2. Пользователь кликает на альбом, происходит запуск функции createGallery. На сервер отправляется запрос на получение фото. Создается элементы фото и присваиваются значения.
3. Пользователь кликает на кнопку return, происходит запуск функции createAlbums.

*/
