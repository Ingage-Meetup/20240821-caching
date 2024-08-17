import { LIFOCache } from "./LIFOCache";
import { beforeEach, describe, expect, it } from "@jest/globals";

describe("LIFOCache", () => {
    let cache: LIFOCache<string, number>;

    beforeEach(() => {
        cache = new LIFOCache<string, number>(3); // Capacity of 3
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
        cache.add("four", 4); // Exceeds capacity, "four" should be evicted

        expect(cache.get("four")).toBeUndefined(); // "four" should be evicted
        expect(cache.get("one")).toBe(1);
        expect(cache.get("two")).toBe(2);
        expect(cache.get("three")).toBe(3);
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