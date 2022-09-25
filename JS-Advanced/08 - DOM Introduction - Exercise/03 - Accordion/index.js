function accordionFunction() {
    const extraElement = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extraElement.style.display = 'block';
    } else if (button.textContent === 'Less') {
        button.textContent = 'More';
        extraElement.style.display = 'none';
    };
};