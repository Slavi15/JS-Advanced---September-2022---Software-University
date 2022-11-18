import  { page } from '../library.js';
import { html, render } from '../library.js';
import { update } from "../views.js";

const template = () => html`
<!--Create Page-->
<section id="createPage">
    <form class="createForm">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>
`;

export function createView() {
    render(template(), document.getElementById('content'));

    document.querySelector('.createForm .btn').addEventListener('click', createFunction);

    async function createFunction(e) {
        e.preventDefault();

        const credentials = JSON.parse(sessionStorage.getItem('credentials'));
        const [name, breed, age, weight, image] = Array.from(document.querySelectorAll('.createForm input'));

        if (name.value === '' || breed.value === '' || age.value === '' || weight.value === '' || image.value === '') return;

        const input = {
            name: name.value,
            breed: breed.value,
            age: age.value,
            weight: weight.value,
            image: image.value
        };

        await fetch('http://localhost:3030/data/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': credentials.accessToken
            },
            body: JSON.stringify(input)
        });

        update();
        page.redirect('/');
    };
};