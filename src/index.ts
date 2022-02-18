import './style.scss';
import {renderGallery} from './renderGallery';
import {renderAlbums} from './renderAlbums';
import {ScreenType} from './enums';
import {fetchAlbumsInfo} from './modules/fetchAlbumsInfo';

const screenType = localStorage.getItem('screenType');

async function renderPage() {
    if (screenType === ScreenType.albums) {
        renderAlbums();
    } else if (screenType === ScreenType.gallery) {
        renderGallery();
    }
}
fetchAlbumsInfo();
renderPage();
