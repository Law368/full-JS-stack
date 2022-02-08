import createElement from './createElement';
import {renderAlbums} from './index';

const wrapper = document.querySelector('.content-wrapper');
function createBtn() {
    const returnBtn = createElement({
        tag: 'button',
        className: 'gallery__btn-back',
        value: 'return',
    });
    wrapper.appendChild(returnBtn);
    returnBtn.style.display = 'none';
    returnBtn.addEventListener('click', () => {
        wrapper.innerHTML = '';
        renderAlbums();
    });
    return returnBtn;
}

export default createBtn;
