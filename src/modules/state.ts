import {renderAlbums} from './renderAlbums';
import {renderGallery} from './renderGallery';

const state: {
    _screen: string;
    screen: string;
    id: any;
    _id: any;
    _photos: any;
    photos: any;
} = {
    _screen: 'albums',
    _id: null,
    _photos: {},
    set photos(albums) {
        this._photos = {...this._photos, [albums.id]: albums.photos};
    },
    get photos() {
        return this._photos;
    },
    set screen(type) {
        this._screen = type;
        // body.innerHTML = '';
        if (type === 'gallery') {
            renderGallery();
            return;
        }
        renderAlbums();
    },
    get screen() {
        return this._screen;
    },
    set id(data) {
        this._id = Number(data);
    },
    get id(): number {
        return this._id;
    },
};

export const getStateValue = (prop: keyof typeof state) => state[prop];
export const setStateValue = (
    prop: keyof typeof state,
    value: string | any
) => {
    state[prop] = value;
};
