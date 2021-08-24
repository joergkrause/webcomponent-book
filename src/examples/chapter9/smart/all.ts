export function SelectAll(selector: string) {
  return (target: any, prop: string) => {
    Object.defineProperty(target, prop, {
      get: () => {
         return this.querySelectorAll(selector);
      },
      enumerable: false,
      configurable: false
    });
  };
}