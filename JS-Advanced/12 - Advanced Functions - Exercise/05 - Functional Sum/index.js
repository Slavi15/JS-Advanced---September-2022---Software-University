function functionalSum(num) {
    let curry = (number) => {
        num += number;
        return curry;
    };

    curry.toString = () => num;
    return curry;
};

console.log(functionalSum(1));
console.log(functionalSum(1)(6)(-3));