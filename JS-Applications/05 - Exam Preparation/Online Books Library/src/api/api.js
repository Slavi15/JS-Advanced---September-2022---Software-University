import { page } from "../library.js";
import { updateAccessibility } from "../views.js";

export const api = {
    loginFunction: function() { loginFunction() },
    registerFunction: function() { registerFunction() },
    logoutFunction: function() { logoutFunction() },
    createFunction: function() { createFunction() },
    editFunction: function(id, ownerId, createdOn) { editFunction(id, ownerId, createdOn) },
    deleteFunction: function(id) { deleteFunction(id) },
    searchFunction: function() { searchFunction() }
};

const URL = 'http://localhost:3030';

async function loginFunction() {
    const [email, password] = Array.from(document.querySelectorAll('#login-page input'));

    if (email.value === '' || password.value === '') {
        window.alert('Invalid!');
        return;
    };

    const input = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    await fetch(`${URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
    .then(res => res.json())
    .then(data => {
        if (data.code) {
            window.alert('Invalid!');
            return;
        };

        sessionStorage.setItem('credentials', JSON.stringify({
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        }));

        page.redirect('/');
        updateAccessibility();
    });
};

async function registerFunction() {
    const [email, password, rePass] = Array.from(document.querySelectorAll('#register-page input'));

    if (email.value === '' || password.value === '' || rePass.value === '' || password.value !== rePass.value) {
        window.alert('Invalid');
        return;
    };

    const input = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    await fetch(`${URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
    .then(res => res.json())
    .then(data => {
        if (data.code) {
            window.alert('Invalid');
            return;
        };

        sessionStorage.setItem('credentials', JSON.stringify({
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        }));

        page.redirect('/');
        updateAccessibility();
    });
};

async function logoutFunction() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    await fetch(`${URL}/users/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': credentials.accessToken
        }
    });

    sessionStorage.clear();
    page.redirect('/');
    updateAccessibility();
};

async function createFunction() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const [title, imageUrl] = Array.from(document.querySelectorAll('#create-page input'));
    const description = document.querySelector('#create-page textarea');
    const option = document.querySelector('#create-page select');

    if (title.value === '' || imageUrl.value === '' || description.value === '' || option.value === '') return;

    const input = {
        title: title.value.trim(),
        description: description.value.trim(),
        imageUrl: imageUrl.value.trim(),
        type: option.value.trim()
    };

    await fetch(`${URL}/data/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': credentials.accessToken
        },
        body: JSON.stringify(input)
    });

    page.redirect('/');
};

async function editFunction(id, ownerId, createdOn) {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    const [title, imageUrl] = Array.from(document.querySelectorAll('#edit-page input'));
    const description = document.querySelector('#edit-page textarea');
    const option = document.querySelector('#edit-page select');

    if (title.value === '' || imageUrl.value === '' || description.value === '' || option.value === '') return;

    const input = {
        title: title.value.trim(),
        description: description.value.trim(),
        imageUrl: imageUrl.value.trim(),
        type: option.value.trim(),
        _id: id,
        _ownerId: ownerId,
        _createdOn: createdOn
    };

    await fetch(`${URL}/data/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': credentials.accessToken
        },
        body: JSON.stringify(input)
    });

    page.redirect(`/details/${id}`);
};

async function deleteFunction(id) {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));

    await fetch(`${URL}/data/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': credentials.accessToken
        }
    });

    page.redirect('/');
};