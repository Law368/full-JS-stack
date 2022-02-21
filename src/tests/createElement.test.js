import createElement from '../modules/createElement';

test('creating new element works', () => {
    expect(
        createElement({
            tag: 'div',
            className: 'albumPage__wrapper',
        })
    ).toBeDefined();
});
