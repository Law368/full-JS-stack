import {getData} from './getData';
import {state} from './index';

export async function setThumbnailSource(albumId: number) {
    const photosArr = await getData(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );

    const result = photosArr[0].thumbnailUrl;
    state.photos = {id: albumId, photos: photosArr};
    if (result !== undefined) {
        return result;
    }
    return '';
}
