import {html, render} from "./node_modules/lit-html/lit-html.js"

import {towns} from "./towns.js"

const townsDivElem = document.getElementById("towns");
const inputField = document.getElementById("searchText");
const resultDivElem = document.getElementById("result");
document.querySelector("button").addEventListener('click', search);

loadList(towns);

function search(event) {
   event.preventDefault();
   
   const inputText = inputField.value;

   loadList(towns, inputText);

   let matches = loadList(towns, inputText);
   resultDivElem.textContent = `${matches} matches found`;
}

function loadList(towns, inputText) {
   let matches = 0;
   const townsTempl = html `
      <ul>
         ${towns.map(t => html `<li class=${t.includes(inputText) ? "active" && matches++ : ""}>${t}</li>`)}
      </ul>
   `
   render(townsTempl, townsDivElem);
   return matches;
}
