"use strict";

//Given [1,2,3,4,5,6]
var numbers = [1, 2, 3, 4, 5, 6];


Object.defineProperties(numbers, {
    clone: {
        enumerable: false,
        configurable: false,
        value: function () {
            numbers = numbers.concat(numbers.slice(0));
        }
    }
});

numbers.clone();

// [1,2,3,4,5,6,1,2,3,4,5,6]
console.log(numbers);