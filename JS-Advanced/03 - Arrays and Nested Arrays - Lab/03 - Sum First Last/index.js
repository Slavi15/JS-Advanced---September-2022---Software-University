function sumFirstLast(arr) {
    const first = Number(arr.shift());
    const last = Number(arr.pop());
    console.log(first + last);
};

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);