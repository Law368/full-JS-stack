import {shiftPrevImgSrc} from '../modules/helpers/shiftPrevImageSrc';

test('shifting to the next image works correctly', () => {
    const element = shiftPrevImgSrc(1);
    expect(element).toBe(0);
});
