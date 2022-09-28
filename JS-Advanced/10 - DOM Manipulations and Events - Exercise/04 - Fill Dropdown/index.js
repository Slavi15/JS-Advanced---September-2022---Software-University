function fillDropdown() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const select = document.getElementsByTagName('select')[0];

    let optionElement = document.createElement('option');
    optionElement.textContent = textInput.value;
    optionElement.value = valueInput.value;

    select.appendChild(optionElement);

    textInput.value = '';
    valueInput.value = '';
};