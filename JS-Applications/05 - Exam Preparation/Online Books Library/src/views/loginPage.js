import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="login">
    <form id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
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