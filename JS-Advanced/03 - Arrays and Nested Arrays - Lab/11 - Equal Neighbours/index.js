function equalNeighbours(matrix) {
    let neighbourCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (row !== matrix.length - 1 && column !== matrix[row].length - 1) {
                if (matrix[row][column] === matrix[row + 1][column]) {
                    neighbourCount += 1;
                };
                if (matrix[row][column] === matrix[row][column + 1]) {
                    neighbourCount += 1;
                };
            } else if (row === matrix.length - 1 && column !== matrix[row].length - 1) {
                if (matrix[row][column] === matrix[row][column + 1]) {
                    neighbourCount += 1;
                };
            } else if (column === matrix[row].length - 1 && row !== matrix.length - 1) {
                if (matrix[row][column] === matrix[row + 1][column]) {
                    neighbourCount += 1;
                };
            };
        };
    };

    return neighbourCount;
};

console.log(equalNeighbours([['2', '3', '4', '7', '0'],
                                ['4', '0', '5', '3', '4'],
                                ['2', '3', '5', '4', '2'],
                                ['9', '8', '7', '5', '4']]));
console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'], 
                                ['well', 'done', 'yo', '6'], 
                                ['not', 'done', 'yet', '5']]));
console.log(equalNeighbours([['2', '2', '5', '7', '4'],
                                ['4', '0', '5', '3', '4'],
                                ['2', '5', '5', '4', '2']]));