class MenuItem extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<li>${this.textContent}</li>`;
      this.shadowRoot.addEventListener('click', (e: Event) => {
        if ((e.target as HTMLElement).tagName === 'LI') {
          console.log(e);
          const customEvent: CustomEventInit = {
            detail: (e.currentTarget as HTMLElement).textContent
          };
          this.dispatchEvent(new CustomEvent('menuclick', customEvent));
        }
      });
    }
  }
}

class CustomMenu extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
              <div>
                <slot name="title"></div>
                <ul>
                  <slot name="item"></slot>
                </ul>
              </div>`;
      const slot = this.shadowRoot.querySelector<HTMLSlotElement>('slot[name="item"]');
      if (slot) {
        slot.assignedNodes()
          .forEach((e: Node) => {
            e.addEventListener('menuclick', (el: Event) => alert((el as CustomEvent).detail));
          });
      }
    }
  }
}

customElements.define('menu-item', MenuItem);
customElements.define('custom-menu', CustomMenu);