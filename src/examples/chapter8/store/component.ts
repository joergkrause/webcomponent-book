import { store, counterStoreType } from "./store.js";

export class MainComponent extends HTMLElement {


  constructor() {
    super();
    store.subscribe('value', (state: counterStoreType): void => {
      const result = this.querySelector('[data-result]');
      result.textContent = state.value.toString();
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button data-action="INC" data-payload="1">Increment 1</button>
    <button data-action="INC" data-payload="5">Increment 5</button>
    <button data-action="DEC" data-payload="1">Decrement 1</button>
    <button data-action="DEC" data-payload="5">Decrement 5</button>
    <div data-result>0</div>
    `
    this.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => this.invokeAction(e));
    })
  }

  invokeAction(e: Event) {
    const action = (e.target as HTMLElement).dataset.action;
    const payload = (e.target as HTMLElement).dataset.payload;
    store.dispatch(action, payload);
  }

}

customElements.define('app-main', MainComponent);