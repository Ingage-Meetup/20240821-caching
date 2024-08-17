const LIFOCache = require('./LIFOCache');

describe("LIFOCache", () => {
    let cache;

    beforeEach(() => {
        cache = new LIFOCache(3); // Capacity of 3
    });

    it("should add items to the cache and retrieve them", () => {
        cache.add("one", 1);
        cache.add("two", 2);
        cache.add("three", 3);

        expect(cache.get("one")).toBe(1);
        expect(cache.get("two")).toBe(2);
        expect(cache.get("three")).toBe(3);
    });

    it("should evict the most recently added item when capacity is exceeded", () => {
        cache.add("one", 1);
        cache.add("two", 2);
        cache.add("three", 3);
        cache.add("four", 4); // Exceeds capacity, "three" should be evicted

        expect(cache.get("three")).toBeUndefined(); // "three" should be evicted
        expect(cache.get("one")).toBe(1);
        expect(cache.get("two")).toBe(2);
        expect(cache.get("four")).toBe(4);
    });

    it("should allow deleting an item from the cache", () => {
        cache.add("one", 1);
        cache.add("two", 2);

        cache.delete("one");

        expect(cache.get("one")).toBeUndefined();
        expect(cache.get("two")).toBe(2);
    });

    it("should return the correct size and capacity", () => {
        cache.add("one", 1);
        cache.add("two", 2);

        expect(cache.size).toBe(2);
        expect(cache.capacity).toBe(3);
    });
});