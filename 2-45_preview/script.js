'use strict';

const btns = document.querySelectorAll('button');

const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
};

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target);
});