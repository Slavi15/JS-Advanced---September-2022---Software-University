import { html, render } from '../library.js';

const template = () => html`
<!-- Search Page (Only for logged-in users) -->
<section id="search">
  <h2>Search by Brand</h2>

  <form class="search-wrapper cf">
    <input
      id="#search-input"
      type="text"
      name="search"
      placeholder="Search here..."
      required
    />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container"></div>
</section>
`;

const newTemplate = (imageUrl, brand, model, value, id) => html`
<!-- Display a li with information about every post (if any)-->
<li class="card">
  <img src="${imageUrl}" alt="travis" />
  <p>
    <strong>Brand: </strong><span class="brand">${brand}</span>
  </p>
  <p>
    <strong>Model: </strong>
    <span class="model">${model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${value}</span>$</p>
  <a class="details-btn" href="/details/${id}">Details</a>
</li>
`;

export async function searchPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    document.querySelector('#search button').addEventListener('click', searchFunction);

    async function searchFunction(e) {
        e.preventDefault();
    
        const searchQuery = document.querySelector('#search input');
        if (searchQuery.value === '') return;
    
        const response = await fetch(`http://localhost:3030/data/shoes?where=brand%20LIKE%20%22${searchQuery.value}%22`);
        const data = await response.json();
    
        const credentials = JSON.parse(sessionStorage.getItem('credentials'));
        const searchContainer = document.querySelector('#search #search-container');
    
        if (data.length > 0) {
            const div = document.createElement('div');
    
            data.forEach(item => {
                const ulWrapper = document.createElement('ul');
                ulWrapper.classList.add('card-wrapper');
                render(newTemplate(item.imageUrl, item.brand, item.model, item.value, item._id), ulWrapper);
                div.append(ulWrapper);
            });
    
            searchContainer.append(div);

            if (!credentials) {
                document.querySelectorAll('#search-container .details-btn').forEach(item => item.style.display = 'none');
            };
        } else {
            const tag = document.createElement('h2');
            tag.textContent = 'There are no results found.';
            searchContainer.append(tag);
        };
    };
};