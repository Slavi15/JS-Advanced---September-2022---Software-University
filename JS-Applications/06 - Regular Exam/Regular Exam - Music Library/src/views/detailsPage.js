import { html, render } from '../library.js';
import { page } from "../library.js";
import { editPage } from './editPage.js';
import { api } from '../api/api.js';

const template = (singer, album, imageUrl, release, label, sales, likes) => html`
<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src="${imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likes}</span></div>


  </div>
</section>
`;

// <!--Edit and Delete are only for creator-->
// <div id="action-buttons">
//   <a href="" id="like-btn">Like</a>
//   <a href="" id="edit-btn">Edit</a>
//   <a href="" id="delete-btn">Delete</a>
// </div>

export async function detailsPage(data) {
  const id = data.params.id;
  const response = await fetch(`http://localhost:3030/data/albums/${id}`);
  const resData = await response.json();

  const likesRequest = await fetch(`http://localhost:3030/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
  const totalLikes = await likesRequest.json();

  render(template(resData.singer, resData.album, resData.imageUrl, resData.release, resData.label, resData.sales, totalLikes), document.getElementsByTagName('main')[0]);

  const wrapper = document.querySelector('#details #details-wrapper');
  const credentials = JSON.parse(sessionStorage.getItem('credentials'));

  if (credentials) {
    const div = document.createElement('div');
    div.id = 'action-buttons';

    if (credentials.id === resData._ownerId) {
      const editBtn = document.createElement('a');
      editBtn.href = 'javascript:void(0)';
      editBtn.id = 'edit-btn';
      editBtn.textContent = 'Edit';

      const deleteBtn = document.createElement('a');
      deleteBtn.href = 'javascript:void(0)';
      deleteBtn.id = 'delete-btn';
      deleteBtn.textContent = 'Delete';

      editBtn.addEventListener('click', () => editPage(id));
      deleteBtn.addEventListener('click', () => {
        if (confirm('DELETE?')) {
          api.deleteFunction(id);
        };
      });

      div.append(editBtn);
      div.append(deleteBtn);
    } else {
      const response = await fetch(`http://localhost:3030/data/likes?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${credentials.id}%22&count`);
      const donations = await response.json();

      if (donations === 0) {
        const likeButton = document.createElement('a');
        likeButton.href = 'javascript:void(0)';
        likeButton.id = 'like-btn';
        likeButton.textContent = 'Like';

        likeButton.addEventListener('click', likeFunction);

        async function likeFunction() {
          const input = {
            albumId: id
          };

          await fetch(`http://localhost:3030/data/likes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': credentials.accessToken
            },
            body: JSON.stringify(input)
          });

          likeButton.style.display = 'none';
          page.redirect(`/details/${id}`);
        };

        div.append(likeButton);
      };
    };
    
    wrapper.append(div);
  };
};