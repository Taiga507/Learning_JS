'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// };

// console.log(block?.textContent);

// block?.textContent = '507';

// console.log(1+3);

const userData = {
    name: 'Alex',
    age: null
};

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// };

console.log(userData.skills?.js)

userData.hey?.();