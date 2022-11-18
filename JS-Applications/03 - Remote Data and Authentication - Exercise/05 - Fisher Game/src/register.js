document.querySelectorAll('a').forEach(item => item.classList.remove('active'));
document.getElementById('register').classList.add('active');

const URL = 'http://localhost:3030/users/register';

document.getElementById('user').style.display = 'none';
const registerButton = document.getElementsByTagName('button')[0];

registerButton.addEventListener('click', registerFunction);

async function registerFunction(e) {
    e.preventDefault();
    const [email, password, rePass] = Array.from(document.getElementsByTagName('input'));

    if (password.value !== rePass.value) return;

    const input = {
        email: email.value,
        password: password.value,
        rePass: rePass.value
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
        .then(res => res.json())
        .then(data => {
            if (data.code) {
                return document.getElementsByClassName('notification')[0].textContent = data.message;
            };

            sessionStorage.setItem('credentials', JSON.stringify({
                email: data.email,
                accessToken: data.accessToken,
                id: data._id
            }));

            window.location.href = './index.html';

            return data;
        });
};