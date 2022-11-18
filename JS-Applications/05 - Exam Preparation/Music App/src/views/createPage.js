import { html, render, page } from '../library.js';

const template = () => html`
<!--Create Page-->
<section class="createPage">
    <form>
        <fieldset>
            <legend>Add Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" placeholder="Album name">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" placeholder="Price">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" placeholder="Description"></textarea>

                <button class="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>
`;

export function createPage() {
    render(template(), document.getElementById('main-content'));

    document.querySelector('.createPage button').addEventListener('click', createFunction);

    async function createFunction(e) {
        e.preventDefault();

        const credentials = JSON.parse(sessionStorage.getItem('credentials'));
        const [name, imgUrl, price, releaseDate, artist, genre] = Array.from(document.querySelectorAll('.createPage input'));
        const description = document.querySelector('.createPage textarea');

        if (name.value === '' || imgUrl.value === '' || price.value === '' || releaseDate.value === '' || artist.value === '' || genre.value === '' || description.value === '') return;

        const input = {
            name: name.value.trim(),
            imgUrl: imgUrl.value.trim(),
            price: price.value.trim(),
            releaseDate: releaseDate.value.trim(),
            artist: artist.value.trim(),
            genre: genre.value.trim(),
            description: description.value.trim()
        };

        await fetch('http://localhost:3030/data/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': credentials.accessToken
            },
            body: JSON.stringify(input)
        });

        page.redirect('/catalog');
    };
};