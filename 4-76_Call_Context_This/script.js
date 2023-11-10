'use strict';

// 1. Вызов обычной функции(самый частый вызов функции).
// function showthis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showthis(4, 5);

// 2. Методы объектов(это тоже функции).
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// 3. Функции конструкторы через оператора new.
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello' + this.name);
//     };
// }
// let taiga = new User('Taiga', 43);

// 4. Ручное присвоение this любой функции.
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Taiga'
// };

// sayName.call(user, 'Dune');
// sayName.apply(user, ['Dune']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    console.log(this);
    e.target.style.backgroundColor = 'red';
});