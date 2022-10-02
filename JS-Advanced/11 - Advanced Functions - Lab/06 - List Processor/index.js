function listProcessor(arr) {
    let resultArray = [];

    let handler = {
        add: (value) => { resultArray.push(value); },
        remove: (value) => { resultArray = resultArray.filter(item => item !== value); },
        print: () => { console.log(resultArray.join(',')); }
    };

    arr.forEach((item) => {
        const [command, value] = item.split(' ');
        return handler[command](value);
    });
};

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);