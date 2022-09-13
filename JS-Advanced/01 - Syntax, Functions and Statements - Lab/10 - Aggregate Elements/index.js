function aggregateElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concat = arr.join('');

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        inverseSum += (1 / Number(arr[i]));
    };

    console.log(`${sum}\n${inverseSum}\n${concat}`);
};

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);