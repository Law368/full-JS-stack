import {renderGallery} from '../modules/render Gallery/renderGallery';
import {getData} from '../modules/fetch data/getData';

describe('testing rendering gallery', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    key: {
                        userId: 1,
                        id: 2,
                        title: 'sunt qui excepturi placeat culpa',
                    },
                }),
        })
    ) as jest.Mock;
    console.log(1111111111);
    test('mocking fetching data', async () => {
        const element = await getData(
            'https://jsonplaceholder.typicode.com/albums/'
        );
        expect(element).toBeTruthy();
    });

    test('render Gallery test', async () => {
        const element = renderGallery();
        expect(element).toBeTruthy;
    });
});
