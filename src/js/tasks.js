const solder = {
	health: 400,
	armor: 100
};

let john = Object.create(solder);

john = {
	health: 200
};

console.log(john.health);