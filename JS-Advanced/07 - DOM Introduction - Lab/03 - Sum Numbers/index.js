function sumNumbers() {
    const inputValueOne = document.getElementById('num1').value;
    const inputValueTwo = document.getElementById('num2').value;

    const result = Number(inputValueOne) + Number(inputValueTwo);
    document.getElementById('sum').value = result;
};