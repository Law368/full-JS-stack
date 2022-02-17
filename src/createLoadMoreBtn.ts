import {createElement} from './createElement';
import {renderAlbums} from './renderAlbums';
import {getData} from './getData';

const wrapper = document.querySelector('.content-wrapper');
const defaultAlbumsNumberOnPage: number = 8;
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
