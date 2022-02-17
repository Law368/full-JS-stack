import {createElement} from './createElement';
import {getStateValue, setStateValue} from './state';

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
        console.log(`The old screen was ${getStateValue('screen')}`);
        setStateValue('screen', 'albums');
        console.log(`The new screen is ${getStateValue('screen')}`);
    });
    return returnBtn;
}
