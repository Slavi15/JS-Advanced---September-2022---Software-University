import { page } from './library.js';
import { updateAccessibility, views } from './views.js';

updateAccessibility();

page('/', () => views.dashboard());
page('/login', () => views.login());
page('/register', () => views.register());
page('/logout', () => views.logout());
page('/mybooks', () => views.mybooks());
page('/create', () => views.create());
page('/edit', () => views.edit());
page('/details/:id', (data) => views.details(data));

page.start();