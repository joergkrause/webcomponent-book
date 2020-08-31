type Type<T> = new (...args: any[]) => T;

function Observes<T extends {}>(type: Type<T>) {
  // the original decorator
  function internal(target: Object): void {
    Object.defineProperty(target.constructor, '_keys', {
      get: function () {
        const defaults = new type()
        return Object.keys(defaults).map(s => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
      },
      enumerable: false,
      configurable: false
    });
  }

  // return the decorator
  return internal;
}


abstract class BaseComponent<T extends object> extends HTMLElement {

  private static _keys: any;
  private _data: T;

  constructor() {
    super();
    this._data = {} as T;
  }

  public get data(): T {
    return this._data;
  }

  static get observedAttributes() {
    return (this.constructor as any)._keys || [];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue !== newValue) {
      (this.data as any)[name] = newValue;
    }
    this.render();
  }

  public abstract render(): void;

}

class TimeProperties implements Intl.DateTimeFormatOptions {
  datetime: string = '';
  /**
   * How to show the year (2020 or 20)
   */
  year: 'numeric' | '2-digit' = 'numeric';
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long' = 'numeric';
  day: 'numeric' | '2-digit' = 'numeric';
  hour: 'numeric' | '2-digit' = 'numeric';
  minute: 'numeric' | '2-digit' = 'numeric';
  second: 'numeric' | '2-digit' = 'numeric';
  timeZoneName: 'short' | 'long' = 'short';
}

@Observes(TimeProperties)
class TimeFormat extends BaseComponent<TimeProperties> {

  constructor() {
    super();
  }

  render() { // (1)
    let date = new Date(this.data.datetime || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.data.year || undefined,
      month: this.data.month || undefined,
      day: this.data.day || undefined,
      hour: this.data.hour || undefined,
      minute: this.data.minute || undefined,
      second: this.data.second || undefined,
      timeZoneName: this.data.timeZoneName || undefined,
    }).format(date);
  }

  connectedCallback() { // (2)
    this.render();
  }

}

customElements.define("time-format", TimeFormat);