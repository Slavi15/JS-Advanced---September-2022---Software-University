function magicMatrices(arr) {
    let resultsArray = [];

    for (let row = 0; row < arr.length; row++) {
        let rowResult = 0;
        let columnResult = 0;

        for (let column = 0; column < arr[row].length; column++) {
            columnResult += Number(arr[row][column]);
            rowResult += Number(arr[column][row]);
        };

        resultsArray.push(rowResult);
        resultsArray.push(columnResult);
    };

    console.log(resultsArray.every(num => num === resultsArray[0]));
};

magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]]);
magicMatrices([[11, 32, 45],
                [21, 0, 1],
                [21, 1, 1]]);
magicMatrices([[1, 0, 0],
                [0, 0, 1],
                [0, 1, 0]]);