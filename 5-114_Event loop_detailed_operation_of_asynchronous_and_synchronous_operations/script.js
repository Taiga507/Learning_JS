'use strict';

console.log(1);

setTimeout(() => {
    console.log('timeout 2');
}, 2000);

setTimeout(() => {
    console.log('timeout 2');
}, 2000);

console.log(2);