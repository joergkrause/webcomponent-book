function Required() {
  function RequiredDecorator(target: any, property: string) {
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
  @Required()
  city: string = '';
  @Required()
  street: string = '';
}

class ValidationDemoComponent extends HTMLElement {

  model: ValidationViewModel & Record<string, any>;

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
          const value = (e.target as HTMLInputElement).value;
          this.model[property] = value;
          const v = this.model[`__req__${property}__val__`];
          if (!v) {
            // field invalid
            const msg = this.model[`__req__${property}__msg__`]
            m.textContent = msg;
          } else {
            m.textContent = null;
          }
        });
      }
    });

  }

}

customElements.define('app-validator', ValidationDemoComponent);