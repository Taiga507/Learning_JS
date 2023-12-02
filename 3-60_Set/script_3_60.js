'use strict';

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// const set = new Set(arr);

// console.log(set);

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
};

console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan')
//     .add('Oleg');

// console.log(set);

// set.delete();
// set.has();
// set.clear();
// set.size;

// for (let value of set)
// console.log(value);

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing)
// });

// set.values();
// set.keys();
// set.entries();