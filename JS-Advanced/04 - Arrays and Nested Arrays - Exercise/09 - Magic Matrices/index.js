function magicMatrices(arr) {
    return checkMagic(arr) && checkMagic(rotate(arr));
 
    function rotate(array) {
        return array[0].map((x, i) => array.map(x => x[i]));
    };

    function checkMagic(arr) {
        arr = arr.map(x => x.reduce((a, b) => a + b));
 
        return arr.every(x => x === arr[0]);
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