class InputViewModel {
  field: string = '';
}

class BindableComponent extends HTMLElement {

  model: Record<string, any>;

  c: CustomEvent;

  constructor() {
    super();
    this.model = new Proxy(new InputViewModel(), {
      get: (target: any, prop: string, receiver: any) => {
        return target[prop];
      },
      set: (target: any, prop: string, val: any, rec: any) => {
        target[prop] = val;
        const elements = this.querySelectorAll<any>('[data-bind]');
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
    const elements = this.querySelectorAll<HTMLElement>('[data-bind]');
    elements.forEach(element => {
      const attribute = element.dataset.bind;
      const [field, property, event] = attribute.split(':', 3);
      if (event) {
        element.addEventListener(event, (e: Event) => {
          this.model[field] = (e.target as any)[property];
        });
      }
    });
    this.querySelector('button')
      .addEventListener('click', this.reset.bind(this));
  }

}

customElements.define('app-bindable', BindableComponent);