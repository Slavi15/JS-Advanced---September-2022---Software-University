function deleteByEmail() {
    const input = document.getElementsByTagName('input')[0];
    let inputValue = input.value;

    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');
    let result = document.getElementById('result');

    let isFound = false;

    for (let cell of tableCells) {
        if (cell.textContent === inputValue) {
            cell.parentElement.remove();
            isFound = true;
        };
    };

    result.textContent = isFound ? 'Deleted.' : 'Not found.';
    input.value = '';
};