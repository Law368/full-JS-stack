import './style.scss';
import {renderGallery} from './modules/renderGallery';
import {renderAlbums} from './modules/renderAlbums/renderAlbums';
import {ScreenType} from './modules/enums';
const screenType = localStorage.getItem('screenType');

if (screenType === ScreenType.gallery) {
    renderGallery();
} else {
    renderAlbums();
}
