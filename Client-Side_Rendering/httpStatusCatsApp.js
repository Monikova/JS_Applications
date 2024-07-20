// Your task is to create a template to represent an HTTP cat card. 
// After you have created the template, render all the cats into the section with id "allCats". 
// Note that there should be a nested <ul> inside the section.
// An HTTP cat has an id, statusCode, statusMessage and imageLocation. 
// The cats are seeded using the function from the JS file named "catSeeder.js" – import this file as a module.
// Each card block has a button that reveals its status code. 
// You should toggle the button and change its text from "Show status code" to "Hide status code". 

import {html, render} from "./node_modules/lit-html/lit-html.js"

import { cats } from "./catSeeder.js"

const sectionElem = document.getElementById("allCats");

const catUL = html `
  <ul>
    ${cats.map(c => html `
    <li>
    <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt=${c.statusMessage}>
    <div class="info">
        <button class="showBtn" @click=${toggleBtn}>Show status code</button>
        <div class="status" style="display: none" id="301">
            <h4>Status Code: ${c.statusCode}</h4>
            <p>${c.statusMessage}</p>
        </div>
    </div>
    </li>`)}
  </ul>
  `;

render(catUL, sectionElem);

function toggleBtn(event) {
    const btnParent = event.target.parentElement;
    const statusDivElem = btnParent.querySelector("div.status");
    const divStatus = statusDivElem.style.display;

    statusDivElem.style.display = divStatus === "block" ? "none" : "block";
    event.target.textContent = divStatus === "block" ? "Show status code" : "Hide status code";
}
