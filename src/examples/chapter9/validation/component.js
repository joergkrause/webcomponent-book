"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Required() {
    function RequiredDecorator(target, property) {
        Object.defineProperties(target, {
            [`__req__${property}__`]: {
                value: true,
                writable: false,
                enumerable: false,
                configurable: false
            },
            [`__req__${property}__val__`]: {
                get: function () {
                    return !!this[property];
                },
                enumerable: false,
                configurable: false
            },
            [`__req__${property}__msg__`]: {
                value: `The field ${property} is required.`,
                enumerable: false,
                configurable: false
            }
        });
    }
    return RequiredDecorator;
}
class ValidationViewModel {
    constructor() {
        this.city = '';
        this.street = '';
    }
}
__decorate([
    Required(),
    __metadata("design:type", String)
], ValidationViewModel.prototype, "city", void 0);
__decorate([
    Required(),
    __metadata("design:type", String)
], ValidationViewModel.prototype, "street", void 0);
class ValidationDemoComponent extends HTMLElement {
    constructor() {
        super();
        this.model = new ValidationViewModel();
    }
    connectedCallback() {
        this.innerHTML = `
      <form>
        <div>
          <label>City:</label>
          <input type="text" data-val="city:Required" />
          <span data-err="city:Required" />
        </div>
        <div>
          <label>Street:</label>
          <input type="text" data-val="street:Required" />
          <span data-err="street:Required" />
        </div>
        <hr />
        <button type="button">Validate</button>
      </form>
    `;
        this.bindValidation();
    }
    bindValidation() {
        Object.keys(this.model).forEach(property => {
            // loop enhanced properties, look for bind/val instructions
            if (this.model[`__req__${property}__`]) {
                const fieldSelector = `[data-val="${property}:Required"]`;
                const f = this.querySelector(fieldSelector);
                const msgSelector = `[data-err="${property}:Required"]`;
                const m = this.querySelector(msgSelector);
                f.addEventListener('input', (e) => {
                    const value = e.target.value;
                    this.model[property] = value;
                    const v = this.model[`__req__${property}__val__`];
                    if (!v) {
                        // field invalid
                        const msg = this.model[`__req__${property}__msg__`];
                        m.textContent = msg;
                    }
                    else {
                        m.textContent = null;
                    }
                });
            }
        });
    }
}
customElements.define('app-validator', ValidationDemoComponent);
//# sourceMappingURL=component.js.map