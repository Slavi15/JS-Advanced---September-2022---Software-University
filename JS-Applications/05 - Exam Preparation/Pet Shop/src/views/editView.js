import { html, render } from '../library.js';
import { page } from "../library.js";

const template = (image, name, breed, age, weight) => html`
<!--Edit Page-->
<section id="editPage">
    <form class="editForm">
        <img src="${image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="${name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="${breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="${age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="${weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value="${image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`;

export async function editPage(petId) {
    const response = await fetch(`http://localhost:3030/data/pets/${petId}`);
    const data = await response.json();

    render(template(data.image, data.name, data.breed, data.age, data.weight), document.getElementById('content'));

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));
    document.querySelector('.editForm .btn').addEventListener('click', editFunction);

    async function editFunction(e) {
        e.preventDefault();

        const [name, breed, age, weight, image] = Array.from(document.querySelectorAll('.editForm input'));

        if (name.value === '' || breed.value === '' || age.value === '' || weight.value === '' || image.value === '') return;

        const input = {
            name: name.value,
            breed: breed.value,
            age: age.value,
            weight: weight.value,
            image: image.value,
            _id: data._id,
            _ownerId: data._ownerId,
            _createdOn: data._createdOn
        };

        await fetch(`http://localhost:3030/data/pets/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': credentials.accessToken
            },
            body: JSON.stringify(input)
        });

        page.redirect(`/pet/details/${petId}`);
    };
};