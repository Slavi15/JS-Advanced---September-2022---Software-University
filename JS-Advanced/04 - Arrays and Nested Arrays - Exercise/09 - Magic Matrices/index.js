function magicMatrices(arr) {
    let resultsArray = [];

    for (let row = 0; row < arr.length; row++) {
        const rowResult = arr[row].reduce((previous, current) => previous + current);
        resultsArray.push(rowResult);
    };

    console.log(resultsArray);
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