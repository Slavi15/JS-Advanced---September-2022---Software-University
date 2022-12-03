import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = (title, type, imageUrl, description) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="edit">
    <form id="edit-form">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="${type}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/books/${id}`);
    const data = await response.json();

    render(template(data.title, data.type, data.imageUrl, data.description), document.getElementsByTagName('main')[0]);

    document.querySelector('#edit-page .submit').addEventListener('click', function(e) {
        e.preventDefault();
        api.editFunction(data._id, data._ownerId, data._createdOn);
    });
};