// You are given an input field with a button. In the input field you should enter elements 
// separated by comma and whitespace (", "). Your task is to create a simple template that defines a list of towns. 
// Each town comes from the input field. The list should be rendered inside the element with Id "root". 

import {html, render} from "./node_modules/lit-html/lit-html.js"

const formElem = document.querySelector("form");
formElem.addEventListener("submit", onSubmit);
const rootElem = document.getElementById("root");

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {towns} = Object.fromEntries(formData);
    const townsAsArr = towns.split(", ");
    const townsUl = html `
      <ul>
        ${townsAsArr.map(t => html `<li>${t}</li>`)}
      </ul>
    `
    render(townsUl, rootElem);
}
