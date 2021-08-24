export function SelectAll(selector) {
    return function (target, prop) {
        Object.defineProperty(target, prop, {
            get: function () {
                return this.querySelectorAll(selector);
            },
            enumerable: false,
            configurable: false
        });
    };
}
//# sourceMappingURL=all.js.map