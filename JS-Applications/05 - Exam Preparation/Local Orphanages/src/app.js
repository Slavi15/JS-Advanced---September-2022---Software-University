import { page } from './library.js';
import { updateAccessibility, views } from './views.js';

updateAccessibility();

page('/', () => views.dashboard());
page('/login', () => views.login());
page('/register', () => views.register());
page('/logout', () => views.logout());
page('/myposts', () => views.myposts());
page('/create', () => views.create());
page('/edit', () => views.edit());
page('/details/:id', (data) => views.details(data));

page.start();