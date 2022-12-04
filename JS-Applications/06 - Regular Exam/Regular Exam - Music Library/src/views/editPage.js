import { html, render } from '../library.js';
import { api } from '../api/api.js';

const template = (singer, album, imageUrl, release, label, sales) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form class="edit-form">
      <input type="text" value="${singer}" name="singer" id="album-singer" placeholder="Singer/Band" />
      <input type="text" value="${album}" name="album" id="album-album" placeholder="Album" />
      <input type="text" value="${imageUrl}" name="imageUrl" id="album-img" placeholder="Image url" />
      <input type="text" value="${release}" name="release" id="album-release" placeholder="Release date" />
      <input type="text" value="${label}" name="label" id="album-label" placeholder="Label" />
      <input type="text" value="${sales}" name="sales" id="album-sales" placeholder="Sales" />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/albums/${id}`);
    const data = await response.json();

    render(template(data.singer, data.album, data.imageUrl, data.release, data.label, data.sales), document.getElementsByTagName('main')[0]);

    document.querySelector('#edit button').addEventListener('click', function(e) {
        e.preventDefault();
        api.editFunction(data._id, data._ownerId, data._createdOn);
    });
};