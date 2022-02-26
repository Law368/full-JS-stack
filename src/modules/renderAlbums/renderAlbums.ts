import {onLoadMore} from '../create elements/onLoadMore';
import {createElement} from '../create elements/createElement';
import {createLoadMoreBtn} from '../create elements/createLoadMoreBtn';
import {ScreenType} from '../Enums and Types/enums';
import {renderAlbumElements} from './renderAlbumElements';
import {fetchAlbumsInfo} from '../fetch data/fetchAlbumsInfo';
import {defaultAlbumsAmount} from '../constants/defaultAlbumsAmount';
import {Album} from '../Enums and Types/types';

const wrapper = document.querySelector('.content-wrapper');
const chosenAlbum = '';
export async function renderAlbums() {
    try {
        await fetchAlbumsInfo();
        const albums: Album[] = JSON.parse(
            localStorage.getItem('albumsInfo')
        ).slice(0, defaultAlbumsAmount);
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
            value: `${albums.length} albums filled with various photos for you!`,
        });
        pageInfo.appendChild(pageDescription);
        const albumsWrapper = createElement({
            tag: 'div',
            className: 'albumPage__wrapper',
        });
        wrapper.appendChild(albumsWrapper);
        renderAlbumElements(albums, albumsWrapper);
        createLoadMoreBtn(onLoadMore);
        localStorage.setItem('screenType', ScreenType.albums);
    } catch (err) {
        console.log('There was an error', err);
    }
}

export {chosenAlbum, ScreenType};
