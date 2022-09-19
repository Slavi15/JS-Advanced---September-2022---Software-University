function magicMatrices(arr) {
    let resultsArray = [];
    let rowResult = 0;
    let columnResult = 0;
    
    if (arr.length > 0) {
        for (let row = 0; row < arr.length; row++) {
            for (let column = 0; column < arr[row].length; column++) {
                rowResult += arr[row][column];
                columnResult += arr[column][row];
            };
            resultsArray.push(rowResult);
            resultsArray.push(columnResult);
            rowResult = 0;
            columnResult = 0;
        };

        console.log(resultsArray.every(num => num === resultsArray[0]));
    } else if (arr.length === 0) {
        console.log(true);
    };
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