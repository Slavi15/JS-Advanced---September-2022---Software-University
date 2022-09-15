function diagonalSums(matrix) {
    let mainDiagonalIndex = 0;
    let secondaryDiagonalIndex = matrix[0].length - 1;

    let mainSum = 0;
    let secondarySum = 0;

    for (let row of matrix) {
        mainSum += row[mainDiagonalIndex];
        secondarySum += row[secondaryDiagonalIndex]

        mainDiagonalIndex += 1;
        secondaryDiagonalIndex -= 1;
    };

    console.log(`${mainSum} ${secondarySum}`);
};

diagonalSums([[20, 40],
                [10, 60]]);
diagonalSums([[3, 5, 17],
                [-1, 7, 14],
                [1, -8, 89]]);