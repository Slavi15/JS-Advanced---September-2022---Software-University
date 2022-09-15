function evenPositionNumbers(arr) {
    const result = arr.filter((num, index) => index % 2 === 0);
    console.log(result.join(' '));
};

evenPositionNumbers(['20', '30', '40', '50', '60']);
evenPositionNumbers(['5', '10']);