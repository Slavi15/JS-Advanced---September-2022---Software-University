import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Login Page (Only for Guest users) -->
<section id="login-page" class="auth">
    <form id="login">
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>
`;

export function loginPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    document.querySelector('#login-page .btn').addEventListener('click', function(e) {
        e.preventDefault();
        api.loginFunction();
    });
};