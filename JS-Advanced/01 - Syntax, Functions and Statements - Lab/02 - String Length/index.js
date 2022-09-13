function stringLength(...params) {
    let sum = 0;

    for (let item of params) {
        sum += item.length;
    };

    let averageLength = Math.floor(sum / params.length);

    console.log(`${sum}\n${averageLength}`);
};

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');