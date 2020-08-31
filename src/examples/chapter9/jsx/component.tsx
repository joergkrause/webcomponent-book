import JSX from './jsx';

class JsxDemoComponent extends HTMLElement {

  connectedCallback() {
    const content = 'I am using TSX';
    this.innerHTML = <div>content</div>;
    ;
  }

}
customElements.define('app-jsx', JsxDemoComponent);
