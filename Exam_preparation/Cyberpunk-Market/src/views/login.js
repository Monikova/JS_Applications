import { html, render, page } from '../lib.js';
import { login } from '../data/user.js';
import { createSubmitHandler, showNotification, updateNav } from '../util.js';

const loginTempl = (onLogin) => html`
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function loginView() {
  render(loginTempl(createSubmitHandler(onLogin)));
}

async function onLogin({ email, password }) {
  if (!email || !password) {
    showNotification('All fields are required!');
    // return alert('All fields are required!');
  } else {
    await login(email, password);
    updateNav();
    page.redirect('/');
  }
}
