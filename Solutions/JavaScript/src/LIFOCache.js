const Cache = require('./Cache');

class LIFOCache extends Cache {
    #capacity;
    constructor(capacity) {
        super();
        this.#capacity = capacity;
    }

    add(key, value) {
        throw new Error("Method not implemented.");
    }

    get(key) {
        throw new Error("Method not implemented.");
    }

    delete(key) {
        throw new Error("Method not implemented.");
    }

    get size() {
        throw new Error("Method not implemented.");
    }

    get capacity() {
        return this.#capacity;
    }
}

module.exports = LIFOCache;