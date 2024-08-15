import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";
import { deleteItem, getItemById } from "../data/market.js";

const detailsTempl = (item, isOwner, onDelete) => html `
        <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src=${item.imageUrl} alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                  ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">
                ${item.description}
                </p>
              </div>

              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
              </div>` : null}
            </div>
          </div>
        </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    const userData = await getUserData();
    const isOwner = userData?._id == item._ownerId;

    render(detailsTempl(item, isOwner, onDelete));
    
    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');
        
        if (!choice) {
            return;
        }
    
        await deleteItem(id);
        page.redirect('/market');
    }
}
