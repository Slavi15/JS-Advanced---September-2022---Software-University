import { html, render } from '../library.js';

const template = () => html`
<!-- Catalogue -->
<section id="catalog-page">
    <h1>All Games</h1>

    <!-- Display paragraph: If there is no games  -->
    <h3 class="no-articles">No articles yet</h3>
</section>
`;

const newTemplate = (imageUrl, category, title, id) => html`
<!-- Display div: with information about every game (if any) -->
<div class="allGames">
    <div class="allGames-info">
        <img src="${imageUrl}">
        <h6>${category}</h6>
        <h2>${title}</h2>
        <a href="/details/${id}" class="details-button">Details</a>
    </div>
</div>
`;

export async function dashboardPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    const section = document.querySelector('#catalog-page');
    section.innerHTML = `<h1>All Games</h1>`;

    // const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const response = await fetch(`http://localhost:3030/data/games?sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.imageUrl, item.category, item.title, item._id), div);
            section.append(div);
        });
    } else {
        const el = document.createElement('h3');
        el.textContent = 'No articles yet';
        el.classList.add('no-articles');
        section.append(el);
    };
};