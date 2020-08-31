class MenuItemSlotApi extends HTMLElement {

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

class CustomMenuSlotApi extends HTMLElement {

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
      this.shadowRoot
        .querySelector('ul')
        ?.addEventListener('slotchange', (s: Event) => {
          const slot = s.target as HTMLSlotElement;
          if (slot.name === 'item') {
            let items = slot.assignedElements()
              .map(e => e.textContent)
              .join(' ');
            const output = document.querySelector<HTMLDivElement>('#output');
            if (output) {
              output.innerText = items;
            }
          }
        });
    }
  }
}

document.querySelector('button')?.addEventListener('click', () => {
  document.querySelector('custom-menu')?.insertAdjacentHTML('beforeend', '<menu-item slot="item">This is new</menu-item>');
});

customElements.define('menu-item', MenuItemSlotApi);
customElements.define('custom-menu', CustomMenuSlotApi);