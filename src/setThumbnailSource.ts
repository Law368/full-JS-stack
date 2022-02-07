import fetchData from './fetchData';

const photosUrl: string = 'https://jsonplaceholder.typicode.com/photos/';
async function setThumbnailSource(albumId: number) {
    const photosArr = await fetchData(photosUrl);
    const result = photosArr.find(
        (image: any) => image.albumId === albumId + 1
    );
    if (result !== undefined) {
        return result.thumbnailUrl;
    }
    return '';
}

export {setThumbnailSource, photosUrl};
