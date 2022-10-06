function dynamicValidation() {
    const input = document.querySelector('input[type=text]');
    const regex = new RegExp(/(^[a-z]{0,}@[a-z]{0,}.[a-z]{0,}$)/, 'g');

    input.addEventListener('change', function() {
        !regex.test(this.value) ? input.classList.add('error') : input.classList.remove('error');
    });
};