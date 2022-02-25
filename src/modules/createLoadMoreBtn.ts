import {createElement} from './createElement';

export async function createLoadMoreBtn(clickHandler: () => void) {
    const wrapper = document.querySelector('.content-wrapper');

    const loadMoreBtn = createElement({
        tag: 'button',
        className: 'albumPage__load-button',
        value: 'Load more',
    });
    loadMoreBtn.addEventListener('click', clickHandler);
    wrapper.appendChild(loadMoreBtn);
    return loadMoreBtn;
}
