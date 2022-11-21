import { html, render } from '../library.js';
import { editPage } from './editPage.js';
import { api } from '../api/api.js';

const template = (imageUrl, brand, model, release, designer, value) => html`
<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src="${imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${brand}</span></p>
      <p>
        Model: <span id="details-model">${model}</span>
      </p>
      <p>Release date: <span id="details-release">${release}</span></p>
      <p>Designer: <span id="details-designer">${designer}</span></p>
      <p>Value: <span id="details-value">${value}</span></p>
    </div>


  </div>
</section>
`;

// <!--Edit and Delete are only for creator-->
// <div id="action-buttons">
//   <a href="" id="edit-btn">Edit</a>
//   <a href="" id="delete-btn">Delete</a>
// </div>

export async function detailsPage(data) {
    const id = data.params.id;
    const response = await fetch(`http://localhost:3030/data/shoes/${id}`);
    const resData = await response.json();

    render(template(resData.imageUrl, resData.brand, resData.model, resData.release, resData.designer, resData.value), document.getElementsByTagName('main')[0]);

    const wrapper = document.querySelector('#details #details-wrapper');
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    if (credentials) {
        if (credentials.id === resData._ownerId) {
            const div = document.createElement('div');
            div.id = 'action-buttons';

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
            wrapper.append(div);
        };
    };
};