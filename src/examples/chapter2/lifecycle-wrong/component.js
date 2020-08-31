class OuterElement extends HTMLElement {
  constructor() {
    super();
    console.log('outer ctor');
  }

  connectedCallback() {
    console.log('outer render');
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

// Make working be uncomment this and outcomment the other part
// if (document.readyState === 'interactive'
// || document.readyState === 'complete') {
//   customElements.define('outer-element', OuterElement);
//   customElements.define('inner-element', InnerElement);
// } else {
//   document.addEventListener('DOMContentLoaded', _ => {
//     customElements.define('outer-element', OuterElement);
//     customElements.define('inner-element', InnerElement);
//   });
// }

customElements.define('outer-element', OuterElement);
customElements.define('inner-element', InnerElement);
