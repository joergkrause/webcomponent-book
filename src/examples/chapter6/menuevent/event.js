"use strict";
class MenuItem extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<li>${this.textContent}</li>`;
            this.shadowRoot.addEventListener('click', (e) => {
                if (e.target.tagName === 'LI') {
                    console.log(e);
                    const customEvent = {
                        detail: e.currentTarget.textContent
                    };
                    this.dispatchEvent(new CustomEvent('menuclick', customEvent));
                }
            });
        }
    }
}
class CustomMenu extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
              <div>
                <slot name="title"></div>
                <ul>
                  <slot name="item"></slot>
                </ul>
              </div>`;
            const slot = this.shadowRoot.querySelector('slot[name="item"]');
            if (slot) {
                slot.assignedNodes()
                    .forEach((e) => {
                    e.addEventListener('menuclick', (el) => alert(el.detail));
                });
            }
        }
    }
}
customElements.define('menu-item', MenuItem);
customElements.define('custom-menu', CustomMenu);
//# sourceMappingURL=event.js.map