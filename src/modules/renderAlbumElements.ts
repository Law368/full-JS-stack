import {createElement} from './createElement';
import {setThumbnailSource} from './setThumbnailSource';
import {setId, setScreen} from './state';
import {Album} from './types';

async function renderAlbumElements(array: Album[], albumsWrapper: Element) {
    for (let i = 0; i < array.length; i++) {
        const album = createElement({
            tag: 'div',
            className: 'album',
            id: array[i].id.toString(),
        });
        albumsWrapper.appendChild(album);
        album.addEventListener('click', () => {
            console.log(`ID текущего альбома из массива ${array[i].id}`);
            setId(array[i].id);
            setScreen('gallery');
            localStorage.setItem('albumID', album.id);
        });
        const thumbnail = createElement({
            tag: 'img',
            className: 'album__first-image',
            attribute: 'src',
            attrValue: await setThumbnailSource(array[i].id),
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
            value: array[i].title,
        });
        albumInfo.appendChild(heading);
        const id = createElement({
            tag: 'p',
            className: 'album__ID',
            value: array[i].id.toString(),
        });
        albumInfo.appendChild(id);
    }
}

export {renderAlbumElements};
