import {createElement} from '../create elements/createElement';
import {setScreen} from '../state/state';

export function createBtn() {
    const wrapper = document.querySelector('.content-wrapper');

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
}
