function dynamicValidation() {
    const input = document.getElementById('email');
    const regex = new RegExp(/([a-z]{1,}\@[a-z]{1,}\.[a-z]{1,})/, 'g');

    input.addEventListener('change', function() {
        regex.test(this.value) === false ? this.classList.add('error') : this.classList.remove('error');
    });
};