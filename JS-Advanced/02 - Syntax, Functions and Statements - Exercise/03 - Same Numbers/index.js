function sameNumbers(number) {
    let arr = String(number).split('');
    let sum = Number(arr[0]);
    let isSame = true;
    
    for (let i = 1; i < arr.length; i++) {
        sum += Number(arr[i]);
        if (arr[i - 1] !== arr[i]) {
            isSame = false;
        };
    };

    if (isSame === true) {
        console.log(`${true}\n${sum}`);
    } else {
        console.log(`${false}\n${sum}`);
    };
};

sameNumbers(2222222);
sameNumbers(1234);