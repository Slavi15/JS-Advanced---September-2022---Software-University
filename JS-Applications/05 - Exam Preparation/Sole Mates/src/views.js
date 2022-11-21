import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { api } from "./api/api.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { searchPage } from "./views/searchPage.js";

export const views = {
    home: function() { homePage() },
    login: function() { loginPage() },
    register: function() { registerPage() },
    logout: function() { api.logoutFunction() },
    dashboard: function() { dashboardPage() },
    create: function() { createPage() },
    edit: function() { editPage() },
    details: function(data) { detailsPage(data) },
    search: function() { searchPage() }
};

export const accessibility = {
    guest: function() {
        document.querySelectorAll('nav .user').forEach(item => item.style.display = 'none');
        document.querySelectorAll('nav .guest').forEach(item => item.style.display = '');
    },
    user: function() {
        document.querySelectorAll('nav .user').forEach(item => item.style.display = '');
        document.querySelectorAll('nav .guest').forEach(item => item.style.display = 'none');
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