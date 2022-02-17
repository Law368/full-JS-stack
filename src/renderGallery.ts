import {createElement} from './createElement';
import {createBtn} from './modules/createBtn';
import {getData} from './getData';
import {ScreenType, GalleryMode} from './enums';
import {shiftNextImgSrc} from './shiftNextImageSrc';
import {shiftPrevImgSrc} from './shiftPrevImageSrc';
import {getStateValue} from './state';
const wrapper = document.querySelector('.content-wrapper');
const galleryMode = localStorage.getItem('galleryMode');
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';

let imageIndex = 0;
let fullImage;

export async function renderGallery() {
    const idFromState = getStateValue('id');
    const photosFromState = getStateValue('photos');

    const albumId = idFromState
        ? idFromState
        : Number(localStorage.getItem('albumID'));
    // TODO: вынести photos в отдельный файл types.ts Interface photos
    let photos: {
        [key: number]: {
            albumId: number;
            id: number;
            thumbnailUrl: string;
            title: string;
            url: string;
        }[];
    };
    // {[key: string]: []}

    function renderFullImage(imageURL: any) {
        // TODO: Вынести в отдельный файл и вызывать внутри renderGallery
        const modal: HTMLElement = document.querySelector('.modal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        const fullImage = createElement({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: `${imageURL}`,
        });
        const modalContent: HTMLElement =
            document.querySelector('.modal-content');
        modalContent.appendChild(fullImage);
        localStorage.setItem('screenType', ScreenType.gallery);
        localStorage.setItem('galleryMode', GalleryMode.fullscreen);
    }

    if (Object.keys(photosFromState).length !== 0) {
        photos = photosFromState;
    } else {
        photos = {
            [albumId]: await getData(
                `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
            ),
        };
    }

    try {
        wrapper.innerHTML = '';
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
        // TODO: класть в local storage все альбомы (использовать json.stringify чтобы объект переконвертировать в строку)
        const albumsArr = await getData(albumsUrl);
        const galleryInfo = createElement({
            tag: 'div',
            className: 'gallery__info',
        });
        galleryWrapper.appendChild(galleryInfo);
        const galleryHeading = createElement({
            tag: 'h1',
            className: 'gallery__heading',
            value: `${albumsArr[albumId].title}`,
        });
        galleryInfo.appendChild(galleryHeading);
        const photosArr = photos[albumId];
        // TODO: Вынести создание модалки в отдельную функцию
        const modal = createElement({
            tag: 'div',
            className: 'modal',
        });

        const closeModal = createElement({
            tag: 'span',
            className: 'close-modal',
            value: 'X',
        });
        modal.appendChild(closeModal);

        const modalContent = createElement({
            tag: 'div',
            className: 'modal-content',
        });
        modal.appendChild(modalContent);

        const nextImage = createElement({
            tag: 'a',
            className: 'image-next',
            value: 'NEXT',
        });
        modal.appendChild(nextImage);
        nextImage.addEventListener('click', function () {
            if (Number(imageIndex) >= photos[albumId].length - 1) {
                imageIndex = 0;
            }
            console.log(photos, albumId, imageIndex);
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${
                    photos[albumId][Number(shiftNextImgSrc(imageIndex))].url
                }`,
            });
            modalContent.appendChild(fullImage);
            imageIndex = imageIndex + 1;
        });

        const previousImage = createElement({
            tag: 'a',
            className: 'image-previous',
            value: 'PREV',
        });
        modal.appendChild(previousImage);
        previousImage.addEventListener('click', function () {
            if (Number(imageIndex) <= 0) {
                imageIndex = photos[albumId].length;
            }
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${
                    photos[albumId][Number(shiftPrevImgSrc(imageIndex))].url
                }`,
            });
            modalContent.appendChild(fullImage);
            imageIndex = imageIndex - 1;
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            localStorage.setItem('galleryMode', GalleryMode.thumbnails);
        });
        document.body.appendChild(modal);
        //TODO: Вынести отдельно функцию создания изображений
        for (let i = 0; i < photosArr.length; i += 1) {
            const imageContainer = createElement({
                tag: 'div',
                className: 'gallery__image-container',
            });
            galleryWrapper.appendChild(imageContainer);
            let image = createElement({
                tag: 'img',
                className: 'gallery__image',
                id: String(photosArr[i].id),

                attribute: 'src',
                attrValue: photosArr[i].url,
            });
            image.dataset.order = i.toString();
            imageContainer.appendChild(image);

            image.addEventListener('click', () => {
                imageIndex = Number(image.dataset.order);
                localStorage.setItem('fullImageUrl', image.getAttribute('src'));
                renderFullImage(localStorage.getItem('fullImageUrl'));
            });
        }
        createBtn();
        localStorage.setItem('screenType', ScreenType.gallery);
        localStorage.setItem('galleryMode', GalleryMode.thumbnails);

        if (galleryMode === GalleryMode.fullscreen) {
            renderFullImage(localStorage.getItem('fullImageUrl'));
        }
    } catch (err) {
        console.log('The gallery wasnt created', err);
    }
}

export {imageIndex};
