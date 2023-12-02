'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1997',
    showMyPublicDate: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Доказательство, что ключ является строкой.
// console.log(typeof(Object.keys(user)[0]));

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete();
// map.clear();
// map.size;

// for (let shop of map.keys()) {
//     console.log(shop)
// };

// for (let price of map.values()) {
//     console.log(price);
// };

// for (let arrs of map.entries()) {
//     console.log(arrs);
// };

map.forEach((value, key) => {
    console.log(key, value);
});