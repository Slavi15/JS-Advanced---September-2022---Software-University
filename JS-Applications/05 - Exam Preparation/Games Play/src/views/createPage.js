import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Create Page ( Only for logged-in users ) -->
<section id="create-page" class="auth">
    <form id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>
`;

export function createPage() {
  render(template(), document.getElementsByTagName('main')[0]);

  document.querySelector('#create-page .submit').addEventListener('click', function(e) {
    e.preventDefault();
    api.createFunction();
  });
};