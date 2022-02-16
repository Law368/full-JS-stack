import createElement from './createElement';
import {createBtn} from './createBtn';
import {state} from '.';
import {getData} from './getData';
import { ScreenType, GalleryMode } from './enums'
import renderFullImage from './renderFullImage';
const wrapper = document.querySelector('.content-wrapper');
let imageOrder: any = "0";
let fullImage:any;


const screenType = localStorage.getItem('screenType');
export async function renderGallery() {
    const albumId = state.id?state.id:Number(localStorage.getItem('albumID'));
    let photos: {[key:number]:{
        albumId: number,
        id: number,
        thumbnailUrl: string,
        title: string,
        url: string}[]};

        // console.log(Object.keys(state.photos).length === 0, Object.keys(state.photos).length);
    if (Object.keys(state.photos).length !== 0) {
        photos = state.photos
    } else {photos = {[albumId]: await getData(`https://jsonplaceholder.typicode.com/albums/${albumId + 1}/photos`)}
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
        })
        modal.appendChild(modalContent)

        const nextImage = createElement({
            tag: 'a',
            className: 'image-next',
            value: 'NEXT'
        })
        modal.appendChild(nextImage);
        nextImage.addEventListener('click', function next() {
            if (Number(imageOrder) >= photos[albumId].length - 1) {
                imageOrder = 0;
            }
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${photos[albumId][parseInt(imageOrder + 1)].url}`
            })
            modalContent.appendChild(fullImage);
            imageOrder = parseInt(imageOrder)+  1;
        })

        const previousImage = createElement({
            tag: 'a',
            className: 'image-previous',
            value: 'PREV'
        })
        modal.appendChild(previousImage);
        previousImage.addEventListener('click', function next() {
             if (Number(imageOrder) <= 0) {
                imageOrder = photos[albumId].length;
            }
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${photos[albumId][imageOrder - 1].url}`
            })
            modalContent.appendChild(fullImage);
            imageOrder = parseInt(imageOrder) - 1;
        })

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow="auto";
            localStorage.setItem('galleryMode', GalleryMode.thumbnails)
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
                imageOrder = image.dataset.order;
                localStorage.setItem('fullImageUrl', image.getAttribute('src'));
                renderFullImage(localStorage.getItem('fullImageUrl'));
            });
        }
        let images = document.querySelectorAll('.gallery__image');
        createBtn();
        localStorage.setItem('screenType', ScreenType.gallery)
        localStorage.setItem('galleryMode', GalleryMode.thumbnails)
    } catch (err) {
        console.log('The gallery wasnt created', err);
    }
}

export { imageOrder}