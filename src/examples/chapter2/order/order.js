customElements.define(
  'user-info',
  class extends HTMLElement {
    connectedCallback() {
      alert(this.innerText);
      this.innerHTML = `
      <style>
      div {
        border: 1px solid grey;
        width: 100px;
      }
      </style>
      <div>${this.innerText}</div>
      `
    }
  }
);
