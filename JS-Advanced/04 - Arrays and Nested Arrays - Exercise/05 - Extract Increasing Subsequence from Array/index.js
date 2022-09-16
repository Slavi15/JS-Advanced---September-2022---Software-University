function extractSubsequence(arr) {
    let resultArray = [];
    resultArray.push(arr[0]);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= resultArray[resultArray.length - 1]) {
            resultArray.push(arr[i]);
        };
    };

    return resultArray;
};

console.log(extractSubsequence([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));
console.log(extractSubsequence([
    1,
    2,
    3,
    4
]));
console.log(extractSubsequence([
    20,
    3,
    2,
    15,
    6,
    1
]));