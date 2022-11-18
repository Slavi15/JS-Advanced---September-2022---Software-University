import { html, render } from '../library.js';

const template = () => html`
<!--Home Page-->
<section id="welcomePage">
    <div id="welcome-message">
        <h1>Welcome to</h1>
        <h1>My Music Application!</h1>
    </div>

    <div class="music-img">
        <img src="./images/musicIcons.webp">
    </div>
</section>
`;

export function homePage() {
    render(template(), document.getElementById('main-content'));
};