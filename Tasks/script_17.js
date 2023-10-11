'use strict';

function amountOfPages(summary){
	let result = '';
	let n = 0;

	for (let i = 1; i <= summary; i++) {
		result += i;
		if (result.length >= summary) {
		n = i;
		break;
		}
	}

	return n;
	}

console.log(amountOfPages(12));

// 8 - 8
// 9 - 9
// 10 - 11
// 11 - 13
// 12 - 15
// 13 - 17

// 17 - 25


function amountOfPages(summary) {
	let n = 1;
	let digits = 0;
  
	while (digits < summary) {
		const pageStr = n.toString();
		digits += pageStr.length;
		n++;
	}
  
	return n - 1;
	}
  
console.log(amountOfPages(12));