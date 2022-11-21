import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = (imageUrl, brand, model, release, designer, value) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form class="edit-form">
      <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
        value="${brand}"
      />
      <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
        value="${model}"
      />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        value="${imageUrl}"
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
        value="${release}"
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        value="${designer}"
      />
      <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
        value="${value}"
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/shoes/${id}`);
    const data = await response.json();

    render(template(data.imageUrl, data.brand, data.model, data.release, data.designer, data.value), document.getElementsByTagName('main')[0]);

    document.querySelector('#edit button').addEventListener('click', function(e) {
        e.preventDefault();
        api.editFunction(data._id, data._ownerId, data._createdOn);
    });
};