import { page } from "./library.js";
import { views, update } from './views.js';

update();

page('/', () => views.home());
page('/login', () => views.login());
page('/register', () => views.register());
page('/logout', () => views.logout());
page('/dashboard', () => views.dashboard());
page('/pet/create-postcard', () => views.create());
page('/pet/details/:id', (data) => views.details(data));

page.start();