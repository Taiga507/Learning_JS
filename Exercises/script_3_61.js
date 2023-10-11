'use strict';

// console.log(Number.MAX_SAFE_INTEGER);

// const bigint = 15615151561651561515n;

const sameBigint = BigInt(15615151561651561515);

let bigint = 1n;
let number = 2;
// console.log(bigint + BigInt(number));

console.log(Number(bigint) + number);