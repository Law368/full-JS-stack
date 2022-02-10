import {state} from './index';
import createElement from './createElement';

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
        console.log(`The old screen was ${state.screen}`);
        state.screen = 'albums';
        console.log(`The new screen is ${state.screen}`);
    });
    return returnBtn;
}
