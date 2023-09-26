'use strict';

const obj = {
    name: 'Test',
    [Symbol('is')]: 1,
    getId: function() {
        return this[id];
    }
};

// let id = Symbol('id');
// let id2 = Symbol('id');

// console.log(id == id2);
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj)

// console.log(value);