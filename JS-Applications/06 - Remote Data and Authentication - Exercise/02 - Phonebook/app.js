function attachEvents() {
    const [loadButton, createButton] = Array.from(document.getElementsByTagName('button'));

    const URL = 'http://localhost:3030/jsonstore/phonebook';

    loadButton.addEventListener('click', loadFunction);
    createButton.addEventListener('click', createFunction);

    async function loadFunction() {
        const phonebook = document.getElementById('phonebook');

        try {
            const response = await fetch(URL);
            const data = await response.json();

            const items = Object.entries(data).map(([key, value]) => {
                const li = document.createElement('li');
                li.id = value._id;
                li.textContent = `${value.person}: ${value.phone}`;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', deleteFunction);

                li.appendChild(deleteBtn);

                return li;
            });

            phonebook.replaceChildren(...items);
        } catch (err) {
            console.log(err);
        };
    };

    async function createFunction() {
        const [person, phone] = Array.from(document.querySelectorAll('input[type=text]'));

        const input = {
            person: person.value,
            phone: phone.value
        };

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });

        person.value = '';
        phone.value = '';

        loadFunction();
    };

    async function deleteFunction(e) {
        let id = e.target.parentElement.id;

        await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });

        e.target.parentElement.remove();
    };
};

attachEvents();