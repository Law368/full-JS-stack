import {onLoadMore} from '../modules/onLoadMore';
import {createElement} from '../modules/createElement';
import {createLoadMoreBtn} from '../modules/createLoadMoreBtn';
import {ScreenType} from '../modules/enums';
import {renderAlbumElements} from '../modules/renderAlbums/renderAlbumElements';
import {fetchAlbumsInfo} from '../modules/fetchAlbumsInfo';
import {defaultAlbumsAmount} from '../modules/defaultAlbumsAmount';
import {Album} from '../modules/types';
import {renderAlbums} from '../modules/renderAlbums/renderAlbums';

const wrapper = document.querySelector('.content-wrapper');
let chosenAlbum = '';
test('render Ablums returns truthy Value', async () => {
    const element = renderAlbums();
    expect(element).toBeTruthy();
});
