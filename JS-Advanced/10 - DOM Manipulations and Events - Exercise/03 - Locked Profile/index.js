function lockedProfile() {
    let radioInputs = Array.from(document.querySelectorAll('input[type=radio]'));

    for (let radioInput of radioInputs) {
        radioInput.addEventListener('click', showInformation);
    };

    function showInformation(e) {
        const hiddenInfo = e.target.parentElement.children[9];
        const button = e.target.parentElement.children[10];

        button.addEventListener('click', function() {
            hiddenInfo.style.display === '' || hiddenInfo.style.display === 'none' 
                ? hiddenInfo.style.display = 'block' 
                : hiddenInfo.style.display = 'none';
            this.textContent === 'Show more' ? this.textContent = 'Hide it' : this.textContent = 'Show more';
        });
    };
};