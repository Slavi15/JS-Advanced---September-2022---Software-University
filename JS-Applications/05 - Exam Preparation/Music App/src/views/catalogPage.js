import { html, render } from '../library.js';

const template = () => html`
<!--Catalog-->
<section id="catalogPage">
    <h1>All Albums</h1>

    <!--No albums in catalog-->
    <p>No Albums in Catalog!</p>
</section>
`;

const newMusicPage = (image, name, artist, genre, price, releaseDate, id) => html`
<div class="card-box">
    <img src="${image}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${name}</p>
            <p class="artist">Artist: ${artist}</p>
            <p class="genre">Genre: ${genre}</p>
            <p class="price">Price: $${price}</p>
            <p class="date">Release Date: ${releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/details/${id}" id="details">Details</a>
        </div>
    </div>
</div>
`;

export async function catalogPage() {
    render(template(), document.getElementById('main-content'));

    const response = await fetch('http://localhost:3030/data/albums?sortBy=_createdOn%20desc&distinct=name');
    const albums = await response.json();

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const catalogPage = document.getElementById('catalogPage');
    catalogPage.innerHTML = '<h1>All Albums</h1>';

    if (albums.length > 0) {
        albums.forEach(item => {
            const div = document.createElement('div');
            render(newMusicPage(item.image, item.name, item.artist, item.genre, item.price, item.releaseDate, item._id), div);
            catalogPage.append(div);
        });

        if (!credentials) {
            document.querySelectorAll('.card-box .btn-group').forEach(item => item.style.display = 'none');
        };
    } else {
        const p = document.createElement('p');
        p.textContent = 'No Albums in Catalog!';
        catalogPage.append(p);
    };
};