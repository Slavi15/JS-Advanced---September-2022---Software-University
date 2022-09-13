function squareOfStars(num = 5) {
    let string = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            string += '* ';
        };
        string += '\n';
    };
    console.log(string);
};

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);