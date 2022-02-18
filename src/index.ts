import './style.scss';
import {renderGallery} from './modules/renderGallery';
import {renderAlbums} from './modules/renderAlbums';
import {ScreenType} from './modules/enums';
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
