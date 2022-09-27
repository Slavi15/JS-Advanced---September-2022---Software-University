function highlightActive() {
    const input = document.getElementsByTagName('input');

    Array.from(input, (field) => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        field.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
};