'use strict';

// rest operator
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

// defaul parameters
function calcOrDouble(number, basic = 2) {
    console.log(number * basic);
}

calcOrDouble(3);