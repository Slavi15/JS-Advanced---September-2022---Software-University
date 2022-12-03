import { html, render } from '../library.js';
import { page } from "../library.js";
import { editPage } from './editPage.js';
import { api } from '../api/api.js';

const template = (title, type, imageUrl, description, likes) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${title}</h3>
        <p class="type">Type: ${type}</p>
        <p class="img"><img src="${imageUrl}"></p>

        <!-- actions -->
        <div class="actions">
          <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: ${likes}</span>
          </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${description}</p>
    </div>
</section>
`;

{/* <div class="actions">
<!-- Edit/Delete buttons ( Only for creator of this book )  -->
<a class="button" href="#">Edit</a>
<a class="button" href="#">Delete</a>

<!-- Bonus -->
<!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
<a class="button" href="#">Like</a>

<!-- ( for Guests and Users )  -->
<div class="likes">
    <img class="hearts" src="/images/heart.png">
    <span id="total-likes">Likes: 0</span>
</div>
<!-- Bonus -->
</div> */}

export async function detailsPage(data) {
  const id = data.params.id;
  const response = await fetch(`http://localhost:3030/data/books/${id}`);
  const resData = await response.json();

  const likesRequest = await fetch(`http://localhost:3030/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`);
  const totalLikes = await likesRequest.json();

  render(template(resData.title, resData.type, resData.imageUrl, resData.description, totalLikes), document.getElementsByTagName('main')[0]);

  const wrapper = document.querySelector('#details-page .book-information');
  const credentials = JSON.parse(sessionStorage.getItem('credentials'));

  if (credentials) {
    const div = document.querySelector('.actions');

    if (credentials.id === resData._ownerId) {
      const editBtn = document.createElement('a');
      editBtn.href = 'javascript:void(0)';
      editBtn.classList.add('button');
      editBtn.textContent = 'Edit';

      const deleteBtn = document.createElement('a');
      deleteBtn.href = 'javascript:void(0)';
      deleteBtn.classList.add('button');
      deleteBtn.textContent = 'Delete';

      editBtn.addEventListener('click', () => editPage(id));
      deleteBtn.addEventListener('click', () => {
        if (confirm('DELETE?')) {
          api.deleteFunction(id);
        };
      });

      div.prepend(deleteBtn);
      div.prepend(editBtn);
    } else {
      const response = await fetch(`http://localhost:3030/data/likes?where=bookId%3D%22${id}%22%20and%20_ownerId%3D%22${credentials.id}%22&count`);
      const donations = await response.json();

      if (donations === 0) {
        const likeButton = document.createElement('a');
        likeButton.href = 'javascript:void(0)';
        likeButton.classList.add('button');
        likeButton.textContent = 'Like';

        likeButton.addEventListener('click', likeFunction);

        async function likeFunction() {
          const input = {
            bookId: id
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

        div.prepend(likeButton);
      };
    };
    
    wrapper.append(div);
  };
};