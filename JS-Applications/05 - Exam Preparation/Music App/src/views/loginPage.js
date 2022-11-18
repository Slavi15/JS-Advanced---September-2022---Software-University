import { html, render, page } from '../library.js';
import { updateAccessibility } from '../views.js';

const template = () => html`
<!--Login-->
<section id="loginPage">
    <form>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

export function loginPage() {
    render(template(), document.getElementById('main-content'));

    document.querySelector('#loginPage button').addEventListener('click', loginFunction);

    async function loginFunction(e) {
        e.preventDefault();

        const [email, password] = Array.from(document.querySelectorAll('#loginPage input'));

        if (email.value === '' || password.value === '') {
            window.alert('Invalid input!');
            return;
        };

        const input = {
            email: email.value.trim(),
            password: password.value.trim()
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
            updateAccessibility();
        });
    };
};