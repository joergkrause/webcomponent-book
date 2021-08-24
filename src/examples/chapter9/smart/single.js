export function Select(selector) {
    return (target, prop) => {
        Object.defineProperty(target, prop, {
            get: () => {
                return this.querySelector(selector);
            },
            enumerable: false,
            configurable: false
        });
    };
}
//# sourceMappingURL=single.js.map