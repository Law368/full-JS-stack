import './style.scss';
import {renderGallery} from './modules/renderGallery';
import {renderAlbums} from './modules/renderAlbums';
import {ScreenType} from './modules/enums';
// TODO: удалить папку dist  и добавить ее в .gitignore
const screenType = localStorage.getItem('screenType');

if (screenType === ScreenType.gallery) {
    renderGallery();
} else {
    renderAlbums();
}
