import { page } from "../library.js";
import { html, render } from '../library.js';
import { update } from "../views.js";

const template = () => html`
<!--Login Page-->
<section id="loginPage">
    <form class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`;

export function loginView() {
    render(template(), document.getElementById('content'));

    document.querySelector('.loginForm .btn').addEventListener('click', loginFunction);

    async function loginFunction(e) {
        e.preventDefault();

        try {
            const [email, password] = Array.from(document.querySelectorAll('.loginForm input'));

            if (email.value === '' || password.value === '') {
                window.alert('Invalid input!');
                return;
            };

            const input = {
                email: email.value,
                password: password.value
            };
    
            await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('credentials', JSON.stringify({
                    email: data.email,
                    accessToken: data.accessToken,
                    id: data._id
                }));
    
                page.redirect('/');
                update();
            });
        } catch (err) {
            window.alert('Invalid input!');
        };
    };
};