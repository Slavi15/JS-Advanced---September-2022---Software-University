import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = (title, description, imageUrl, address, phone) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit-page" class="auth">
    <form id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="${title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value="${description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value="${imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value="${address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value="${phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/posts/${id}`);
    const data = await response.json();

    render(template(data.title, data.description, data.imageUrl, data.address, data.phone), document.getElementsByTagName('main')[0]);

    document.querySelector('#edit-page .btn').addEventListener('click', function(e) {
        e.preventDefault();
        api.editFunction(data._id, data._ownerId, data._createdOn);
    });
};