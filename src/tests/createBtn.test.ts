import {createBtn} from '../modules/createBtn';

test('return button is created successfully', () => {
    document.body.innerHTML = `<div class="content-wrapper"></div>`;
    const element = createBtn();
    expect(element).toBeTruthy();
});
