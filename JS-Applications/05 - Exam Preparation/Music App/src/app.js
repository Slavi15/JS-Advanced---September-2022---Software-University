import { page } from "./library.js";
import { views, updateAccessibility } from "./views.js";

updateAccessibility();

page('/', () => views.home());
page('/login', () => views.login());
page('/register', () => views.register());
page('/logout', () => views.logout());
page('/create', () => views.create());
page('/catalog', () => views.catalog());
page('/edit', () => views.edit());
page('/details/:id', (data) => views.details(data));
page('/search', () => views.search());

page.start();