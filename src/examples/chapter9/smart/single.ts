export function Select(selector: string) {

  return (target: any, prop: string) => {

    Object.defineProperty(target, prop, {
      get: () => {
        return this.querySelector(selector);
      },
      enumerable: false,
      configurable: false
    });
  };

}