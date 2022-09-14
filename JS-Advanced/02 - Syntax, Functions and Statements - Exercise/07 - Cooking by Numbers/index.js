function cookingNumbers(number, ...arr) {
    let num = Number(number);

    for (let command of arr) {
        if (command === 'chop') {
            num /= 2;
        } else if (command === 'dice') {
            num = Math.sqrt(num);
        } else if (command === 'spice') {
            num += 1;
        } else if (command === 'bake') {
            num *= 3;
        } else if (command === 'fillet') {
            num -= (num * 0.2);
        };
        console.log(num);
    };
};

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');