import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
  <div class="form">
    <h2>Create Offer</h2>
    <form class="create-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`;

export function createPage() {
  render(template(), document.getElementsByTagName('main')[0]);

  document.querySelector('#create button').addEventListener('click', function(e) {
    e.preventDefault();
    api.createFunction();
  });
};