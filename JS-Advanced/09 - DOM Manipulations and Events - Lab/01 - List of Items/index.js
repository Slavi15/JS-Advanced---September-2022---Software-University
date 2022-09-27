function listItems() {
    const ul = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let inputValue = input.value;

    const li = document.createElement('li');
    li.textContent = inputValue;

    ul.appendChild(li);

    input.value = '';
};