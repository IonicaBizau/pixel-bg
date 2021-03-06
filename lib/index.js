"use strict";

const Pixel = require("pixel-class");

/**
 * pixelBg
 * Change the pixel background color.
 *
 * @name pixelBg
 * @function
 * @param {Pixel} pixel A [`Pixel`](https://github.com/IonicaBizau/pixel-class) instance.
 * @param {Object} bgColor An object containing the `r`, `g`, `b` values of the new background color.
 * @returns {Pixel} The `Pixel` instance.
 */
module.exports = function pixelBg (pixel, bgColor) {
    pixel = new Pixel(pixel);
    if (pixel.a === 1) {
        return pixel;
    }
    let diff = 1 - pixel.a;
    pixel.r = diff * bgColor.r + pixel.a * pixel.r;
    pixel.g = diff * bgColor.g + pixel.a * pixel.g;
    pixel.b = diff * bgColor.b + pixel.a * pixel.b;
    pixel.a = 1;
    return pixel;
};
