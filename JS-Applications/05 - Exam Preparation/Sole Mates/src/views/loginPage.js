import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Login Page (Only for Guest users) -->
<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>
`;

export function loginPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    document.querySelector('#login button').addEventListener('click', function(e) {
        e.preventDefault();
        api.loginFunction();
    });
};