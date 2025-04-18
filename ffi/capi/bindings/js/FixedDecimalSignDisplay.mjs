// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** 
 * ECMA-402 compatible sign display preference.
 *
 * See the [Rust documentation for `SignDisplay`](https://docs.rs/fixed_decimal/latest/fixed_decimal/enum.SignDisplay.html) for more information.
 */


export class FixedDecimalSignDisplay {
    
    #value = undefined;

    static #values = new Map([
        ["Auto", 0],
        ["Never", 1],
        ["Always", 2],
        ["ExceptZero", 3],
        ["Negative", 4]
    ]);

    static getAllEntries() {
        return FixedDecimalSignDisplay.#values.entries();
    }
    
    #internalConstructor(value) {
        if (arguments.length > 1 && arguments[0] === diplomatRuntime.internalConstructor) {
            // We pass in two internalConstructor arguments to create *new*
            // instances of this type, otherwise the enums are treated as singletons.
            if (arguments[1] === diplomatRuntime.internalConstructor ) {
                this.#value = arguments[2];
                return this;
            }
            return FixedDecimalSignDisplay.#objectValues[arguments[1]];
        }

        if (value instanceof FixedDecimalSignDisplay) {
            return value;
        }

        let intVal = FixedDecimalSignDisplay.#values.get(value);

        // Nullish check, checks for null or undefined
        if (intVal != null) {
            return FixedDecimalSignDisplay.#objectValues[intVal];
        }

        throw TypeError(value + " is not a FixedDecimalSignDisplay and does not correspond to any of its enumerator values.");
    }

    static fromValue(value) {
        return new FixedDecimalSignDisplay(value);
    }

    get value() {
        return [...FixedDecimalSignDisplay.#values.keys()][this.#value];
    }

    get ffiValue() {
        return this.#value;
    }
    static #objectValues = [
        new FixedDecimalSignDisplay(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 0),
        new FixedDecimalSignDisplay(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 1),
        new FixedDecimalSignDisplay(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 2),
        new FixedDecimalSignDisplay(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 3),
        new FixedDecimalSignDisplay(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 4),
    ];

    static Auto = FixedDecimalSignDisplay.#objectValues[0];
    static Never = FixedDecimalSignDisplay.#objectValues[1];
    static Always = FixedDecimalSignDisplay.#objectValues[2];
    static ExceptZero = FixedDecimalSignDisplay.#objectValues[3];
    static Negative = FixedDecimalSignDisplay.#objectValues[4];

    constructor(value) {
        return this.#internalConstructor(...arguments)
    }
}