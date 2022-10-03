function getFibonator() {
    let numbers = [0];
    return function () {
        if (numbers.length === 1) {
            numbers.push(1);
        } else {
            const sum = numbers.slice(numbers.length - 2)
                .reduce((previous, current) => previous + current);
            numbers.push(sum);
        };
        return numbers[numbers.length - 1];
    };
};

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13