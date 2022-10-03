function argumentInfo(...args) {
    let array = [];
    const map = new Map();

    args.forEach((element) => {
        array.push(`${typeof element}: ${element}`);
        if (map.has(typeof element) === false) {
            map.set(typeof element, {
                count: 1
            });
        } else {
            map.get(typeof element).count += 1;
        };
    });

    for (let item of array) {
        console.log(item);
    };

    const sortedMap = [...map.entries()].sort((a, b) => b[1].count - a[1].count);
    for (let kvp of sortedMap) {
        console.log(`${kvp[0]} = ${kvp[1].count}`);
    };
};

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob'}, 3.333, 9.999);