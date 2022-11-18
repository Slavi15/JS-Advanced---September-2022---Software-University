import { html, render } from '../library.js';
import { page } from "../library.js";
import { editPage } from './editView.js';

const template = (image, name, breed, age, weight, donation) => html`
<!--Details Page-->
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${image}">
        </div>
        <div id="animalDetails">
            <div class="animalInfo">
                <h1>Name: ${name}</h1>
                <h3>Breed: ${breed}</h3>
                <h4>Age: ${age}</h4>
                <h4>Weight: ${weight}</h4>
                <h4 class="donation">Donation: ${donation}$</h4>
            </div>
        </div>
    </div>
</section>
`;

// < !-- if there is no registered user, do not display div-- >
//     <div class="actionBtn">
//         <!-- Only for registered user and creator of the pets-->
//         <a href="#" class="edit">Edit</a>
//         <a href="#" class="remove">Delete</a>
//         <!--(Bonus Part) Only for no creator and user-->
//         <a href="#" class="donate">Donate</a>
//     </div>

export async function detailsView(data) {
    const id = data.params.id;
    const response = await fetch(`http://localhost:3030/data/pets/${id}`);
    const resData = await response.json();

    const donationReq = await fetch(`http://localhost:3030/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`);
    const totalDonations = await donationReq.json();

    render(template(resData.image, resData.name, resData.breed, resData.age, resData.weight, totalDonations * 100), document.getElementById('content'));

    const animalDetails = document.getElementById('animalDetails');
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    if (credentials) {
        const div = createElement('div', null, 'actionBtn');

        if (credentials.id === resData._ownerId) {
            const editButton = createElement('a', 'Edit', 'edit');
            editButton.href = 'javascript:void(0)';
            const deleteButton = createElement('a', 'Delete', 'remove');
            deleteButton.href = 'javascript:void(0)';

            editButton.addEventListener('click', () => editPage(id));

            deleteButton.addEventListener('click', () => {
                if (confirm('Press OK to DELETE')) {
                    deleteFunction();
                };
            });

            async function deleteFunction() {
                await fetch(`http://localhost:3030/data/pets/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': credentials.accessToken
                    }
                });

                page.redirect('/');
            };

            div.appendChild(editButton);
            div.appendChild(deleteButton);
        } else {
            const response = await fetch(`http://localhost:3030/data/donation?where=petId%3D%22${id}%22%20and%20_ownerId%3D%22${credentials.id}%22&count`);
            const donations = await response.json();

            if (donations === 0) {
                const donateButton = createElement('a', 'Donate', 'donate');
                donateButton.href = 'javascript:void(0)';
    
                donateButton.addEventListener('click', donateFunction);
    
                async function donateFunction() {
                    const input = {
                        petId: id
                    };
    
                    await fetch(`http://localhost:3030/data/donation`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Authorization': credentials.accessToken
                        },
                        body: JSON.stringify(input)
                    });
    
                    donateButton.style.display = 'none';
                    page.redirect(`/pet/details/${id}`);
                };
    
                div.appendChild(donateButton);
            };
        };

        animalDetails.appendChild(div);
    };
};

function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
    return element;
};