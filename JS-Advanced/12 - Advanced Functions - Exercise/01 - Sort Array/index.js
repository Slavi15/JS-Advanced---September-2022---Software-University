function sortArray(arr, criteria) {
    if (criteria === 'asc') {
        arr.sort((a, b) => a - b);
    } else if (criteria === 'desc') {
        arr.sort((a, b) => b - a);
    };
    return arr;
};

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));