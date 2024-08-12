import { html, render as renderBase } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import page from '../node_modules/page/page.mjs';

const rootElem = document.querySelector('main');

function render(templResult) {
    return renderBase(templResult, rootElem);
}

export {
    html,
    render, 
    classMap,
    styleMap,
    page
};
