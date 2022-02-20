import {getData} from './getData';
import {renderAlbumElements} from './renderAlbumElements';
import {defaultAlbumsAmount} from './defaultAlbumsAmount';
import {Albums} from './types';

let pageCounter = 1;

async function onLoadMore() {
    const albums: Albums[] = JSON.parse(
        localStorage.getItem('albumsInfo')
    ).slice(0, defaultAlbumsAmount);
    const albumsWrapper = document.querySelector('.albumPage__wrapper');
    const newAlbums = await getData(
        `https://jsonplaceholder.typicode.com/albums/?_start=${
            albums.length * pageCounter
        }&_end=${albums.length * pageCounter + albums.length}`
    );
    renderAlbumElements(newAlbums, albumsWrapper);
    pageCounter++;
}

export {onLoadMore};
