export default class UnsupportedException extends Error {
    constructor(msg: string) {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnsupportedException.prototype);
    }

}