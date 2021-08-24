// named actions
export const INC = 'INC';
export const DEC = 'DEC';
// reducer
/**
 * The reducer functions are the executing logic.
 * They "do" what the action is asking for.
 */
export const counterReducer = {
    [INC]: (state, payload) => {
        const value = +state.value + payload;
        return { value };
    },
    [DEC]: (state, payload) => {
        const value = +state.value - payload;
        return { value };
    }
};
import { Observer } from "./observer.js";
// store infrastructure
export class Store {
    constructor(actions, reducer, state) {
        this.actions = actions;
        this.reducer = reducer;
        this.resolver = new Map();
        this.observer = Observer.getInstance();
        this.state = new Proxy(state, {
            set: (target, property, value) => {
                target[property] = value;
                this.observer.publish(property, this.state);
                // this.resolver.get(property)(this.state);
                return true;
            }
        });
    }
    dispatch(action, payload) {
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
    subscribe(storeProperty, cb) {
        this.observer.subscribe(storeProperty, cb);
    }
}
const counterState = { value: 0 };
export const store = new Store({ INC, DEC }, Object.assign({}, counterReducer), counterState);
//# sourceMappingURL=store.js.map