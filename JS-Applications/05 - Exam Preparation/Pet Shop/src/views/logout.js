import { page } from "../library.js";
import { update } from "../views.js";

export async function logoutFunction() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': credentials.accessToken
        }
    })

    sessionStorage.clear();
    page.redirect('/');
    update();
};