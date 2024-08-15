import { html, render } from '../lib.js';
import { getAllItems } from '../data/market.js';

const catalogTempl = (items) => html `
        <h3 class="heading">Market</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${items.length ?  items.map(itemTempl) : html`<h3 class="empty">No Items Yet</h3>`}
        </section>
        <!-- Display an h2 if there are no posts -->
`;

const itemTempl = (data) => html `
          <div class="item">
            <img src=${data.imageUrl} alt="example1" />
            <h3 class="model">${data.item}</h3>
            <div class="item-info">
              <p class="price">Price: €${data.price}</p>
              <p class="availability">
                ${data.availability}
              </p>
              <p class="type">Type: ${data.type}</p>
            </div>
            <a class="details-btn" href="/market/${data._id}">Uncover More</a>
          </div>
`;

export async function catalogView() {
    const items = await getAllItems();

    render(catalogTempl(items));
}
