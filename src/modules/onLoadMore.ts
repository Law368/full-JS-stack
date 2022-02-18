import {getData} from './getData';
import {renderAlbumElements} from './renderAlbumElements';

let pageCounter = 1;

async function onLoadMore() {
    const defaultAlbumsAmount: any = JSON.parse(
        localStorage.getItem('albumsInfo')
    ).slice(0, 8);
    const albumsWrapper = document.querySelector('.albumPage__wrapper');
    const newAlbums = await getData(
        `https://jsonplaceholder.typicode.com/albums/?_start=${
            defaultAlbumsAmount.length * pageCounter
        }&_end=${
            defaultAlbumsAmount.length * pageCounter +
            defaultAlbumsAmount.length
        }`
    );
    renderAlbumElements(newAlbums, albumsWrapper);
    pageCounter++;
}

export {onLoadMore};
