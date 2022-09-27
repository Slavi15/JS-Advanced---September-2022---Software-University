function listItems() {
    const ul = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let inputValue = input.value;

    const li = document.createElement('li');
    li.textContent = inputValue;

    const aTag = document.createElement('a');
    aTag.href = '#';
    aTag.innerText = '[Delete]';
    aTag.addEventListener('click', function(event) {
        event.target.parentElement.remove();
        // this.parentElement.remove();
    });
    li.appendChild(aTag);

    ul.appendChild(li);

    input.value = '';
};