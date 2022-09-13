function largestNumber(...params) {
    let largestNum = Math.max(...params);
    console.log(`The largest number is ${largestNum}.`);
};

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);