import { html, render } from '../library.js';

const template = () => html`
        <!-- Dashboard page -->
        <section id="dashboard">
          <h2>Collectibles</h2>

          <!-- Display an h2 if there are no posts -->
          <h2>There are no items added yet.</h2>
        </section>
`;

const newTemplate = (imageUrl, brand, model, value, id) => html`
<li class="card">
<img src="${imageUrl}" alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${model}</span>
</p>
<p><strong>Value:</strong><span class="value">${value}</span>$</p>
<a class="details-btn" href="/details/${id}">Details</a>
</li>
`;

export async function dashboardPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    const section = document.querySelector('#dashboard');
    section.innerHTML = `<h2>Collectibles</h2>`;

    // const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const response = await fetch(`http://localhost:3030/data/shoes?sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        const ulWrapper = document.createElement('ul');
        ulWrapper.classList.add('card-wrapper');

        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.imageUrl, item.brand, item.model, item.value, item._id), div);
            ulWrapper.append(div);
        });

        section.append(ulWrapper);
    } else {
        const el = document.createElement('h2');
        el.textContent = 'There are no items added yet.';
        section.append(el);
    };
};