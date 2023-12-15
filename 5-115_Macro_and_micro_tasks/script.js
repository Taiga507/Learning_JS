'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('micro'));

Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('console');