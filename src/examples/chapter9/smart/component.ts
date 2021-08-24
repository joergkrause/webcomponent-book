import { Select } from "./single.js";

class SmartSelectDemo extends HTMLElement {


  @Select('#btn1') btn: HTMLButtonElement;

  connectedCallback() {
    this.innerHTML = "<button id='btn1'>Click Me!</button>";
    this.btn.addEventListener('click', this.show);
  }

  private show() {
    alert("Button clicked");
  }

}

customElements.define('app-select', SmartSelectDemo);
