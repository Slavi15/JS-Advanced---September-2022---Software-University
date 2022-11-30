import { html, render } from '../library.js';

const template = () => html`
<!-- My Posts -->
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts"></div>

    <!-- Display an h1 if there are no posts -->
    <h1 class="title no-posts-title">You have no posts yet!</h1>
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

export async function myPosts() {
    render(template(), document.getElementsByTagName('main')[0]);

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const section = document.querySelector('#my-posts-page');
    section.innerHTML = '<h1 class="title">My Posts</h1>';

    const response = await fetch(`http://localhost:3030/data/posts?where=_ownerId%3D%22${credentials.id}%22&sortBy=_createdOn%20desc`);
    const data = await response.json();

    if (data.length > 0) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('my-posts');

        data.forEach(item => {
            const div = document.createElement('div');
            render(newTemplate(item.title, item.imageUrl, item._id), div);
            wrapper.append(div);
        });

        section.append(wrapper);
    } else {
        const el = document.createElement('h1');
        el.textContent = 'You have no posts yet!';
        el.classList.add('title');
        el.classList.add('no-posts-title');
        section.append(el);
    };
};