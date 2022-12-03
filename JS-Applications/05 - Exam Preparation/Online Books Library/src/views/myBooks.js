import { html, render } from '../library.js';

const template = () => html`
<!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list"></ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
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

export async function myBooks() {
    render(template(), document.getElementsByTagName('main')[0]);

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const section = document.querySelector('#my-books-page');
    section.innerHTML = '<h1>My Books</h1>';

    const response = await fetch(`http://localhost:3030/data/books?where=_ownerId%3D%22${credentials.id}%22&sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        const wrapper = document.createElement('ul');
        wrapper.classList.add('my-books-list');

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