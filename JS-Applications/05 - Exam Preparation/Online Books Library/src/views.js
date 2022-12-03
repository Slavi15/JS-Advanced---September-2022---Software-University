import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { api } from "./api/api.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { myBooks } from "./views/myBooks.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";

export const views = {
    home: function() { homePage() },
    login: function() { loginPage() },
    register: function() { registerPage() },
    logout: function() { api.logoutFunction() },
    dashboard: function() { dashboardPage() },
    mybooks: function() { myBooks() },
    create: function() { createPage() },
    edit: function() { editPage() },
    details: function(data) { detailsPage(data) }
};

export const accessibility = {
    guest: function() {
        document.querySelectorAll('nav #user').forEach(item => item.style.display = 'none');
        document.querySelectorAll('nav #guest').forEach(item => item.style.display = '');
    },
    user: function() {
        document.querySelectorAll('nav #user').forEach(item => item.style.display = '');
        document.querySelectorAll('nav #guest').forEach(item => item.style.display = 'none');
    }
};

export function updateAccessibility() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));
    if (credentials) {
        accessibility.user();
        document.querySelector('nav #user span').textContent = `Welcome, ${credentials.email}`;
    } else {
        accessibility.guest();
    };
};