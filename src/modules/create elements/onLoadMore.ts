import {getData} from '../fetch data/getData';
import {renderAlbumElements} from '../renderAlbums/renderAlbumElements';
import {defaultAlbumsAmount} from '../constants/defaultAlbumsAmount';
import {Albums} from '../Enums and Types/types';

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
