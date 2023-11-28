'use strict';

const persone = {
	name: 'Taiga',
	tel: '+7507507507',
	parents: {
		mom: 'Sonia',
		dad: 'Alex'
	}
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'bestMom'

console.log(persone);
console.log(clone);