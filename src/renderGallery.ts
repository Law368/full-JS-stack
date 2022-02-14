import createElement from './createElement';
import {createBtn} from './createBtn';
import {state} from '.';
import {getData} from './getData';
import { chosenAlbum } from './renderAlbums';
export {chosenAlbum} from './renderAlbums';
const wrapper = document.querySelector('.content-wrapper');
let myGlobalVariable = "";
let imageOrder: any = "0";
let fullImage:any;
// let image: any;
export async function renderGallery() {
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
            value: `${albumsArr[state.id - 2].title}`,
        });
        galleryInfo.appendChild(galleryHeading);
        const photosArr = state.photos[state.id - 1];
        const modal = createElement({
            tag: 'div',
            className: 'modal',
        });
        // modal.addEventListener('click', function(){
        //     modal.style.display="none"
        // })
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
            if (Number(imageOrder) >= state.photos[chosenAlbum].length - 1) {
                imageOrder = 0;
            }
            console.log(state.photos[parseInt(chosenAlbum)][parseInt(imageOrder + 1)].url) // Нужный альбом
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${state.photos[parseInt(chosenAlbum)][parseInt(imageOrder + 1)].url}`
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
            console.log(state.photos[chosenAlbum].length)
            console.log(Number(imageOrder))
             if (Number(imageOrder) <= 0) {
                imageOrder = state.photos[chosenAlbum].length;
            }
            fullImage = createElement({
                tag: 'img',
                className: 'gallery__image--selected',
                attribute: 'src',
                attrValue: `${state.photos[parseInt(chosenAlbum)][imageOrder - 1].url}`
            })
            modalContent.appendChild(fullImage);
            imageOrder = parseInt(imageOrder) - 1;
        })

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow="auto";
        });
        // modal.appendChild(document.querySelector('.gallery__image--selected'))
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
                id: photosArr[i].id,

                attribute: 'src',
                attrValue: photosArr[i].url,
            });
            image.dataset.order = i.toString();
            imageContainer.appendChild(image);

            image.addEventListener('click', () => {
                myGlobalVariable = image.id;
                console.log(Number(myGlobalVariable))
                imageOrder = image.dataset.order;

                modal.style.display = 'block';
                document.body.style.overflow="hidden";
                console.log(image.getAttribute('src'));
                fullImage = createElement({
                    tag: 'img',
                    className: 'gallery__image--selected',
                    attribute: 'src',
                    attrValue: `${image.getAttribute('src')}`
                })
                modalContent.appendChild(fullImage);
                // console.log(photosArr)
            });
        }
        let images = document.querySelectorAll('.gallery__image');
        createBtn();
    } catch (err) {
        console.log('The gallery wasnt created');
    }
}

var imageIndex = '';
// showSlides(imageIndex);

function next () {
    
    
}



// записать текущего элемента в глобальную переменную +++
// перебирать массив с фотографиями по id текущего элмента + 1
// забираем url этого элемента
// вставляем url в src

// При создании галлереи изображения каждому элементу добавить data аттрибут с порядковым номером, который соответствует порядковому номеру в данном массиве
// при клики next(prev) считываем значение data аттрибута текущей картинки, увеличиваем(уменьшаем) на 1
// берем элемент из массива с полученным идентификатором (порядковым номером) arr[порядковый номер]
// прокинуть data аттрибут с порядковым номером от маленькой картики к большой
// выбираем элемент этого элемента и вставляем в src