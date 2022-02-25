import {createElement} from '../modules/createElement';

test('render full image returns truthy Value', () => {
    const testString = 'https://via.placeholder.com/600/e743b';
    const fullImage = createElement({
        tag: 'img',
        className: 'gallery__image--selected',
        attribute: 'src',
        attrValue: `${testString}`,
    });
    document.body.innerHTML = `<div class="modal-content"><div class="modal"></div></div>`;
    document.querySelector('.modal-content').appendChild(fullImage);
    expect(fullImage.classList).toContain('gallery__image--selected');
});
