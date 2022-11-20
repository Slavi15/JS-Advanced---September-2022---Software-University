import { html, render } from '../library.js';
import { editPage } from './editPage.js';
import { api } from '../api/api.js';

const template = (image, title, category, salary, description, requirements, applications) => html`
<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${image}" alt="example1" />
    <p id="details-title">${title}</p>
    <p id="details-category">
      Category: <span id="categories">${category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${applications}</strong></p>


  </div>
</section>
`;

// <!--Edit and Delete are only for creator-->
// <div id="action-buttons">
//   <a href="" id="edit-btn">Edit</a>
//   <a href="" id="delete-btn">Delete</a>

//   <!--Bonus - Only for logged-in users ( not authors )-->
//   <a href="" id="apply-btn">Apply</a>
// </div>

export async function detailsPage(data) {
    const id = data.params.id;
    const response = await fetch(`http://localhost:3030/data/offers/${id}`);
    const resData = await response.json();

    const applicationReq = await fetch(`http://localhost:3030/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`);
    const totalApplications = await applicationReq.json();

    render(template(resData.image, resData.title, resData.category, resData.salary, resData.description, resData.requirements, totalApplications), document.getElementsByTagName('main')[0]);

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
        } else {
            const res = await fetch(`http://localhost:3030/data/applications?where=offerId%3D%22${resData._id}%22%20and%20_ownerId%3D%22${credentials.id}%22&count`)
            const applicationsCount = await res.json();

            if (applicationsCount === 0) {
                const div = document.createElement('div');
                div.id = 'action-buttons';

                const applyBtn = document.createElement('a');
                applyBtn.href = 'javascript:void(0)';
                applyBtn.id = 'apply-btn';
                applyBtn.textContent = 'Apply';
    
                applyBtn.addEventListener('click', () => { 
                    api.addApplication(id);
                    applyBtn.style.display = 'none';
                });
    
                div.append(applyBtn);
                wrapper.append(div);
            };
        };
    };
};