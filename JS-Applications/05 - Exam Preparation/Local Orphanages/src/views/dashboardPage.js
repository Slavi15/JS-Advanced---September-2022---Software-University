import { html, render } from '../library.js';

const template = () => html`
<!-- Dashboard -->
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="all-posts"></div>

    <!-- Display an h1 if there are no posts -->
    <h1 class="title no-posts-title">No posts yet!</h1>
</section>
`;

const newTemplate = (title, imageUrl, id) => html`
<div class="post">
    <h2 class="post-title">${title}</h2>
    <img class="post-image" src="${imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${id}" class="details-btn btn">Details</a>
    </div>
</div>
`;

export async function dashboardPage() {
    render(template(), document.getElementsByTagName('main')[0]);

    const section = document.querySelector('#dashboard-page');
    section.innerHTML = `<h1 class="title">All Posts</h1>`;

    // const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const response = await fetch(`http://localhost:3030/data/posts?sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('all-posts');

        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.title, item.imageUrl, item._id), div);
            wrapper.append(div);
        });

        section.append(wrapper);
    } else {
        const el = document.createElement('h1');
        el.textContent = 'No posts yet!';
        el.classList.add('title');
        el.classList.add('no-posts-title');
        section.append(el);
    };
};