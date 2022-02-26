import {createLoadMoreBtn} from '../modules/create elements/createLoadMoreBtn';
import {onLoadMore} from '../modules/create elements/onLoadMore';

test('Load more button is getting created', async () => {
    document.body.innerHTML = `<div class="content-wrapper"></div>`;
    const element = await createLoadMoreBtn(onLoadMore);
    expect(element).toBeTruthy();
});
