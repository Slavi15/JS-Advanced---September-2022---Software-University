document.querySelectorAll('a').forEach(item => item.classList.remove('active'));
document.getElementById('home').classList.add('active');

const URL = 'http://localhost:3030/data/catches';

const loadButton = document.getElementsByClassName('load')[0];
const addButton = document.getElementsByClassName('add')[0];
const logoutButton = document.getElementById('logout');

window.addEventListener('DOMContentLoaded', onloadFunction);

loadButton.addEventListener('click', loadFunction);
addButton.addEventListener('click', addFunction);
logoutButton.addEventListener('click', logoutFunction);

function onloadFunction() {
    const credentials = sessionStorage.getItem('credentials');

    if (JSON.parse(credentials)) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('.email span').textContent = JSON.parse(credentials).email;
        addButton.disabled = false;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
        document.querySelector('.email span').textContent = 'guest';
        addButton.disabled = true;
    };
};

async function loadFunction() {
    const credentials = sessionStorage.getItem('credentials');
    const catches = document.getElementById('catches');

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const items = Object.entries(data).map(([key, value]) => {
            const catchContainer = createElement('div', null, 'catch');

            catchContainer.appendChild(createElement('label', 'Angler'));
            const inputOne = createElement('input', null, 'angler');
            inputOne.type = 'text';
            inputOne.value = value.angler;
            catchContainer.appendChild(inputOne);

            catchContainer.appendChild(createElement('label', 'Weight'));
            const inputTwo = createElement('input', null, 'weight');
            inputTwo.type = 'text';
            inputTwo.value = value.weight;
            catchContainer.appendChild(inputTwo);

            catchContainer.appendChild(createElement('label', 'Species'));
            const inputThree = createElement('input', null, 'species');
            inputThree.type = 'text';
            inputThree.value = value.species;
            catchContainer.appendChild(inputThree);

            catchContainer.appendChild(createElement('label', 'Location'));
            const inputFour = createElement('input', null, 'location');
            inputFour.type = 'text';
            inputFour.value = value.location;
            catchContainer.appendChild(inputFour);

            catchContainer.appendChild(createElement('label', 'Bait'));
            const inputFive = createElement('input', null, 'bait');
            inputFive.type = 'text';
            inputFive.value = value.bait;
            catchContainer.appendChild(inputFive);

            catchContainer.appendChild(createElement('label', 'Capture Time'));
            const inputSix = createElement('input', null, 'captureTime');
            inputSix.type = 'number';
            inputSix.value = value.captureTime;
            catchContainer.appendChild(inputSix);

            const updateButton = createElement('button', 'Update', 'update');
            updateButton.setAttribute('data-id', value._id);
            JSON.parse(credentials) && JSON.parse(credentials).id === value._ownerId ? updateButton.disabled = false : updateButton.disabled = true;
            updateButton.addEventListener('click', updateData);

            async function updateData(e) {
                const input = {
                    angler: e.target.parentElement.children[1].value,
                    weight: e.target.parentElement.children[3].value,
                    species: e.target.parentElement.children[5].value,
                    location: e.target.parentElement.children[7].value,
                    bait: e.target.parentElement.children[9].value,
                    captureTime: e.target.parentElement.children[11].value
                };

                await fetch(`${URL}/${value._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': JSON.parse(credentials).accessToken
                    },
                    body: JSON.stringify(input)
                });

                loadFunction();
            };

            const deleteButton = createElement('button', 'Delete', 'delete');
            deleteButton.setAttribute('data-id', value._id);
            JSON.parse(credentials) && JSON.parse(credentials).id === value._ownerId ? deleteButton.disabled = false : deleteButton.disabled = true;
            deleteButton.addEventListener('click', deleteFunction);

            async function deleteFunction() {
                await fetch(`${URL}/${value._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': JSON.parse(credentials).accessToken
                    }
                });

                loadFunction();
            };

            catchContainer.appendChild(updateButton);
            catchContainer.appendChild(deleteButton);

            return catchContainer;
        });

        catches.replaceChildren(...items);
    } catch (err) {
        console.log(err);
    };
};

async function addFunction(e) {
    e.preventDefault();
    const credentials = sessionStorage.getItem('credentials');
    const [angler, weight, species, location, bait, captureTime] = Array.from(document.querySelectorAll('#addForm fieldset input'));

    if (angler.value === '' || weight.value === '' || species.value === '' || location.value === '' || bait.value === '' || captureTime.value === '') return;

    const input = {
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(credentials).accessToken
        },
        body: JSON.stringify(input)
    });

    loadFunction();
};

async function logoutFunction() {
    const credentials = sessionStorage.getItem('credentials');
    
    await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(credentials).accessToken
        }
    });

    sessionStorage.clear();
    
    window.location.href = './index.html';
};

function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
    return element;
};