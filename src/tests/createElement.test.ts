import {createElement} from '../modules/create elements/createElement';

describe('creating new element', () => {
    test.each`
        func             | parameter    | expected
        ${createElement} | ${''}        | ${null}
        ${createElement} | ${undefined} | ${null}
        ${createElement} | ${null}      | ${null}
        ${createElement} | ${0}         | ${null}
    `(
        'returns null if provided with falsy values',
        ({func, parameter, expected}) => {
            expect(func(parameter)).toBe(expected);
        }
    );
    test('creating new element with correct parameters works', () => {
        const element = createElement({
            tag: 'div',
            className: 'albumPage__wrapper',
        });
        expect(element).toBeTruthy();
    });
});
