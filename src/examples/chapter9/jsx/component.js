import JSX from './jsx';
class JsxDemoComponent extends HTMLElement {
    connectedCallback() {
        const content = 'I am using TSX';
        this.innerHTML = JSX.createElement("div", null, "content");
        ;
    }
}
customElements.define('app-jsx', JsxDemoComponent);
//# sourceMappingURL=component.js.map