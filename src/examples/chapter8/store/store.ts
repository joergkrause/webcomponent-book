
// named actions
export const INC = 'INC';
export const DEC = 'DEC';

// reducer
/**
 * The reducer functions are the executing logic.
 * They "do" what the action is asking for.
 */
export const counterReducer = {
  [INC]: (state: counterStoreType, payload: number)
    : Partial<counterStoreType> => {
    const value = +state.value + payload;
    return { value };
  },
  [DEC]: (state: counterStoreType, payload: number)
    : Partial<counterStoreType> => {
    const value = +state.value - payload;
    return { value };
  }
};

import { Observer, callBackType } from "./observer.js";

type actionType = { [key: string]: any };
type reducerType<T> = {
  [key: string]: (state: T, payload: any) => Partial<T>
};

// store infrastructure
export class Store<T extends {}> {

  private state: any;
  private resolver: Map<string, any> = new Map();
  private observer: Observer;

  constructor(
    private actions: actionType,
    private reducer: reducerType<T>,
    state: T
  ) {
    this.observer = Observer.getInstance();
    this.state = new Proxy(state, {
      set: (target: any, property: string, value: any) => {
        target[property] = value;
        this.observer.publish(property, this.state);
        // this.resolver.get(property)(this.state);
        return true;
      }
    });
  }

  dispatch(action: string, payload: any) {
    if (!Object.keys(this.actions).some(a => a === action)) {
      throw new Error('Unknown action called: ' + action);
    }
    const toCall = this.reducer[action];
    if (!toCall) {
      throw new Error('Reducer not found for action: ' + action);
    }
    const newState = toCall(this.state, payload);
    Object.assign(this.state, newState);
  }

  subscribe(storeProperty: keyof T & string, cb: callBackType): void {
    this.observer.subscribe(storeProperty, cb);
  }

}

// store
export interface counterStore {
  value: number;
}

export type counterStoreType = counterStore;

const counterState: counterStoreType = { value: 0 };

export const store = new Store<counterStoreType>(
  { INC, DEC },
  { ...counterReducer },
  counterState
);

