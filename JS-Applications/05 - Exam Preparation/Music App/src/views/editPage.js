import { html, render, page } from '../library.js';

const template = (name, imgUrl, price, releaseDate, artist, genre, description) => html`
<!--Edit Page-->
<section class="editPage">
    <form>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value="${name}">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${imgUrl}">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value="${price}">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${releaseDate}">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value="${artist}">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value="${genre}">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10">${description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>
`;

export async function editPage(id) {
    const response = await fetch(`http://localhost:3030/data/albums/${id}`);
    const resData = await response.json();

    render(template(resData.name, resData.imgUrl, resData.price, resData.releaseDate, resData.artist, resData.genre, resData.description), document.getElementById('main-content'));

    const credentials = JSON.parse(sessionStorage.getItem('credentials'));
    document.querySelector('.editPage button').addEventListener('click', updateFunction);

    async function updateFunction(e) {
        e.preventDefault();

        const [name, imgUrl, price, releaseDate, artist, genre] = Array.from(document.querySelectorAll('.editPage input'));
        const description = document.querySelector('.editPage textarea');

        if (name.value === '' || imgUrl.value === '' || price.value === '' || releaseDate.value === '' || artist.value === '' || genre.value === '' || description.value === '') return;

        const input = {
            name: name.value.trim(),
            imgUrl: imgUrl.value.trim(),
            price: price.value.trim(),
            releaseDate: releaseDate.value.trim(),
            artist: artist.value.trim(),
            genre: genre.value.trim(),
            description: description.value.trim(),
            _ownerId: resData._ownerId,
            _createdOn: resData._createdOn,
            _id: resData._id
        };

        await fetch(`http://localhost:3030/data/albums/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': credentials.accessToken
            },
            body: JSON.stringify(input)
        });

        page.redirect(`/details/${id}`);
    };
};