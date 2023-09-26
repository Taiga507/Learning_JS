'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1997',
    showMyPublicDate: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'name', {writable: false});
Object.defineProperty(user, 'gender', {value: 'male'});

console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});