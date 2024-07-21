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
   showResult(inputText);
}

function loadList(towns, inputText) {
   const townsTempl = html `
      <ul>
         ${towns.map(t => html `<li class=${t.includes(inputText) ? "active" : ""}>${t}</li>`)}
      </ul>
   `
   render(townsTempl, townsDivElem);
}

function showResult(inputText) {
   let matches = towns.filter(t => t.includes(inputText)).length;
   resultDivElem.textContent = `${matches} matches found`;
}
