"use strict";
class InputViewModel {
    constructor() {
        this.field = '';
    }
}
class BindableComponent extends HTMLElement {
    constructor() {
        super();
        this.model = new Proxy(new InputViewModel(), {
            get: (target, prop, receiver) => {
                return target[prop];
            },
            set: (target, prop, val, rec) => {
                target[prop] = val;
                const elements = this.querySelectorAll('[data-bind]');
                elements.forEach(element => {
                    const attribute = element.dataset.bind;
                    const [field, property] = attribute.split(':', 2);
                    if (element[property] !== target[field]) {
                        element[property] = target[field];
                    }
                });
                return true;
            }
        });
    }
    reset() {
        this.model.field = '';
    }
    connectedCallback() {
        this.innerHTML = `
      <form>
        <label>Input Field:</label>
        <input type="text" data-bind="field:value:input" />
        <hr />
        <button type="button">Reset Field</button>
        <hr />
        <div>
          You typed the following text:
          <span data-bind="field:textContent" />
        </div>
      </form>
    `;
        const elements = this.querySelectorAll('[data-bind]');
        elements.forEach(element => {
            const attribute = element.dataset.bind;
            const [field, property, event] = attribute.split(':', 3);
            if (event) {
                element.addEventListener(event, (e) => {
                    this.model[field] = e.target[property];
                });
            }
        });
        this.querySelector('button')
            .addEventListener('click', this.reset.bind(this));
    }
}
customElements.define('app-bindable', BindableComponent);
//# sourceMappingURL=component.js.map