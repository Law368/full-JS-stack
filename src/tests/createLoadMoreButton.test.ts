import {createLoadMoreBtn} from '../modules/createLoadMoreBtn';
import {onLoadMore} from '../modules/onLoadMore';

test('Load more button is getting created', async () => {
    const wrapper = document.querySelector('.content-wrapper');
    document.body.innerHTML = `<div class="content-wrapper"></div>`;
    const element = await createLoadMoreBtn(onLoadMore);
    expect(element).toBeTruthy();
});
