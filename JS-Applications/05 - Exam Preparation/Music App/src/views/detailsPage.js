import { html, render, page } from '../library.js';
import { editPage } from './editPage.js';

const template = (image, name, artist, genre, price, date, description) => html`
<!--Details Page-->
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${image}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${name}</h1>
                <h3>Artist: ${artist}</h3>
                <h4>Genre: ${genre}</h4>
                <h4>Price: ${price}</h4>
                <h4>Date: ${date}</h4>
                <p>Description: ${description}</p>
            </div>

        </div>
    </div>
</section>
`;

// <!-- Only for registered user and creator of the album-->
// <div class="actionBtn">
//     <a href="#" class="edit">Edit</a>
//     <a href="#" class="remove">Delete</a>
// </div>

export async function detailsPage(data) {
    const id = data.params.id;
    const response = await fetch(`http://localhost:3030/data/albums/${id}`);
    const albumData = await response.json();

    render(template(albumData.image, albumData.name, albumData.artist, albumData.genre, albumData.price, albumData.releaseDate, albumData.description), document.getElementById('main-content'));

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));
    const albumInfo = document.querySelector('#detailsPage .albumInfo');

    if (credentials.id === albumData._ownerId) {
        const div = document.createElement('div');
        div.classList.add('actionBtn');

        const editButton = document.createElement('a');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.href = 'javascript:void(0)';

        const deleteButton = document.createElement('a');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('remove');
        deleteButton.href = 'javascript:void(0)';

        editButton.addEventListener('click', () => editPage(id));

        deleteButton.addEventListener('click', () => {
            if (confirm('Press OK to DELETE!')) {
                deleteFunction();  
            };
        });

        async function deleteFunction() {
            await fetch(`http://localhost:3030/data/albums/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': credentials.accessToken
                }
            });

            page.redirect('/catalog');
        };

        div.append(editButton);
        div.append(deleteButton);

        albumInfo.append(div);
    };
};