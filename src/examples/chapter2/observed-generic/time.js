"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Observes(type) {
    // the original decorator
    function internal(target) {
        Object.defineProperty(target.constructor, '_keys', {
            get: function () {
                const defaults = new type();
                return Object.keys(defaults).map(s => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
            },
            enumerable: false,
            configurable: false
        });
    }
    // return the decorator
    return internal;
}
class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this._data = {};
    }
    get data() {
        return this._data;
    }
    static get observedAttributes() {
        return this.constructor._keys || [];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.data[name] = newValue;
        }
        this.render();
    }
}
class TimeProperties {
    constructor() {
        this.datetime = '';
        /**
         * How to show the year (2020 or 20)
         */
        this.year = 'numeric';
        this.month = 'numeric';
        this.day = 'numeric';
        this.hour = 'numeric';
        this.minute = 'numeric';
        this.second = 'numeric';
        this.timeZoneName = 'short';
    }
}
let TimeFormat = class TimeFormat extends BaseComponent {
    constructor() {
        super();
    }
    render() {
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
    connectedCallback() {
        this.render();
    }
};
TimeFormat = __decorate([
    Observes(TimeProperties),
    __metadata("design:paramtypes", [])
], TimeFormat);
customElements.define("time-format", TimeFormat);
//# sourceMappingURL=time.js.map