import {createElement} from '../modules/createElement';
// TODO: добавить тесты, которые должны проверять какой класс был передан или тег
// TODO: линтер должен подсвечивать неиспользуемые импорты
// TODO: занести console.log как warn внутрь eslint
describe('creating new element', () => {
    test.each`
        func             | parameter    | expected
        ${createElement} | ${''}        | ${null}
        ${createElement} | ${undefined} | ${null}
        ${createElement} | ${null}      | ${null}
        ${createElement} | ${0}         | ${null}
    `('returns expected', ({func, parameter, expected}) => {
        expect(func(parameter)).toBe(expected);
    });
    test('creating new element with correct parameters works', () => {
        const element = createElement({
            tag: 'div',
            className: 'albumPage__wrapper',
        });
        expect(element).toBeTruthy();
    });
});

//тест на создание кнопки
//тест на прогрузку страницы по load more
// тест на рендер полного изображения
// тест на рендер отдельного альбома
