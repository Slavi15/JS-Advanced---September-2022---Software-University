import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logoutFunction } from "./views/logout.js";
import { homeView } from "./views/homeView.js";
import { detailsView } from "./views/detailsView.js";
import { dashboardView } from "./views/dashboardView.js";
import { createView } from "./views/createView.js";

export const views = {
    home: function() { homeView() },
    login: function() { loginView() },
    register: function() { registerView() },
    logout: function() { logoutFunction() },
    dashboard: function() { dashboardView() },
    create: function() { createView() },
    details: function(data) { detailsView(data) }
};

export const accessibility = {
    guest: function() {
        document.querySelectorAll('.guest').forEach(item => item.style.display = 'block');
        document.querySelectorAll('.user').forEach(item => item.style.display = 'none');
    },
    user: function() {
        document.querySelectorAll('.guest').forEach(item => item.style.display = 'none');
        document.querySelectorAll('.user').forEach(item => item.style.display = 'block');
    }
};

export function update() {
    const credentials = sessionStorage.getItem('credentials');
    if (JSON.parse(credentials)) {
        accessibility.user();
    } else {
        accessibility.guest();
    };
};