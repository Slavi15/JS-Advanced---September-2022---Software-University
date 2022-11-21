import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = () => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
  <div class="form">
    <h2>Add item</h2>
    <form class="create-form">
      <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
      />
      <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
      />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
      />
      <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
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