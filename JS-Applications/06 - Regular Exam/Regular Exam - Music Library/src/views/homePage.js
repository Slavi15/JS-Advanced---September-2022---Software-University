import { html, render } from '../library.js';

const template = () => html`
<!-- Home page -->
<section id="home">
  <img src="./images/landing.png" alt="home" />

  <h2 id="landing-text">
    <span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right here!</span>
  </h2>
</section>
`;

export async function homePage() {
  render(template(), document.getElementsByTagName('main')[0]);
};