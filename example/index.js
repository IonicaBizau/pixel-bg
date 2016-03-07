"use strict";

const pixelBg = require("../lib");

console.log(pixelBg({
    r: 255
  , g: 0
  , b: 0
  , a: 1
}, {
    r: 0
  , g: 255
  , b: 0
}));
// PixelClass { r: 255, g: 0, b: 0, a: 1 }

console.log(pixelBg({
    r: 255
  , g: 0
  , b: 0
  , a: 0.5
}, {
    r: 0
  , g: 255
  , b: 0
}));
// PixelClass { r: 127.5, g: 127.5, b: 0, a: 1 }
