import './style.scss';
import {renderGallery} from './modules/render Gallery/renderGallery';
import {renderAlbums} from './modules/renderAlbums/renderAlbums';
import {ScreenType} from './modules/Enums and Types/enums';

const screenType = localStorage.getItem('screenType');

if (screenType === ScreenType.gallery) {
    renderGallery();
} else {
    renderAlbums();
}
