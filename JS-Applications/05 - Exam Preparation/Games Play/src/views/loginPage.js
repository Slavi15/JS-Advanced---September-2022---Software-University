import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="auth">
    <form id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>
`;

export function loginPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    document.querySelector('#login-page .submit').addEventListener('click', function(e) {
        e.preventDefault();
        api.loginFunction();
    });
};