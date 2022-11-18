const URL = 'http://localhost:3030/jsonstore/collections/books';

const loadButton = document.getElementById('loadBooks');
const form = document.querySelector('form');
const submitButton = document.querySelector('form button');

loadButton.addEventListener('click', loadFunction);
submitButton.addEventListener('click', submitFunction);

async function loadFunction() {
    const tBody = document.getElementsByTagName('tbody')[0];

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const books = Object.entries(data).map(([key, value]) => {
            const tr = createElement('tr');

            tr.appendChild(createElement('td', value.title));
            tr.appendChild(createElement('td', value.author));
            const btnContainer = createElement('td');

            const editButton = createElement('button', 'Edit');
            const deleteButton = createElement('button', 'Delete');

            editButton.addEventListener('click', function() {
                const [title, author] = Array.from(document.querySelectorAll('input[type=text]'));

                document.getElementsByTagName('h3')[0].textContent = 'Edit FORM';
                title.value = this.parentElement.parentElement.children[0].textContent;
                author.value = this.parentElement.parentElement.children[1].textContent;

                const saveButton = createElement('button', 'Save');
                saveButton.addEventListener('click', updateFunction);

                form.replaceChild(saveButton, submitButton);

                async function updateFunction(e) {
                    e.preventDefault();
                    
                    if (author.value === '' || title.value === '') return;

                    const input = {
                        author: author.value,
                        title: title.value
                    };

                    await fetch(`${URL}/${key}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(input)
                    });

                    author.value = '';
                    title.value = '';

                    document.getElementsByTagName('h3')[0].textContent = 'FORM';
                    form.replaceChild(submitButton, saveButton);

                    loadFunction();
                };
            });

            deleteButton.addEventListener('click', deleteFunction);

            async function deleteFunction() {
                await fetch(`${URL}/${key}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                loadFunction();
            };

            btnContainer.appendChild(editButton);
            btnContainer.appendChild(deleteButton);
            tr.appendChild(btnContainer);

            return tr;
        });

        tBody.replaceChildren(...books);
    } catch (err) {
        console.log(err);
    };
};

async function submitFunction(e) {
    e.preventDefault();
    const [title, author] = Array.from(document.querySelectorAll('input[type=text]'));
    
    if (title.value === '' || author.value === '') return;

    const input = {
        author: author.value,
        title: title.value
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    });

    title.value = '';
    author.value = '';

    loadFunction();
};

function createElement(tag, text) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    return element;
};