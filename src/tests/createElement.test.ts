import {createElement} from '../modules/createElement';

test('creating new element works', () => {
    const element = createElement({
        tag: 'div',
        className: 'albumPage__wrapper',
    });
    console.log(element);
    expect(element).toBeTruthy();
});
