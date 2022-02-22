import {createElement} from './createElement';
import {setScreen} from './state';

const wrapper = document.querySelector('.content-wrapper');
export function createBtn() {
    const returnBtn = createElement({
        tag: 'button',
        className: 'gallery__btn-back',
        value: 'return',
    });
    wrapper.appendChild(returnBtn);
    returnBtn.addEventListener('click', () => {
        wrapper.innerHTML = '';
        setScreen('albums');
    });
    return returnBtn;
}
