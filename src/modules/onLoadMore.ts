import {getData} from './getData';
import {renderAlbumElements} from './renderAlbumElements';

let pageCounter = 1;
const defaultAlbumsAmount: any = JSON.parse(
    localStorage.getItem('albumsInfo')
).slice(0, 8);

async function onLoadMore() {
    console.log(defaultAlbumsAmount);
    const albumsWrapper = document.querySelector('.albumPage__wrapper');
    const newAlbums = await getData(
        `https://jsonplaceholder.typicode.com/albums/?_start=${
            defaultAlbumsAmount.length * pageCounter + 1
        }&_end=${
            defaultAlbumsAmount.length * pageCounter +
            defaultAlbumsAmount.length +
            1
        }`
    );
    renderAlbumElements(newAlbums, albumsWrapper);
    pageCounter++;
}

export {onLoadMore};
