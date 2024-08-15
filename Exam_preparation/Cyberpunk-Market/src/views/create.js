import { createItem } from '../data/market.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, showNotification } from "../util.js";


const createTempl = (onCreate) => html`
        <section id="create">
          <div class="form form-item">
            <h2>Share Your item</h2>
            <form @submit=${onCreate} class="create-form">
              <input type="text" name="item" id="item" placeholder="Item" />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function createView() {
  render(createTempl(createSubmitHandler(onCreate)));
}

async function onCreate({
  item,
  imageUrl,
  price,
  availability,
  type,
  description
}) {
  if (!item || !imageUrl || !price || !availability || !type || !description) {
    return showNotification("All fields are required!");
    // return alert("All fields are required!");
  }

  await createItem(
    item,
    imageUrl,
    price,
    availability,
    type,
    description
  );

  page.redirect("/market");
}
