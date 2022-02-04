// @ts-ignore
// eslint-disable

import './style.scss';

function loadDefault() {
    let albumNumber: number = 0;

    const requestURL: string =
        'http://jsonplaceholder.typicode.com/albums?_limit=8';

    const thumbnailURL: string = 'http://jsonplaceholder.typicode.com/photos';

    fetch(requestURL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((collection) => {
            for (let i = 0; i < 8; i++) {
                const album = document.createElement('div');
                const heading = document.createElement('h3');
                const id = document.createElement('p');

                album.classList.add('album');
                album.id = (i + 1).toString();
                heading.classList.add('album__heading');
                id.classList.add('album__ID');

                heading.innerHTML = collection[albumNumber].title;
                id.innerHTML = collection[albumNumber].id;

                document.body.appendChild(album);
                album.appendChild(heading);
                album.appendChild(id);

                albumNumber += 1;
            }
            const thumbnailURLs: Promise<
                [
                    {
                        albumId: number;
                        id: number;
                        title: string;
                        url: string;
                        thumbnailUrl: string;
                    }
                ]
            >[] = collection.map((album) =>
                fetch(
                    `http://jsonplaceholder.typicode.com/photos?albumId=${album.id}&_limit=1`
                ).then((data) => data.json())
            );
            Promise.allSettled(thumbnailURLs).then((results) => results);
        })
        .then(() =>
            fetch(thumbnailURL, {
                method: 'GET',
                headers: {
                    'Content-type': 'photos/json; charset=UTF-8',
                },
            })
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((photos) => {
            const albums = document.querySelectorAll('.album');
            albums.forEach((album, index) => {
                const albumCover = document.createElement('img');
                albumCover.classList.add('album__first-image');
                albumCover.setAttribute('src', photos[index].thumbnailUrl);
                album.appendChild(albumCover);
            });
        });
}

document.addEventListener('DOMContentLoaded', loadDefault);

document.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('album')) {
        document.body.innerHTML = '';
        const photoAlbumURL: string = `https://jsonplaceholder.typicode.com/photos/?albumId=${
            (event.target as HTMLElement).id
        }`;
        fetch(photoAlbumURL, {
            method: 'GET',
            headers: {
                'Content-type': 'strangeTest/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return data;
            })
            .then((gallery) => {
                const galleryWrapper = document.createElement('div');
                const returnBtn = document.createElement('button');
                galleryWrapper.classList.add('gallery__Wrapper');
                returnBtn.classList.add('gallery__btn-back');
                returnBtn.innerHTML = 'return';
                document.body.appendChild(galleryWrapper);
                galleryWrapper.appendChild(returnBtn);

                for (let i = 0; i < gallery.length; i++) {
                    const image = document.createElement('img');
                    image.classList.add('gallery__image');
                    image.setAttribute('src', gallery[i].url);
                    galleryWrapper.appendChild(image);
                }
            });
    }
});

document.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('gallery__btn-back')) {
        document.body.innerHTML = '';
        loadDefault();
    }
});
