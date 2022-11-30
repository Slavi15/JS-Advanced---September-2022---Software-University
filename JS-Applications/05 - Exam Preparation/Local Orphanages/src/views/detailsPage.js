import { html, render } from '../library.js';
import { page } from "../library.js";
import { editPage } from './editPage.js';
import { api } from '../api/api.js';

const template = (imageUrl, title, description, address, phone, donations) => html`
<!-- Details Page -->
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${imageUrl}" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${title}</h2>
                <p class="post-description">Description: ${description}</p>
                <p class="post-address">Address: ${address}</p>
                <p class="post-number">Phone number: ${phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

            </div>
        </div>
    </div>
</section>
`;

// <!--Edit and Delete are only for creator-->
// <div class="btns">
//     <a href="#" class="edit-btn btn">Edit</a>
//     <a href="#" class="delete-btn btn">Delete</a>

//     <!--Bonus - Only for logged-in users ( not authors )-->
//     <a href="#" class="donate-btn btn">Donate</a>
// </div>

export async function detailsPage(data) {
  const id = data.params.id;
  const response = await fetch(`http://localhost:3030/data/posts/${id}`);
  const resData = await response.json();

  const donationsRequest = await fetch(`http://localhost:3030/data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`);
  const totalDonations = await donationsRequest.json();

  render(template(resData.imageUrl, resData.title, resData.description, resData.address, resData.phone, totalDonations), document.getElementsByTagName('main')[0]);

  const wrapper = document.querySelector('#details-page .info');
  const credentials = JSON.parse(sessionStorage.getItem('credentials'));

  if (credentials) {
    const div = document.createElement('div');
    div.classList.add('btns');

    if (credentials.id === resData._ownerId) {
      const editBtn = document.createElement('a');
      editBtn.href = 'javascript:void(0)';
      editBtn.classList.add('btn');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';

      const deleteBtn = document.createElement('a');
      deleteBtn.href = 'javascript:void(0)';
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete-btn');
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
      const response = await fetch(`http://localhost:3030/data/donations?where=postId%3D%22${id}%22%20and%20_ownerId%3D%22${credentials.id}%22&count`);
      const donations = await response.json();

      if (donations === 0) {
        const donateButton = document.createElement('a');
        donateButton.href = 'javascript:void(0)';
        donateButton.classList.add('btn');
        donateButton.classList.add('donate-btn');
        donateButton.textContent = 'Donate';

        donateButton.addEventListener('click', donateFunction);

        async function donateFunction() {
          const input = {
            postId: id
          };

          await fetch(`http://localhost:3030/data/donations`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': credentials.accessToken
            },
            body: JSON.stringify(input)
          });

          donateButton.style.display = 'none';
          page.redirect(`/details/${id}`);
        };

        div.append(donateButton);
      };
    };
    
    wrapper.append(div);
  };
};