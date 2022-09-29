function sudomuFunction() {
    const inputs = Array.from(document.querySelectorAll('input[type=number]'));
    const checkButton = document.getElementsByTagName('button')[0];
    const clearButton = document.getElementsByTagName('button')[1];
    const table = document.getElementsByTagName('table')[0];
    const checkElement = document.querySelector('#check p');

    let valuesArray = [];

    checkButton.addEventListener('click', function() {
        let count = 0;

        for (let i = 0; i < 3; i++) {
            valuesArray.push([]);
            for (let j = 0; j < 3; j++) {
                valuesArray[i].push(inputs[count].value);
                count += 1;
            };
        };

        let firstIndexOne = valuesArray[0].indexOf('1');
        let secondIndexOne = valuesArray[1].indexOf('1');
        let thirdIndexOne = valuesArray[2].indexOf('1');

        let firstIndexTwo = valuesArray[0].indexOf('2');
        let secondIndexTwo = valuesArray[1].indexOf('2');
        let thirdIndexTwo = valuesArray[2].indexOf('2');

        let firstIndexThree = valuesArray[0].indexOf('3');
        let secondIndexThree = valuesArray[1].indexOf('3');
        let thirdIndexThree = valuesArray[2].indexOf('3');

        if (firstIndexOne !== secondIndexOne && firstIndexOne !== thirdIndexOne && secondIndexOne !== thirdIndexOne
            && firstIndexTwo !== secondIndexTwo && firstIndexTwo !== thirdIndexTwo && secondIndexTwo !== thirdIndexTwo
            && firstIndexThree !== secondIndexThree && firstIndexThree !== thirdIndexThree && secondIndexThree !== thirdIndexThree) {
                table.style.border = '2px solid green';
                checkElement.textContent = 'You solve it! Congratulations!';
                checkElement.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            checkElement.textContent = 'NOP! You are not done yet...';
            checkElement.style.color = 'red';
        };
    });

    clearButton.addEventListener('click', function() {
        for (let input of inputs) {
            input.value = '';
            table.style.border = 'none';
            checkElement.textContent = '';
        };
    });
};