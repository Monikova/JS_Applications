import { html, render, page } from '../lib.js';
import { createSubmitHandler, showNotification } from '../util.js';
import { getItemById, updateItem } from '../data/market.js';

const editTempl = (data, onEdit) => html`
        <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form @submit=${onEdit} class="edit-form">
              <input type="text" name="item" id="item" placeholder="Item" .value=${data.item}/>
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${data.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                .value=${data.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value=${data.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
                .value=${data.description}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
  `;

export async function editView(ctx) {
  const id = ctx.params.id;

  const data = await getItemById(id);

  render(editTempl(data, createSubmitHandler(onEdit)));

  async function onEdit({
    item,
    imageUrl,
    price,
    availability,
    type,
    description
  }) {
    if (!item || !imageUrl || !price || !availability || !type || !description) {
      return showNotification('All fields are required!');
      // return alert('All fields are required!');
    }

    await updateItem(id, {
      item,
      imageUrl,
      price,
      availability,
      type,
      description
    });

    page.redirect('/market/' + id);
  }
}
