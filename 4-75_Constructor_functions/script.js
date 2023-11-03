'use strict';

// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`)
//     }
// }

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

const taiga = new User('Taiga', 43);
const dune = new User('Dune', 35);

taiga.exit();
taiga.hello();
dune.hello();

console.log(taiga);
console.log(dune);