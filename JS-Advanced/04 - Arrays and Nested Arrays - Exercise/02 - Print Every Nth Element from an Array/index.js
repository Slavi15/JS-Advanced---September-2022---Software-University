function printEveryNthElementArray(arr, num) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i += num) {
        resultArray.push(arr[i]);
    };
    return resultArray;
};

console.log(printEveryNthElementArray(['5',
                                        '20',
                                        '31',
                                        '4',
                                        '20'], 2));
console.log(printEveryNthElementArray(['dsa', 
                                        'asd', 
                                        'test', 
                                        'tset'], 2));
console.log(printEveryNthElementArray(['1', 
                                        '2', 
                                        '3', 
                                        '4', 
                                        '5'], 6));