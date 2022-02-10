import createElement from './createElement';
import {createBtn} from './createBtn';
import {state} from '.';

const wrapper = document.querySelector('.content-wrapper');

export async function renderGallery() {
    try {
        wrapper.innerHTML = '';
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
        const photosArr = state.photos[state.id - 1];
        for (let i = 0; i < photosArr.length; i += 1) {
            const image = createElement({
                tag: 'img',
                className: 'gallery__image',
                id: photosArr[i].id,

                attribute: 'src',
                attrValue: photosArr[i].url,
            });
            galleryWrapper.appendChild(image);
        }
        createBtn();
    } catch (err) {
        console.log('The gallery wasnt created');
    }
}
