import { page } from './lib.js';
import { logout } from './data/user.js';

import { homeView } from './views/homeView.js';
import { updateNav } from './util.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/editView.js';

updateNav();

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/market", catalogView);
page("/sell", createView);
page("/market/:id", detailsView);
page("/edit/:id", editView);

page.start();

document.getElementById('logoutLink').addEventListener('click', () => {
    logout();
    updateNav();
    page.redirect('/');
});
