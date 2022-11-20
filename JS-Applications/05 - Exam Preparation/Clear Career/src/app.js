import { page } from './library.js';
import { updateAccessibility, views } from './views.js';

updateAccessibility();

page('/', () => views.home());
page('/login', () => views.login());
page('/register', () => views.register());
page('/logout', () => views.logout());
page('/dashboard', () => views.dashboard());
page('/create', () => views.create());
page('/details/:id', (data) => views.details(data));
page('/edit', () => views.edit());

page.start();