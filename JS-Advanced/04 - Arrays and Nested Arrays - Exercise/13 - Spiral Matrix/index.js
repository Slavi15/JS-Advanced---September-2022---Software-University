function spiralMatrix(width, height) {
    const results = [];

    for (let i = 0; i < width; i++) {
        results.push([]);
    };

    let counter = 1;
    let startColumn = 0;
    let endColumn = height - 1;
    let startRow = 0;
    let endRow = width - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        };
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        };
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        };
        endRow--;

        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    };

    for (let row of results) {
        console.log(row.join(' '));
    };
};

spiralMatrix(5, 5);
spiralMatrix(3, 3);