import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = (title, image, category, description, requirements, salary) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        value="${title}"
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        value="${image}"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        value="${category}"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50">${description}</textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50">${requirements}</textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        value="${salary}"
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/offers/${id}`);
    const data = await response.json();

    render(template(data.title, data.imageUrl, data.category, data.description, data.requirements, data.salary), document.getElementsByTagName('main')[0]);

    document.querySelector('#edit button').addEventListener('click', function(e) {
        e.preventDefault();
        api.editFunction(data._id, data._ownerId, data._createdOn);
    });
};