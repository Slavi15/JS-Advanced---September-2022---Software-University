const section = document.getElementById('detailsView');
const main = document.getElementsByTagName('main')[0];
const postButton = document.querySelector('.answer-comment button');
section.remove();

const URL = 'http://localhost:3030/jsonstore/collections/myboard/comments';

postButton.addEventListener('click', postComments);

export function showDetails(e) {
    let id;
    if (e.target.tagName === 'H2') {
        id = e.target.parentElement.id;
    } else {
        id = e.target.id;
    };

    fetchPost(id);
    fetchComments();
    main.replaceChildren(section);
};

async function fetchPost(id) {
    const comment = section.querySelector('.comment');
    const h2 = section.querySelector('h2');
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
        const data = await response.json();

        h2.textContent = data.title;

        comment.id = id;
        comment.innerHTML = `
                <div class="header">
                    <img src="./static/profile.png" alt="avatar">
                    <p><span>${data.username}</span> posted on <time>${new Date(data.date).toISOString().replace('T', ' ').replace('Z', '')}</time></p>
                    
                    <p class="post-content">${data.content}</p>
                </div>`;
    } catch (err) {
        console.log(err);
    };
};

async function postComments(e) {
    e.preventDefault();

    const username = section.querySelector('input');
    const content = section.querySelector('textarea');

    if (username.value === '' || content.value === '') return;

    const now = new Date();
    const input = {
        text: content.value,
        username: username.value,
        postId: e.target.parentElement.parentElement.parentElement.parentElement.children[1].id,
        date: now.toLocaleString()
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
    .then(res => res.json())
    .then(data => {
        const comment = section.querySelector('.comment');

        const userComment = createElement('div');
        userComment.setAttribute('data-id', data.postId);
        userComment.id = 'user-comment';
    
        userComment.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${data.username}</strong> commented on <time>${data.date}</time></p>
                    <div class="post-content">
                        <p>${data.text}</p>
                    </div>
                </div>
            </div>`;

        comment.appendChild(userComment);
    });

    username.value = '';
    content.value = '';
};

async function fetchComments() {
    const comment = section.querySelector('.comment');
    try {
        const response = await fetch(URL);
        const data = await response.json();

        const items = Object.entries(data).map(([key, value]) => {
            const userComment = createElement('div');
            userComment.setAttribute('data-id', value.postId);
            userComment.id = 'user-comment';

            userComment.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${value.username}</strong> commented on <time>${value.date}</time></p>
                    <div class="post-content">
                        <p>${value.text}</p>
                    </div>
                </div>
            </div>`;

            return userComment;
        });

        const validated = items.filter(item => item.getAttribute('data-id') === comment.id);
        comment.append(...validated);
    } catch (err) {
        console.log(err);
    };
};

function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
    return element;
};