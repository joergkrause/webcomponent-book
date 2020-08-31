"use strict";
var _a;
class MenuItemUpdate extends HTMLElement {
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
class CustomMenuUpdate extends HTMLElement {
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
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    (_a = document.querySelector('custom-menu')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', '<menu-item slot="item">This is new</menu-item>');
});
customElements.define('menu-item', MenuItemUpdate);
customElements.define('custom-menu', CustomMenuUpdate);
//# sourceMappingURL=event.js.map