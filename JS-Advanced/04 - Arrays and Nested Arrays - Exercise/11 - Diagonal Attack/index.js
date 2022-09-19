function diagonalAttack(arr) {
    let matrix = [];
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let arrRow of arr) {
        matrix.push(arrRow.split(' '));
    };

    for (let index = 0; index < matrix.length; index++) {
        firstDiagonalSum += Number(matrix[index][index]);
        secondDiagonalSum += Number(matrix[index][matrix[index].length - (index + 1)]);
    };

    if (firstDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[row].length; column++) {
                if (column !== row && column !== matrix[row].length - (row + 1)) {
                    matrix[row][column] = firstDiagonalSum;
                };
            };
        };

    };

    for (let row of matrix) {
        console.log(row.join(' '));
    };
};

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);
diagonalAttack(['1 1 1', 
                '1 1 1', 
                '1 1 0']);