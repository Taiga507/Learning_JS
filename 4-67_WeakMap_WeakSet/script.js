'use strick';

// let user = {name: 'Alex'};

// let map = new WeakMap();
// map.set(user, 'date');

// user = null;

// console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


let messages = [
    {text: 'Hello', from: 'Alex'},
    {text: 'Arrakis', from: 'Dune'},
    {text: '...', from: 'M'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

messages.shift();

console.log(readMessages.has(messages[0]));