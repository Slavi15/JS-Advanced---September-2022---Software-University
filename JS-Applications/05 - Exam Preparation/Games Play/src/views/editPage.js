import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = (title, category, maxLevel, imageUrl, summary) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="auth">
    <form id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/games/${id}`);
    const data = await response.json();

    render(template(data.title, data.category, data.maxLevel, data.imageUrl, data.summary), document.getElementsByTagName('main')[0]);

    document.querySelector('#edit-page .submit').addEventListener('click', function(e) {
        e.preventDefault();
        api.editFunction(data._id, data._ownerId, data._createdOn);
    });
};