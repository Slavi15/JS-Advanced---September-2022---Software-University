import { html, render } from '../library.js';

const template = () => html`
<!--Dashboard-->
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        <!--If there is no pets in dashboard-->
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>
    </div>
</section>
`;

const newPet = (image, name, breed, petId) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="${image}">
        </article>
        <h2 class="name">${name}</h2>
        <h3 class="breed">${breed}</h3>
        <div class="action">
            <a class="btn" href="/pet/details/${petId}">Details</a>
        </div>
    </div>
`;

export async function dashboardView() {
    render(template(), document.getElementById('content'));

    const animalsDashboard = document.querySelector('.animals-dashboard');
    animalsDashboard.innerHTML = '';

    const response = await fetch('http://localhost:3030/data/pets?sortBy=_createdOn%20desc&distinct=name');
    const data = await response.json();

    if (data.length > 0) {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'animals-board';
            render(newPet(item.image, item.name, item.breed, item._id), div);
            animalsDashboard.append(div);
        });
    } else {
        animalsDashboard.innerHTML = '<div><p class="no-pets">No pets in dashboard</p></div>';
    };
};