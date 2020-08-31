class ObjectComponent extends HTMLElement {

  constructor() {
    super();
    this.proxy = new Proxy(
      this, {
      get: () => { return this.content; },
      set: (target, prop, value) => {
        this._content = value;
        if (ObjectComponent.observedAttributes.includes(prop)) {
          this.setAttribute(prop, JSON.stringify(value));
        }
        return true;
      }
    });
  }

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
    if (!oldValue) {
      this.setAttribute('content', JSON.stringify(newValue));
    }
    if (oldValue !== newValue) {
      this.render();
    }
  }

  set content(value) {
    this.proxy.content = value;
  }

  get content() {
    return JSON.parse(this.getAttribute('content'));
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