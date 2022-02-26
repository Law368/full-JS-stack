import {createBtn} from '../modules/render Gallery/createBtn';

test('return button is created successfully', () => {
    document.body.innerHTML = `<div class="content-wrapper"></div>`;
    createBtn();
    const button = document.querySelector('.gallery__btn-back');
    expect(button).toBeTruthy();
});
