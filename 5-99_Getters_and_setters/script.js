'use strict';

const persone = {
    name: 'Alex',
    age: 44,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge = 19);
console.log(persone.userAge);