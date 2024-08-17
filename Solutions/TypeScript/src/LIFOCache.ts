import { Cache } from './Cache';

export class LIFOCache<K, V> implements Cache<K, V> {
    private _capacity: number;

    constructor(capacity: number) {
        if (capacity < 1) throw new Error("Capacity must be greater than 0");
        this._capacity = capacity;
    }

    // Add an item to the cache
    add(key: K, value: V): void {
        throw new Error("Method not implemented.");
    }

    // Get an item from the cache
    get(key: K): V | undefined {
        throw new Error("Method not implemented.");
    }

    // Delete an item from the cache
    delete(key: K): boolean {
        throw new Error("Method not implemented.");
    }

    // Get the current size of the cache
    get size(): number {
        throw new Error("Method not implemented.");
    }

    // Get the cache capacity
    get capacity(): number {
        return this._capacity;
    }
}