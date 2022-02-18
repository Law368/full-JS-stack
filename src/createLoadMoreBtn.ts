import {createElement} from './createElement';

const wrapper = document.querySelector('.content-wrapper');
const defaultAlbumsAmount: number = 8;
export async function createLoadMoreBtn(clickHandler: () => void) {
    const loadMoreBtn = createElement({
        tag: 'button',
        className: 'albumPage__load-button',
        value: 'Load more',
    });
    loadMoreBtn.addEventListener('click', clickHandler);
    wrapper.appendChild(loadMoreBtn);
    return loadMoreBtn;
}
