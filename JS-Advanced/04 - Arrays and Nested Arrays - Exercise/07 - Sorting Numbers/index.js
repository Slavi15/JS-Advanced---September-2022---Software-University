function sortingNumber(arr) {
    let resultArray = [];
    const sortedArray = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArray.length; i++) {
        if (resultArray.length !== sortedArray.length) {
            if (i === (sortedArray.length - (i + 1))) {
                resultArray.push(sortedArray[i]);
            } else {
                resultArray.push(sortedArray[i]);
                resultArray.push(sortedArray[sortedArray.length - (i + 1)]);
            };
        };
    };

    return resultArray;
};

console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));