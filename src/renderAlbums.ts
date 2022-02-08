import fetchData from './fetchData';
import createElement from './createElement';
import {setThumbnailSource} from './setThumbnailSource';
import renderGallery from './renderGallery';

const albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums/';
const wrapper = document.querySelector('.content-wrapper');

const defaultAlbumsNumberOnPage: number = 4;
export default async function renderAlbums() {
    try {
        const albumsArr = await fetchData(albumsUrl);

        for (let i = 0; i < defaultAlbumsNumberOnPage; i++) {
            const album = createElement({
                tag: 'div',
                className: 'album',
                id: (i + 1).toString(),
            });
            wrapper.appendChild(album);
            const heading = createElement({
                tag: 'h3',
                className: 'album__heading',
                value: albumsArr[i].title,
            });
            album.appendChild(heading);
            album.appendChild(heading);
            const id = createElement({
                tag: 'p',
                className: 'album__ID',
                value: i.toString(),
            });
            album.appendChild(id);
            const thumbnail = createElement({
                tag: 'img',
                className: 'album__first-image',
                attribute: 'src',
                attrValue: await setThumbnailSource(i),
            });
            album.appendChild(thumbnail);
            album.addEventListener('click', renderGallery);
        }
    } catch (err) {
        console.log('There was an error', err);
    }
}
