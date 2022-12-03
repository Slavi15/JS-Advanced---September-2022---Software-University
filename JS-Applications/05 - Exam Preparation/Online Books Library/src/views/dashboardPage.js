import { html, render } from '../library.js';

const template = () => html`
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>

    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list"></ul>

    <!-- Display paragraph: If there are no books in the database -->
    <p class="no-books">No books in database!</p>
</section>
`;

const newTemplate = (title, type, imageUrl, id) => html`
<li class="otherBooks">
    <h3>${title}</h3>
    <p>Type: ${type}</p>
    <p class="img"><img src="${imageUrl}"></p>
    <a class="button" href="/details/${id}">Details</a>
</li>
`;

export async function dashboardPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    const section = document.querySelector('#dashboard-page');
    section.innerHTML = `<h1>Dashboard</h1>`;

    // const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const response = await fetch(`http://localhost:3030/data/books?sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        const wrapper = document.createElement('ul');
        wrapper.classList.add('other-books-list');

        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.title, item.type, item.imageUrl, item._id), div);
            wrapper.append(div);
        });

        section.append(wrapper);
    } else {
        const el = document.createElement('p');
        el.textContent = 'No books in database!';
        el.classList.add('no-books');
        section.append(el);
    };
};