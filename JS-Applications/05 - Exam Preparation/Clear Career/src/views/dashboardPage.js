import { html, render } from '../library.js';

const template = () => html`
<!-- Dashboard page -->
<section id="dashboard">
  <h2>Job Offers</h2>

  <!-- Display an h2 if there are no posts -->
  <h2>No offers yet.</h2>
</section>
`;

const newTemplate = (imageUrl, title, salary, id) => html`
<div class="offer">
<img src="${imageUrl}" alt="${imageUrl}" />
<p>
    <strong>Title: </strong>
    <span class="title">${title}</span>
</p>
<p>
    <strong>Salary:</strong>
    <span class="salary">${salary}</span>
</p>
<a class="details-btn" href="/details/${id}">Details</a>
</div>
`;

export async function dashboardPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    const section = document.querySelector('#dashboard');
    section.innerHTML = `<h2>Job Offers</h2>`;

    // const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const response = await fetch(`http://localhost:3030/data/offers?sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.imageUrl, item.title, item.salary, item._id), div);
            section.append(div);
        });
    } else {
        const el = document.createElement('h2');
        el.textContent = 'No offers yet.';
        section.append(el);
    };
};