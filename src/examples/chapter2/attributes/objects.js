class ObjectComponent extends HTMLElement {

  render() {
    this.innerHTML = null;
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(this.content);
    this.insertAdjacentElement('afterbegin', pre);
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['content'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.content = newValue;
    this.render();
  }

  set content(value) {
    this._content = value;
    this.render();
  }

  get content() {
    return this._content;
  }

}

document.addEventListener('readystatechange', (docEvent) => {
  if (document.readyState === 'complete') {

    customElements.define("obj-element", ObjectComponent);

    document.querySelector('button').addEventListener('click', (e) => {
      document.querySelector('obj-element').content = { type: 'object' };
    });
  }
});