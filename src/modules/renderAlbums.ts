import {onLoadMore} from './onLoadMore';
import {createElement} from './createElement';
import {createLoadMoreBtn} from './createLoadMoreBtn';
import {ScreenType} from './enums';
import {renderAlbumElements} from './renderAlbumElements';
import {fetchAlbumsInfo} from './fetchAlbumsInfo';

const wrapper = document.querySelector('.content-wrapper');
// TODO: Добавить типизацию для всех any файлов
let chosenAlbum = '';
export async function renderAlbums() {
    try {
        await fetchAlbumsInfo();
        // TODO: изменить название переменной на albums, вставить в slice переменную defaultAlbumsAmount вместо числа 8
        const defaultAlbumsAmount: any = JSON.parse(
            localStorage.getItem('albumsInfo')
        ).slice(0, 8);
        const pageInfo = createElement({
            tag: 'div',
            className: 'albumPage__info',
        });
        wrapper.appendChild(pageInfo);
        const headingBig = createElement({
            tag: 'h1',
            className: 'albumPage__heading',
            value: 'Image Gallery',
        });
        pageInfo.appendChild(headingBig);
        const pageDescription = createElement({
            tag: 'p',
            className: 'albumPage__description',
            value: `${defaultAlbumsAmount.length} albums filled with various photos for you!`,
        });
        pageInfo.appendChild(pageDescription);
        const albumsWrapper = createElement({
            tag: 'div',
            className: 'albumPage__wrapper',
        });
        wrapper.appendChild(albumsWrapper);
        renderAlbumElements(defaultAlbumsAmount, albumsWrapper);
        createLoadMoreBtn(onLoadMore);
        localStorage.setItem('screenType', ScreenType.albums);
    } catch (err) {
        console.log('There was an error', err);
    }
}

export {chosenAlbum, ScreenType};
