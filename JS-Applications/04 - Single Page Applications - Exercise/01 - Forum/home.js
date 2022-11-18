import { showDetails } from "./details.js";

const URL = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const section = document.getElementById('homeView');
const main = document.getElementsByTagName('main')[0];
const [cancelButton, postButton] = Array.from(document.querySelectorAll('.new-topic-buttons button'));
section.remove();

postButton.addEventListener('click', postFunction);
cancelButton.addEventListener('click', cancelFunction);

export function showHome() {
    main.replaceChildren(section);
    fetchPosts();
};

async function postFunction(e) {
    e.preventDefault();

    const [title, username] = Array.from(document.querySelectorAll('#homeView input'));
    const content = document.querySelector('#homeView textarea');

    if (title.value === '' || username.value === '' || content.value === '') return;

    const now = new Date();
    const input = {
        title: title.value,
        username: username.value,
        content: content.value,
        date: now.toISOString()
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    });

    title.value = '';
    username.value = '';
    content.value = '';

    fetchPosts();
};

async function fetchPosts() {
    const topicTitle = document.querySelector('.topic-title');
    try {
        const response = await fetch(URL);
        const data = await response.json();

        const items = Object.entries(data).map(([key, value]) => {
            const topicContainer = createElement('div', null, 'topic-container');

            topicContainer.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a href="#" class="normal" id=${key}>
                        <h2>${value.title}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date: <time>${value.date}</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${value.username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            topicContainer.querySelector('a').addEventListener('click', showDetails);

            return topicContainer;
        });

        topicTitle.replaceChildren(...items);
    } catch (err) {
        console.log(err);
    };
};

async function cancelFunction(e) {
    e.preventDefault();

    const [title, username] = Array.from(document.querySelectorAll('#homeView input'));
    const content = document.querySelector('#homeView textarea');

    title.value = '';
    username.value = '';
    content.value = '';
};

function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
    return element;
};

// showDetails();