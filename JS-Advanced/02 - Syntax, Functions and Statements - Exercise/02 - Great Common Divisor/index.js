function greatestCommonDivisor(numberOne, numberTwo) {
    if (!numberTwo) {
        return numberOne;
    };

    return greatestCommonDivisor(numberTwo, numberOne % numberTwo);
};

console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));