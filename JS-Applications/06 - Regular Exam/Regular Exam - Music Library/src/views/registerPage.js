import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="login-form">
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input type="password" name="password" id="register-password" placeholder="password" />
      <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>
`;

export function registerPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    document.querySelector('#register button').addEventListener('click', function(e) {
        e.preventDefault();
        api.registerFunction();
    });
};