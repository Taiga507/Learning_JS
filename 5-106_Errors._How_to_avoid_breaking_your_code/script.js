'use strict';

try {
    console.log('Normal');
} catch(e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
} finally {
    
}

console.log('working');