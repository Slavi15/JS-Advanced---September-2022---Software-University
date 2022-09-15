function biggerHalf(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let middle = Math.floor(sortedArray.length / 2);
    return sortedArray.slice(middle, sortedArray.length);
};

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);