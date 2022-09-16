function rotateArray(arr, num) {
    for (let i = 0; i < num; i++) {
        let popElement = arr.pop();
        arr.unshift(popElement);
    };

    console.log(arr.join(' '));
};

rotateArray(['1',
            '2',
            '3',
            '4'], 2);
rotateArray(['Banana', 
            'Orange', 
            'Coconut', 
            'Apple'], 15);