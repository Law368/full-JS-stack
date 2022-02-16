import {ScreenType, GalleryMode} from './enums';
import createElement from './createElement';

export default  function renderFullImage (imageURL:any) {
                const modal:HTMLElement = document.querySelector('.modal');
                console.log(modal)
                modal.style.display = 'block';
                document.body.style.overflow="hidden";
                const fullImage = createElement({
                    tag: 'img',
                    className: 'gallery__image--selected',
                    attribute: 'src',
                    attrValue: `${imageURL}`
                })
                console.log(fullImage.getAttribute('src'))
                const modalContent:HTMLElement = document.querySelector('.modal-content');
                modalContent.appendChild(fullImage);
                localStorage.setItem('screenType', ScreenType.gallery)
                localStorage.setItem('galleryMode', GalleryMode.fullscreen)
}