'use strict';

const boxesQuerry = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuerry.forEach(box => {
    if (box.matches('.this'))
    console.log('This one!');
});

console.log(boxesQuerry[0].closest('.wrapper'));

// boxesQuerry[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// };

// console.log(boxesQuerry);
// console.log(boxesGet);
// console.log(document.body.children);

// console.log(Array.from(boxesGet));