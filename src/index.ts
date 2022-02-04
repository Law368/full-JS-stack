import './style.scss';

// albums: https://jsonplaceholder.typicode.com/albums/
// photos: https://jsonplaceholder.typicode.com/photos/

const albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums/';
const photosUrl: string = 'https://jsonplaceholder.typicode.com/photos/';
const defaultAlbumsNumberOnPage: number = 8;

let clickedElementId: string = '';
const albumsArr: Array<{
    userId: number;
    id: number;
    title: string;
}> = [];
const photosArr: Array<{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}> = [];

function setThumbnailSource(albumId: number) {
    const thumbnailsPath: string[] = [];
    photosArr.filter((image) => {
        if (image.albumId === albumId + 1) {
            return thumbnailsPath.push(image.thumbnailUrl);
        }
    });
    return thumbnailsPath[0];
}

async function fetchAlbums() {
    try {
        const getAlbums = await fetch(albumsUrl);
        const albums = await getAlbums.json();
        for (let i = 0; i < albums.length; i++) {
            albumsArr.push(albums[i]);
        }
        return albums;
    } catch (err) {
        console.log('There was an error', err);
    }
}

async function fetchPhotos() {
    try {
        const getPhotos = await fetch(photosUrl);
        const photos = await getPhotos.json();
        // console.log(albums);
        for (let i = 0; i < photos.length; i++) {
            photosArr.push(photos[i]);
        }
        // console.log(albumsArr);
        return photos;
    } catch (err) {
        console.log('There was an error', err);
    }
}

async function createElements() {
    try {
        await fetchAlbums();
        await fetchPhotos();
        for (let i = 0; i < defaultAlbumsNumberOnPage; i++) {
            const album = document.createElement('div');
            const heading = document.createElement('h3');
            const id = document.createElement('p');
            const thumbnail = document.createElement('img');

            album.classList.add('album');
            album.id = (i + 1).toString();
            heading.classList.add('album__heading');
            id.classList.add('album__ID');
            thumbnail.classList.add('album__first-image');

            heading.innerHTML = albumsArr[i].title;
            // id.innerHTML = albumsArr[i].id;

            thumbnail.setAttribute('src', setThumbnailSource(i));

            document.body.appendChild(album);
            album.appendChild(heading);
            album.appendChild(id);
            album.appendChild(thumbnail);
        }
    } catch (err) {
        console.log('There was an error', err);
    }
}

document.addEventListener('DOMContentLoaded', createElements);
document.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('album')) {
        clickedElementId = (event.target as HTMLElement).id;
        document.body.innerHTML = '';
        const galleryWrapper = document.createElement('div');
        const returnBtn = document.createElement('button');

        galleryWrapper.classList.add('gallery__Wrapper');
        returnBtn.classList.add('gallery__btn-back');
        returnBtn.innerHTML = 'return';

        document.body.appendChild(galleryWrapper);
        galleryWrapper.appendChild(returnBtn);

        const currentGallery = photosArr.filter((image) => {
            if (image.albumId.toString() === clickedElementId) {
                return image;
            }
        });
        for (let i = 0; i < currentGallery.length; i++) {
            const image = document.createElement('img');
            image.classList.add('gallery__image');
            image.setAttribute('src', currentGallery[i].url);
            galleryWrapper.appendChild(image);
        }
    }
});

document.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('gallery__btn-back')) {
        document.body.innerHTML = '';
        createElements();
    }
});
