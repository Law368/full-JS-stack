import {renderAlbums} from './renderAlbums';
import {renderGallery} from './renderGallery';
import {Photos, Album} from './types';
type ValueOf<T> = T[keyof T];
const state: {
    _screen: string;
    screen: string;
    id: number;
    _id: number;
    _photos: Photos;
    photos: Photos;
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
    (state as Record<keyof typeof state, ValueOf<typeof state>>)[prop] = value;
    // state[prop] = value;
};
export const setPhotos = (value: {id: number; photos: Photos}) => {
    state.photos = value;
};
export const getPhotos = () => state.photos;

export const setId = (value: number | null) => {
    state.id = value;
};
export const getId = () => state.id;
export const setScreen = (value: string) => {
    state.screen = value;
};
export const getScreen = () => state.screen;
//(result as Record<typeof key, typeof key>)[key] = key;

//TODO: написать специфичные геттеры/сеттеры для каждого из пропсов стейта
