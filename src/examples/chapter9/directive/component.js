"use strict";
class DirectiveDemo extends HTMLElement {
    connectedCallback() {
        this.parentElement.dataset.items = JSON.stringify([1, 2, 3]);
    }
}
class DirectiveDemoComponent extends HTMLElement {
    connectedCallback() {
        this.appendChild(document.createElement('app-directive-demo'));
        this.innerHTML = `

      <div>${this.dataset.items}</div>
    `;
    }
}
customElements.define('app-directive-demo', DirectiveDemo);
customElements.define('app-directive', DirectiveDemoComponent);
//# sourceMappingURL=component.js.map