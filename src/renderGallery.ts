import createBtn from './createBtn';
import fetchData from './fetchData';
import createElement from './createElement';

let clickedElementId: string = '';
const photosUrl: string = 'https://jsonplaceholder.typicode.com/photos/';
const wrapper = document.querySelector('.content-wrapper');
export default async function renderGallery(evt: Event) {
    try {
        clickedElementId = (evt.target as HTMLElement).id;
        wrapper.innerHTML = '';
        createBtn();
        document.querySelector('.gallery__btn-back');
        const galleryWrapper = createElement({
            tag: 'div',
            className: 'gallery__Wrapper',
        });
        wrapper.appendChild(galleryWrapper);
        const photosArr = await fetchData(photosUrl);
        const currentGallery = photosArr.filter(
            (image: any) => image.albumId.toString() === clickedElementId
        );

        for (let i = 0; i < currentGallery.length; i += 1) {
            const image = createElement({
                tag: 'img',
                className: 'gallery__image',
                // parent: galleryWrapper,
                id: currentGallery[i].id,

                attribute: 'src',
                attrValue: currentGallery[i].url,
            });
            galleryWrapper.appendChild(image);
        }
    } catch (err) {
        console.log('The gallery wasnt created');
    }
}
