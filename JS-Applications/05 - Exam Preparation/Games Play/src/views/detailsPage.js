import { html, render } from '../library.js';
import { page } from "../library.js";
import { editPage } from './editPage.js';
import { api } from '../api/api.js';

const template = (title, category, maxLevel, imageUrl, summary) => html`
<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${imageUrl}" />
            <h1>${title}</h1>
            <span class="levels">MaxLevel: ${maxLevel}</span>
            <p class="type">${category}</p>
        </div>

        <p class="text">${summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>

            <!-- Display paragraph: If there are no games in the database -->
            <p class="no-comment">No comments.</p>
        </div>

    </div>

</section>
`;

// Info section
// <!-- Bonus ( for Guests and Users ) -->
// <div class="details-comments">
//     <h2>Comments:</h2>
//     <ul>
//         <!-- list all comments for current game (If any) -->
//         <li class="comment">
//             <p>Content: I rate this one quite highly.</p>
//         </li>
//         <li class="comment">
//             <p>Content: The best game.</p>
//         </li>
//     </ul>
//     <!-- Display paragraph: If there are no games in the database -->
//     <p class="no-comment">No comments.</p>
// </div>

// <!-- Edit/Delete buttons ( Only for creator of this game )  -->
// <div class="buttons">
//     <a href="#" class="button">Edit</a>
//     <a href="#" class="button">Delete</a>
// </div>

// Comment
// <!-- Bonus -->
// <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
// <article class="create-comment">
//     <label>Add new comment:</label>
//     <form class="form">
//         <textarea name="comment" placeholder="Comment......"></textarea>
//         <input class="btn submit" type="submit" value="Add Comment">
//     </form>
// </article>

export async function detailsPage(data) {
    const id = data.params.id;
    const response = await fetch(`http://localhost:3030/data/games/${id}`);
    const resData = await response.json();

    render(template(resData.title, resData.category, resData.maxLevel, resData.imageUrl, resData.summary), document.getElementsByTagName('main')[0]);

    loadComments(id);

    const wrapper = document.querySelector('#game-details .info-section');
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    if (credentials) {
        if (credentials.id === resData._ownerId) {
            const div = document.createElement('div');
            div.classList.add('buttons');

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

            div.append(editBtn);
            div.append(deleteBtn);
            wrapper.append(div);
        } else {
          const section = document.querySelector('#game-details');

          const article = document.createElement('article');
          article.classList.add('create-comment');

          const label = document.createElement('label');
          label.textContent = 'Add new comment:';

          const form = document.createElement('form');
          form.classList.add('form');

          const textarea = document.createElement('textarea');
          textarea.name = 'comment';
          textarea.placeholder = 'Comment......';

          const input = document.createElement('input');
          input.classList.add('btn');
          input.classList.add('submit');
          input.type = 'submit';
          input.value = 'Add Comment';
          input.addEventListener('click', addComment);

          async function addComment(e) {
            e.preventDefault();

            const comment = document.querySelector('#game-details .create-comment textarea');
            if (comment.value === '') return;

            const input = {
              gameId: id,
              comment: comment.value.trim()
            };

            await fetch('http://localhost:3030/data/comments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Authorization': credentials.accessToken
              },
              body: JSON.stringify(input)
            });

            comment.value = '';
            loadComments(id);
          };

          form.append(textarea);
          form.append(input);

          article.append(label);
          article.append(form);
          section.append(article);
        };
    };
};

async function loadComments(id) {
  const detailsComments = document.querySelector('.details-comments');
  detailsComments.innerHTML = '<h2>Comments:</h2>';

  const comments = await fetch(`http://localhost:3030/data/comments?where=gameId%3D%22${id}%22`);
  const commentsRes = await comments.json();

  if (commentsRes.length > 0) {
    const ulWrapper = document.createElement('ul');
    commentsRes.forEach(comment => {
      const li = document.createElement('li');
      li.classList.add('comment');

      const p = document.createElement('p');
      p.textContent = `Content: ${comment.comment}`;

      li.append(p);
      ulWrapper.append(li);
    });
    detailsComments.append(ulWrapper);
  } else {
    const p = document.createElement('p');
    p.textContent = 'No comments.';
    p.classList.add('no-comment');
    detailsComments.append(p);
  };
};