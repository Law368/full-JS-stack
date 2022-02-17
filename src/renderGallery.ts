import {createElement} from './createElement';
import {createBtn} from './createBtn';
import {getData} from './getData';
import {ScreenType, GalleryMode} from './enums';
import {shiftNextImgSrc} from './shiftNextImageSrc';
import {shiftPrevImgSrc} from './shiftPrevImageSrc';
import {getStateValue, setStateValue} from './state';
const wrapper = document.querySelector('.content-wrapper');
const galleryMode = localStorage.getItem('galleryMode');
let imageIndex: any = '0';
let fullImage: any;

const screenType = localStorage.getItem('screenType');
export async function renderGallery() {
    const idFromState = getStateValue('id');
    const photosFromState = getStateValue('photos');

    const albumId = idFromState
        ? idFromState
        : Number(localStorage.getItem('albumID'));
    let photos: {
        [key: number]: {
            albumId: number;
            id: number;
            thumbnailUrl: string;
            title: string;
            url: string;
        }[];
    };

    function renderFullImage(imageURL: any) {
        const modal: HTMLElement = document.querySelector('.modal');
        console.log(modal);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        const fullImage = createElement({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: `${imageURL}`,
        });
        console.log(fullImage.getAttribute('src'));
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
    const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';

    try {
        wrapper.innerHTML = '';
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
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
        nextImage.addEventListener('click', function next() {
            if (Number(imageIndex) >= photos[albumId].length - 1) {
                imageIndex = 0;
            }
            console.log(photos, albumId, imageIndex);
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${photos[albumId][Number(shiftNextImgSrc())].url}`,
            });
            modalContent.appendChild(fullImage);
            imageIndex = parseInt(imageIndex) + 1;
        });

        const previousImage = createElement({
            tag: 'a',
            className: 'image-previous',
            value: 'PREV',
        });
        modal.appendChild(previousImage);
        previousImage.addEventListener('click', function prev() {
            if (Number(imageIndex) <= 0) {
                imageIndex = photos[albumId].length;
            }
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${photos[albumId][Number(shiftPrevImgSrc())].url}`,
            });
            modalContent.appendChild(fullImage);
            imageIndex = parseInt(imageIndex) - 1;
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            localStorage.setItem('galleryMode', GalleryMode.thumbnails);
        });
        document.body.appendChild(modal);
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
                imageIndex = image.dataset.order;
                localStorage.setItem('fullImageUrl', image.getAttribute('src'));
                renderFullImage(localStorage.getItem('fullImageUrl'));
            });
        }
        let images = document.querySelectorAll('.gallery__image');
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
