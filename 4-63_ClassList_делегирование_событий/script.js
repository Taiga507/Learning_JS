'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('507');
// };

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // };

    (btns[1].classList.toggle('red'))
});

// for (let i = 0; i < 3; i++) {
//     btns[i].addEventListener('click', () => {
//         if (!btns[i].classList.contains('red')) {
//             btns[i].classList.add('red');
//         } else {
//             btns[i].classList.remove('red');
//         }
//     });
// };

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == 'BUTTON') {
//         console.log('507');
//     }
// });

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log('507');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);