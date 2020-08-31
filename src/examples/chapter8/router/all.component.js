class Page1Component extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'Page One';
    }
}
class Page2Component extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'Page Two';
    }
}
class Page3Component extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'Page Three';
    }
}
class MainComponent extends HTMLElement {
    constructor() {
        super();
    }
    render() {
        this.innerHTML = `
    <h1>Single Page Demo</h1>
    <nav>
      <a href="#page1">Page 1</a> |
      <a href="#page2">Page 2</a> |
      <a href="#page3">Page 3</a> |
    </nav>
    <div class="container">
      <app-router-outlet></app-router-outlet>
    </div>
    `;
    }
    connectedCallback() {
        this.render();
    }
}
class RouterOutletComponent extends HTMLElement {
    constructor() {
        super();
        this.routes = {
            '': Page1Component,
            '#page1': Page1Component,
            '#page2': Page2Component,
            '#page3': Page3Component
        };
    }
    connectedCallback() {
        window.addEventListener('hashchange', (e) => this.locationHashChanged(e));
    }
    disconnectedCallback() {
        window.removeEventListener('hashchange', (e) => this.locationHashChanged(e));
    }
    locationHashChanged(e) {
        const paths = Object.keys(this.routes);
        if (paths.some(r => r === window.location.hash)) {
            this.innerHTML = '';
            const type = this.routes[window.location.hash];
            const component = new type;
            this.insertAdjacentElement('afterbegin', component);
        }
    }
}
customElements.define('app-main', MainComponent);
customElements.define('app-router-outlet', RouterOutletComponent);
customElements.define('app-page1', Page1Component);
customElements.define('app-page2', Page2Component);
customElements.define('app-page3', Page3Component);
//# sourceMappingURL=all.component.js.map