import {onLoadMore} from '.';
import {createElement} from './createElement';
import {setThumbnailSource} from './setThumbnailSource';
import {getData} from './getData';
import {createLoadMoreBtn} from './createLoadMoreBtn';
import {ScreenType} from './enums';
import {getStateValue, setStateValue} from './state';

const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/ ';
const wrapper = document.querySelector('.content-wrapper');
const defaultAlbumsNumberOnPage: number = 8;
let chosenAlbum = '';
export async function renderAlbums() {
    try {
        const albumsArr = await getData(albumsUrl);
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
            value: `${defaultAlbumsNumberOnPage} albums filled with various photos for you!`,
        });
        pageInfo.appendChild(pageDescription);
        const albumsWrapper = createElement({
            tag: 'div',
            className: 'albumPage__wrapper',
        });
        wrapper.appendChild(albumsWrapper);
        for (let i = 1; i <= defaultAlbumsNumberOnPage; i++) {
            const album = createElement({
                tag: 'div',
                className: 'album',
                id: i.toString(),
            });
            albumsWrapper.appendChild(album);
            const thumbnail = createElement({
                tag: 'img',
                className: 'album__first-image',
                attribute: 'src',
                attrValue: await setThumbnailSource(i),
            });
            album.appendChild(thumbnail);
            const albumInfo = createElement({
                tag: 'div',
                className: 'album__info',
            });
            album.appendChild(albumInfo);
            const heading = createElement({
                tag: 'h3',
                className: 'album__heading',
                value: albumsArr[i].title,
            });
            albumInfo.appendChild(heading);
            const id = createElement({
                tag: 'p',
                className: 'album__ID',
                value: i.toString(),
            });
            albumInfo.appendChild(id);

            album.addEventListener('click', () => {
                console.log(`State id #1: ${getStateValue('id')}`);
                console.log(`Album id #1: ${album.id}`);
                setStateValue('id', Number(album.id));
                console.log(`State id #2: ${getStateValue('id')}`);
                console.log(`Album id #2: ${album.id}`);
                localStorage.setItem('albumID', album.id);
                setStateValue('screen', 'gallery');
            });
        }
        createLoadMoreBtn(onLoadMore);
        localStorage.setItem('screenType', ScreenType.albums);
    } catch (err) {
        console.log('There was an error', err);
    }
}

export {chosenAlbum, ScreenType};
