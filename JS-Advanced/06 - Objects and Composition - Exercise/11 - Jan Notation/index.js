function janNotation(arr) {
    const operands = arr.filter(item => typeof item === 'number');
    const operators = arr.filter(item => typeof item === 'string');

    for (let operator of operators) {
        if (operands.length >= 2) {
            if (operator === '+') {
                let result = Number(operands[1]) + Number(operands[0]);
                operands.splice(0, 2, result);
            } else if (operator === '-') {
                let result = Number(operands[1]) - Number(operands[0]);
                operands.splice(0, 2, result);
            } else if (operator === '*') {
                let result = Number(operands[1]) * Number(operands[0]);
                operands.splice(0, 2, result);
            } else if (operator === '/') {
                let result = Number(operands[0]) / Number(operands[1]);
                operands.splice(0, 2, result);
            };
        } else {
            console.log('Error: not enough operands!');
            return;
        };
    };

    if (operands.length === 1) {
        console.log(operands[0]);
    } else if (operands.length > 1) {
        console.log('Error: too many operands!');
    };
};

// janNotation([3, 4, '+']);
janNotation([5, 3, 4, '*', '-']);
janNotation([7, 33, 8, '-']);
janNotation([15, '/']);
janNotation([31, 2, '+', 11, '/']);
janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);