export declare class Rotation<T> {
    private _value?;
    get value(): T[] | undefined;
    private currentIndex;
    constructor(value: T[] | T);
    private ensureValue;
    next(): T | undefined;
    previous(): T | undefined;
    first(): T | undefined;
    last(): T | undefined;
    get(index?: number): T | undefined;
    peek(index?: number): T | undefined;
}
