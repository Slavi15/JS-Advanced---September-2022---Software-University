document.querySelectorAll('a').forEach(item => item.classList.remove('active'));
document.getElementById('login').classList.add('active');

const URL = 'http://localhost:3030/users/login';

document.getElementById('user').style.display = 'none';
const loginButton = document.getElementsByTagName('button')[0];

loginButton.addEventListener('click', loginFunction);

async function loginFunction(e) {
    e.preventDefault();
    const [email, password] = Array.from(document.getElementsByTagName('input'));

    const input = {
        email: email.value,
        password: password.value
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