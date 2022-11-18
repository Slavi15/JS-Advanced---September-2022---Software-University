window.onload = function() {
    loadData();
};

const URL = 'http://localhost:3030/jsonstore/collections/students';

const submitButton = document.getElementsByTagName('button')[0];

submitButton.addEventListener('click', submitFunction);

async function submitFunction(e) {
    e.preventDefault();
    const [firstName, lastName, facultyNumber, grade] = Array.from(document.querySelectorAll('input[type=text]'));

    if (firstName.value === '' || lastName.value === '' || facultyNumber.value === '' || grade.value === '') return;

    const input = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: grade.value
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    });

    firstName.value = '';
    lastName.value = '';
    facultyNumber.value = '';
    grade.value = '';

    loadData();
};

async function loadData() {
    const tBody = document.getElementsByTagName('tbody')[0];

    try {
        const response = await fetch(URL);
        const data = await response.json();
    
        const items = Object.entries(data).map(([key, value]) => {
            const trTag = createElement('tr');
    
            trTag.appendChild(createElement('td', value.firstName));
            trTag.appendChild(createElement('td', value.lastName));
            trTag.appendChild(createElement('td', value.facultyNumber));
            trTag.appendChild(createElement('td', value.grade));
    
            return trTag;
        });
    
        tBody.replaceChildren(...items);
    } catch (err) {
        console.log(err);
    };
};

function createElement(tag, text) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    return element;
};