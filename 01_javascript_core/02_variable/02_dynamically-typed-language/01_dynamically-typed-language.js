/* 01. dynamically-typed-language */

var test;
console.log(typeof test);           // undefined

test = 1;
console.log(typeof test);           // number

test = 'javascript';
console.log(typeof test);           // String

test = true;
console.log(typeof test);           // boolean

test = null;
console.log(test);                  // null

test = Symbol();
console.log(typeof test);           // symbol

test = {};
console.log(typeof test);           // object

test = [];
console.log(typeof test);           // object

test = function() {};
console.log(typeof test);           // function
