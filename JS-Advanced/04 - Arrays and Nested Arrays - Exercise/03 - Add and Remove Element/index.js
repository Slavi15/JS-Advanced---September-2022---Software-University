function addRemoveElement(arr) {
    let result = [];
    let number = 0;

    for (let command of arr) {
        number += 1;
        if (command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            result.pop(number);
        };
    };

    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'));
};

addRemoveElement(['add',
                    'add',
                    'add',
                    'add']);
addRemoveElement(['add', 
                    'add', 
                    'remove', 
                    'add', 
                    'add']);
addRemoveElement(['remove', 
                    'remove', 
                    'remove']);