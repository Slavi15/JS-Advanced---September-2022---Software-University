import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create-page" class="auth">
    <form id="create">
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>
`;

export function createPage() {
  render(template(), document.getElementsByTagName('main')[0]);

  document.querySelector('#create-page .btn').addEventListener('click', function(e) {
    e.preventDefault();
    api.createFunction();
  });
};