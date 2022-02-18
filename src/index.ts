import './style.scss';
import {renderGallery} from './renderGallery';
import {getData} from './getData';
import {renderAlbums} from './renderAlbums';
import {createElement} from './createElement';
import {setThumbnailSource} from './setThumbnailSource';
import {ScreenType} from './enums';
import {getStateValue, setStateValue} from './state';
import {fetchAlbumsInfo} from './modules/fetchAlbumsInfo';
import {renderAlbumElements} from './modules/renderAlbumElements';
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
    renderAlbumElements(newAlbums, albumsWrapper);
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
