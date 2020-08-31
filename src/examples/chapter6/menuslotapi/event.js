"use strict";
var _a;
class MenuItemSlotApi extends HTMLElement {
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
class CustomMenuSlotApi extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var _a;
        this.attachShadow({ mode: 'open' });
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
              <div>
                <slot name="title"></div>
                <ul>
                  <slot name="item"></slot>
                </ul>
              </div>`;
            (_a = this.shadowRoot
                .querySelector('ul')) === null || _a === void 0 ? void 0 : _a.addEventListener('slotchange', (s) => {
                const slot = s.target;
                if (slot.name === 'item') {
                    let items = slot.assignedElements()
                        .map(e => e.textContent)
                        .join(' ');
                    const output = document.querySelector('#output');
                    if (output) {
                        output.innerText = items;
                    }
                }
            });
        }
    }
}
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    (_a = document.querySelector('custom-menu')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', '<menu-item slot="item">This is new</menu-item>');
});
customElements.define('menu-item', MenuItemSlotApi);
customElements.define('custom-menu', CustomMenuSlotApi);
//# sourceMappingURL=event.js.map