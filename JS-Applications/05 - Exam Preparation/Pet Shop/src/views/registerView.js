import { page } from "../library.js";
import { html, render } from '../library.js';
import { update } from "../views.js";

const template = () => html`
<!--Register Page-->
<section id="registerPage">
    <form class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`;

export function registerView() {
    render(template(), document.getElementById('content'));

    document.querySelector('.registerForm .btn').addEventListener('click', registerFunction);

    async function registerFunction(e) {
        e.preventDefault();
        const [email, password, rePass] = Array.from(document.querySelectorAll('.registerForm input'));

        if (email.value === '' || password.value === '' || rePass.value === '' || password.value !== rePass.value) {
            window.alert('Invalid input!');
            return;
        };

        const input = {
            email: email.value,
            password: password.value
        };

        await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
        .then(res => res.json())
        .then(data => {
            if (data.code) {
                window.alert('Invalid input!');
                return;
            };

            sessionStorage.setItem('credentials', JSON.stringify({
                email: data.email,
                accessToken: data.accessToken,
                id: data._id
            }));

            page.redirect('/');
            update();
        });
    };
};