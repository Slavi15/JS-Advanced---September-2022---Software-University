function formValidation() {
    const USERNAME_REGEX = new RegExp(/^([A-Za-z0-9]{3,20})$/, 'g');
    const PASSWORD_REGEX = new RegExp(/^(\w{5,15})$/, 'g');
    const CONFIRM_PASSWORD_REGEX = new RegExp(/^(\w{5,15})$/, 'g');
    const EMAIL_REGEX = new RegExp(/^(([\w\.]+)?@([\w]+)?\.{1,}([\w]+)?)$/, 'g');

    const [username, email, password, confirmPassword, company, companyNumber] = Array.from(document.querySelectorAll('input'));
    const button = document.getElementById('submit');
    const companyInfo = document.getElementById('companyInfo');
    const validDiv = document.getElementById('valid');

    company.addEventListener('change', function () {
        companyInfo.style.display === 'none' ? companyInfo.style.display = 'block' : companyInfo.style.display = 'none';
    });

    let isValid = null;

    button.addEventListener('click', function (e) {
        e.preventDefault();

        Array.from(document.querySelectorAll('input')).forEach(element => {
            checkValidity(element.id);
        });

        if (password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        };

        isValid ? validDiv.style.display = 'block' : validDiv.style.display = 'none';
    });

    function checkValidity(element) {
        switch (element) {
            case 'username':
                if (!USERNAME_REGEX.test(username.value)) {
                    username.style.borderColor = 'red';
                    isValid = false;
                } else {
                    username.style.border = 'none';
                    isValid = true;
                };
                break;
            case 'email':
                if (!EMAIL_REGEX.test(email.value)) {
                    email.style.borderColor = 'red';
                    isValid = false;
                } else {
                    email.style.border = 'none';
                    isValid = true;
                };
                break;
            case 'password':
                if (!PASSWORD_REGEX.test(password.value)) {
                    password.style.borderColor = 'red';
                    isValid = false;
                } else {
                    password.style.border = 'none';
                    isValid = true;
                };
                break;
            case 'confirm-password':
                if (!CONFIRM_PASSWORD_REGEX.test(confirmPassword.value)) {
                    confirmPassword.style.borderColor = 'red'
                    isValid = false;
                } else {
                    confirmPassword.style.border = 'none';
                    isValid = true;
                };
                break;
            case 'companyNumber':
                if (company.checked) {
                    if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                        companyNumber.style.borderColor = 'red';
                        isValid = false;
                    } else {
                        companyNumber.style.border = 'none';
                        isValid = true;
                    };
                };
                break;
        };
    };
};