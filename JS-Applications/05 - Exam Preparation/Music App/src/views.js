import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { logoutFunction } from "./views/logout.js";
import { createPage } from "./views/createPage.js";
import { catalogPage } from "./views/catalogPage.js";
import { editPage } from "./views/editPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { searchPage } from "./views/searchPage.js";

export const views = {
    home: function() { homePage() },
    login: function() { loginPage() },
    register: function() { registerPage() },
    logout: function() { logoutFunction() },
    create: function() { createPage() },
    catalog: function() { catalogPage() },
    edit: function() { editPage() },
    details: function(data) { detailsPage(data) },
    search: function() { searchPage() }
};

export const accessibility = {
    guest: function() {
        document.querySelectorAll('nav .guest').forEach(item => item.style.display = '');
        document.querySelectorAll('nav .user').forEach(item => item.style.display = 'none');
    },
    user: function() {
        document.querySelectorAll('nav .guest').forEach(item => item.style.display = 'none');
        document.querySelectorAll('nav .user').forEach(item => item.style.display = '');
    }
};

export function updateAccessibility() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'));
    if (credentials) {
        accessibility.user();
    } else {
        accessibility.guest();
    };
};