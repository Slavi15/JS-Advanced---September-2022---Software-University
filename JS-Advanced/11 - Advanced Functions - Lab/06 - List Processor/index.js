function listProcessor(arr) {
    let resultArray = [];

    for (let item of arr) {
        const [command, value] = item.split(' ');

        if (command === 'add') {
            add(value);
        } else if (command === 'remove') {
            remove(value);
        } else if (command === 'print') {
            print();
        };
    };

    function add(string) {
        resultArray.push(string);
    };

    function remove(string) {
        const filteredArray = resultArray.filter(item => item !== string);
        resultArray = filteredArray;
    };

    function print() {
        console.log(resultArray.join(','));
    };
};

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);