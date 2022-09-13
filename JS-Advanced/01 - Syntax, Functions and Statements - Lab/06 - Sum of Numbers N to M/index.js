function sumNumbers(n, m) {
    const start = Number(n);
    const end = Number(m);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    };

    return sum;
};

sumNumbers('1', '5');
sumNumbers('-8', '20');