"use strict";

var PI = Math.PI;


module.exports = {
    area: function area(radius) {
        return PI * radius * radius;
    },
    circumference: function circumference(radius) {
        return 2 * PI * radius;
    }
};