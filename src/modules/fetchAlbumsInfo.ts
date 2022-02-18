import {getData} from './getData';
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
async function fetchAlbumsInfo() {
    const albumsArr = await getData(albumsUrl);
    const albumsToString = JSON.stringify(albumsArr);
    localStorage.setItem('albumsInfo', albumsToString);
    console.log(albumsToString);
}

export {fetchAlbumsInfo};
