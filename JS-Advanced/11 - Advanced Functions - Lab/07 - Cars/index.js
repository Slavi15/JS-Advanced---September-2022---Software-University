function carsFunction(arr) {
    let obj = {};
    let inherit = [];

    for (let input of arr) {
        const [command, ...value] = input.split(' ');

        if (command === 'create') {
            create(value);
        } else if (command === 'set') {
            set(value);
        } else if (command === 'print') {
            print(value);
        };
    };

    function create(array) {
        if (array.length === 1) {
            obj[array[0]] = {};
        } else {
            obj[array[0]] = {};
            Object.assign(obj[array[0]], obj[array[2]]);
            inherit.push(`${array[0]}:${array[2]}`);
        };
    };

    function set(array) {
        if (inherit.length > 0) {
            for (let item of inherit) {
                if (array[0] === item.slice(0, 2)) {
                    obj[array[0]][array[1]] = array[2];
                    Object.assign(obj[array[0]], obj[item.slice(3, 5)]);
                } else {
                    obj[array[0]][array[1]] = array[2];
                };
            };
        } else {
            obj[array[0]][array[1]] = array[2];
        };
    };

    function print(array) {
        let result = [];
        for (let key in obj[array[0]]) {
            result.push(`${key}:${obj[array[0]][key]}`);
        };
        console.log(result.join(','));
    };
};

// carsFunction(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']);
carsFunction(['create pesho', 
    'create gosho inherit pesho', 
    'create stamat inherit gosho', 
    'set pesho rank number1', 
    'set gosho nick goshko', 
    'print stamat']);