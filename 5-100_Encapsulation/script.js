'use strict';

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     };
// }

// const alex = new User('Alex', 39);
// alex.name = 'Taiga';
// alex.setAge(44);

// alex.say();


class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Zheregelia';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get ageD() {
        return this._age;
    }

    set ageD(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    // getSurname() {
    //     return this.#surname;
    // }

    get getSurname() {
        return this.#surname;
    }
}

const alex = new User('Alex', 39);
alex.ageD = 44;
alex._age = 46;
alex.name = 'Taiga';
// console.log(alex.getSurname());
console.log(alex.getSurname);
alex.say();