function factorial(x) {
    if (typeof(x) !== 'number' || !Number.isInteger(x)) {
        return 'Ошибка';
    };

    if (x <= 0) {
        return 1
    } else {
        return x * factorial(x - 1);
    };
};

console.log(factorial(5));