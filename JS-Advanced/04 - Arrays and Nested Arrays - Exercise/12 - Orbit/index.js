function orbitFunction(arr) {
    const width = Number(arr[0]);
    const height = Number(arr[1]);
    const x = Number(arr[2]);
    const y = Number(arr[3]);

    let matrix = [];
    for (let i = 0; i < width; i++) {
        matrix.push([]);
    };

    for (let row = 0; row < width; row++) {
        for (let column = 0; column < height; column++) {
            matrix[row][column] = Math.max(Math.abs(row - x), Math.abs(column - y)) + 1;
        };
    };

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
};

orbitFunction([4, 4, 0, 0]);
orbitFunction([5, 5, 2, 2]);
orbitFunction([3, 3, 2, 2]);