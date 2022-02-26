import {renderAlbums} from '../modules/renderAlbums/renderAlbums';

test('render Ablums returns truthy Value', async () => {
    const element = renderAlbums();
    expect(element).toBeTruthy();
});
