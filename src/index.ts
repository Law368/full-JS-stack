import './style.scss';
import {renderGallery} from './renderGallery';
import {getData} from './getData';
import {renderAlbums} from './renderAlbums';
import {createElement} from './createElement';
import {setThumbnailSource} from './setThumbnailSource';
import {ScreenType} from './enums';
import {getStateValue, setStateValue} from './state';
import {fetchAlbumsInfo} from './modules/fetchAlbumsInfo';
const defaultAlbumsAmount: number = 8;
let pageCounter = 1;

////////////////////////// Вынести в отдельную функцию
const screenType = localStorage.getItem('screenType');
///////////////////////
// TODO: Попробовать сделать универсальную функцию для onLoadMore и renderAlbums, которая будет получать данные с альбомами и рендерить соответствующие элементы в прямой зависимости от длины массива.
// TODO: Вынести onLoadMore в отдельный файл после создания универсальной функции внутри нее.
export async function onLoadMore() {
    const albumsWrapper = document.querySelector('.albumPage__wrapper');
    const newAlbums = await getData(
        `https://jsonplaceholder.typicode.com/albums/?_start=${
            defaultAlbumsAmount * pageCounter + 1
        }&_end=${defaultAlbumsAmount * pageCounter + defaultAlbumsAmount + 1}`
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
            console.log(`The old screen was ${getStateValue('screen')}`);
            console.log(`The old state ID was ${getStateValue('id')}`);
            setStateValue('id', newAlbums[i].id);
            setStateValue('screen', 'gallery');
            console.log(`The new state ID is ${getStateValue('id')}`);
            console.log(`The new screen is ${getStateValue('screen')}`);
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

async function renderPage() {
    if (screenType === ScreenType.albums) {
        renderAlbums();
    } else if (screenType === ScreenType.gallery) {
        renderGallery();
    }
}
fetchAlbumsInfo();
console.log(fetchAlbumsInfo);
renderPage();
