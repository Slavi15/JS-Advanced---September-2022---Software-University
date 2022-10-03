function argumentInfo(...args) {
    let array = [];
    const map = new Map();

    args.forEach((element) => {
        let elementType = typeof element;
        array.push(`${elementType}: ${element}`);
        if (map.has(elementType) === false) {
            map.set(elementType, {
                count: 1
            });
        } else {
            map.get(elementType).count += 1;
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