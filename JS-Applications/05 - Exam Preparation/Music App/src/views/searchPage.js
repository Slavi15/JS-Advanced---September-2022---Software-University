import { html, render } from '../library.js';

const template = () => html`
<!--Search Page-->
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
</section>
`;

const newSearch = (imgUrl, name, artist, genre, price, releaseDate, id) => html`
< !--Show after click Search button-- >
<div class="search-result">
    <!--If have matches-->
    <div class="card-box">
        <img src="${imgUrl}">
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
</div>
`;

export function searchPage() {
    render(template(), document.getElementById('main-content'));

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));
    const searchPage = document.querySelector('#searchPage');
    document.querySelector('#searchPage button').addEventListener('click', searchFunction);

    async function searchFunction() {
        const input = document.querySelector('#searchPage input');

        if (input.value === '') {
            window.alert('Invalid input!');
            return;
        };

        const response = await fetch(`http://localhost:3030/data/albums?where=name%20LIKE%20%22${input.value}%22`);
        const searchData = await response.json();

        if (searchData.length > 0) {
            searchData.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('search-result');

                render(newSearch(item.imgUrl, item.name, item.artist, item.genre, item.price, item.releaseDate, item._id), div);

                searchPage.append(div);
            });

            if (!credentials) {
                document.querySelectorAll('#searchPage .btn-group').forEach(item => item.style.display = 'none');
            };
        } else {
            const div = document.createElement('div');
            div.classList.add('search-result');

            const p = document.createElement('p');
            p.textContent = 'No result.';
            p.classList.add('no-result');

            div.append(p);
            
            searchPage.append(div);
        };
    };
};