'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f;

// const ans = prompt('Введите ваше имя');

// const reg = /n/i;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-56-89'.replace(/-/g, ':'));

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;
// console.log(reg.test(ans));

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));