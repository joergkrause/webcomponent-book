class OuterElement extends HTMLElement {
  constructor() {
    super();
    console.log('outer ctor');
  }

  async connectedCallback() {
    console.log('outer render');
  }

  render() {
    console.log('ready to go');
    this.innerHTML = '<h1>Hello Web Component</h1>' + this.innerHTML + '<hr>';
  }

}

class InnerElement extends HTMLElement {
  constructor() {
    super();
    console.log('inner ctor');
  }

  connectedCallback() {
    console.log('inner render');
    this.innerHTML = '<small>Inner Part</small>';
  }

}

customElements.define('outer-element', OuterElement);
customElements.define('inner-element', InnerElement);

// the currently needed utility
customElements.define('content-done', class extends HTMLElement {
  connectedCallback() {
    const {parentElement} = this;
    parentElement.removeChild(this);
    if (parentElement.render) {
      parentElement.render();
    }
  }
});

