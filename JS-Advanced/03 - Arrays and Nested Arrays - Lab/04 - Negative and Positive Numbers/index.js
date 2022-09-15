function negativePositive(arr) {
    let result = [];

    for (let num of arr) {
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num);
        };
    };

    console.log(result);
};

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);