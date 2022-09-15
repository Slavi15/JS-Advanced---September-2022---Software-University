function lastNumbersSequence(n, k) {
    let array = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            array.push(1);
            continue;
        };

        if ((i - k) < 0) {
            let sliced = array.slice(0, i);
            let sum = sliced.reduce((previousValue, currentValue) => previousValue + currentValue);
            array.push(sum);
        } else {
            let sliced = array.slice(i - k, i);
            let sum = sliced.reduce((previousValue, currentValue) => previousValue + currentValue);
            array.push(sum);
        };
    };

    return array;
};

console.log(lastNumbersSequence(6, 3));
console.log(lastNumbersSequence(8, 2));