import { html, render } from '../library.js';

const template = () => html`
<!--Home Page-->
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        <!-- Display paragraph: If there is no games  -->
        <p class="no-articles">No games yet</p>
    </div>
</section>
`;

const newTemplate = (imageUrl, title, id) => html`
    <div class="image-wrap">
        <img src="${imageUrl}">
    </div>
    <h3>${title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/details/${id}" class="btn details-btn">Details</a>
    </div>
`;

export async function homePage() {
  render(template(), document.getElementsByTagName('main')[0]);

  const section = document.querySelector('#welcome-world #home-page');
  section.innerHTML = '<h1>Latest Games</h1>';

  const response = await fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc&distinct=category');
  const data = await response.json();

  if (data.length > 0) {
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('game');
      render(newTemplate(item.imageUrl, item.title, item._id), div);
      section.append(div);
    });
  } else {
    const p = document.createElement('p');
    p.classList.add('no-articles');
    p.innerText = 'No games yet';
    section.append(p);
  };
};