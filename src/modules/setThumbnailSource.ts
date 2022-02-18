import {getData} from './getData';
import {setStateValue} from './state';

export async function setThumbnailSource(albumId: number) {
    const photosArr = await getData(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );

    const result = photosArr[0].thumbnailUrl;
    setStateValue('photos', {id: albumId, photos: photosArr});
    if (result !== undefined) {
        return result;
    }
    return '';
}
