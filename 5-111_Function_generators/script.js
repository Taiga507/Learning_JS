'use strict';

// function* taiga() {
//     yield 'D';
//     yield 'u';
//     yield 'n';
//     yield 'e';
// }

// const str = taiga();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);


// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(4)) {
    console.log(k);
}