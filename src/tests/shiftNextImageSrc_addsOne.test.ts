import {shiftNextImgSrc} from '../modules/helpers/shiftNextImageSrc';

test('shifting to the next image works correctly', () => {
    const element = shiftNextImgSrc(1);
    expect(element).toBe(2);
});
