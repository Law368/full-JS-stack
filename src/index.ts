import './style.scss';
import {renderGallery} from './modules/renderGallery';
import {renderAlbums} from './modules/renderAlbums';
import {ScreenType} from './modules/enums';
import {fetchAlbumsInfo} from './modules/fetchAlbumsInfo';

const screenType = localStorage.getItem('screenType');

fetchAlbumsInfo();

if (screenType === ScreenType.albums) {
    renderAlbums();
} else {
    renderGallery();
}
