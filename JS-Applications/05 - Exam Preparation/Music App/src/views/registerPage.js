import { html, render, page } from '../library.js';

const template = () => html`
<!--Registration-->
<section id="registerPage">
    <form>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

export function registerPage() {
    render(template(), document.getElementById('main-content'));

    document.querySelector('#registerPage button').addEventListener('click', registerFunction);

    async function registerFunction(e) {
        e.preventDefault();

        const [email, password, rePass] = Array.from(document.querySelectorAll('#registerPage input'));

        if (email.value === '' || password.value === '' || rePass.value === '' || password.value !== rePass.value) {
            window.alert('Invalid input!');
            return;
        };

        const input = {
            email: email.value.trim(),
            password: password.value.trim()
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
            updateAccessibility();
        });
    };
};