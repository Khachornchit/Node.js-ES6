'use strict';

var rect = require('./shape/rectangle');
var circle = require('./shape/circle');

console.log('The area is ' + rect.area(2, 5));
console.log('The circumference is ' + rect.circumference(2, 5));
console.log('Current date time is ' + rect.currentDateTime);
console.log('Directory name is ' + rect.directoryName);
console.log('File name is ' + rect.fileName);

console.log('Circle area is ' + circle.area(5));