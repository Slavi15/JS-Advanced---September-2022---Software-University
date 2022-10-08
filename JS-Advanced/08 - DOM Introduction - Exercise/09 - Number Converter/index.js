function numberConverter() {
    const convertButton = document.getElementsByTagName('button')[0];
    const select = document.getElementById('selectMenuTo');

    let optionValues = ['binary', 'hexadecimal'];
    for (let i = 0; i < optionValues.length; i++) {
        const option = document.createElement('option');
        option.value = optionValues[i];
        option.textContent = optionValues[i].charAt(0).toUpperCase() + optionValues[i].slice(1);
        select.appendChild(option);
    };

    convertButton.addEventListener('click', convertNumber);

    let handler = {
        binary: function(num) { document.getElementById('result').value = num.toString(2); },
        hexadecimal: function(num) { document.getElementById('result').value = num.toString(16).toUpperCase() }
    };

    function convertNumber() {
        const input = Number(document.getElementById('input').value);
        const option = select.value;
        return handler[option](input);
    };
};