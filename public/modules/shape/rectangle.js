"use strict";

module.exports = {
    area: function area(width, height) {
        return width * height;
    },
    circumference: function circumference(width, height) {
        return 2 * (width + height);
    },
    currentDateTime: Date(),
    directoryName: __dirname,
    fileName: __filename
};