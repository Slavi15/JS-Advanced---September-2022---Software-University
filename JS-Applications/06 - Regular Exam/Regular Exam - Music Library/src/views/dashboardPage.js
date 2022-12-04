import { html, render } from '../library.js';

const template = () => html`
<!-- Dashboard page -->
<section id="dashboard">
  <h2>Albums</h2>

  <ul class="card-wrapper"></ul>

  <!-- Display an h2 if there are no posts -->
  <h2>There are no albums added yet.</h2>
</section>
`;

const newTemplate = (imageUrl, singer, album, sales, id) => html`
<!-- Display a li with information about every post (if any)-->
<li class="card">
  <img src="${imageUrl}" alt="travis" />
  <p>
    <strong>Singer/Band: </strong><span class="singer">${singer}</span>
  </p>
  <p>
    <strong>Album name: </strong><span class="album">${album}</span>
  </p>
  <p><strong>Sales:</strong><span class="sales">${sales}</span></p>
  <a class="details-btn" href="/details/${id}">Details</a>
</li>
`;

export async function dashboardPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    const section = document.querySelector('#dashboard');
    section.innerHTML = `<h2>Albums</h2>`;

    // const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const response = await fetch(`http://localhost:3030/data/albums?sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        const wrapper = document.createElement('ul');
        wrapper.classList.add('card-wrapper');

        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.imageUrl, item.singer, item.album, item.sales, item._id), div);
            wrapper.append(div);
        });

        section.append(wrapper);
    } else {
        const el = document.createElement('h2');
        el.textContent = 'There are no albums added yet.';
        section.append(el);
    };
};