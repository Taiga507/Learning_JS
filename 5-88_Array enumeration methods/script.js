'use strict';

// filter
const names = ['Ivan', 'Ann', 'Georg', 'Vol`demar'];

const shortNames = names.filter(name => {
	return name.length < 5;
});

console.log(shortNames);
console.log(names);

// map
const answers = ['IvaN', 'ANn', 'GeOrg', 'Vol`dEMAR'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// some
const one = [5, 'dune', 'TAIGA'];

const resultSome = one.some(item => typeof(item) === 'number');

console.log(resultSome);

// every
const all = [5, 'dune', 'TAIGA'];

const resultEvery = all.every(item => typeof(item) === 'number');

console.log(resultEvery);

// reduce
// const arr = [3, 5, 6, 1, 8, 2];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

const arr = [3, 5, 6, 1, 8, 2];

const res = arr.reduce((sum, current) => sum + current, 3);

console.log(res);

const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);