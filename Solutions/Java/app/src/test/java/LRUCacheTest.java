import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class LRUCacheTest {
    private LRUCache<String, Integer> cache;

    @BeforeEach
    public void setUp() {
        cache = new LRUCache<>(3); // Capacity of 3
    }

    @Test
    @DisplayName("should add items to the cache and retrieve them")
    public void testAddAndRetrieve() {
        cache.add("one", 1);
        cache.add("two", 2);
        cache.add("three", 3);

        assertEquals(1, cache.get("one"));
        assertEquals(2, cache.get("two"));
        assertEquals(3, cache.get("three"));
    }

    @Test
    @DisplayName("should evict the least recently used item when capacity is exceeded")
    public void testEviction() {
        cache.add("one", 1);
        cache.add("two", 2);
        cache.add("three", 3);
        cache.add("four", 4); // Exceeds capacity, "one" should be evicted

        assertNull(cache.get("one")); // "one" should be evicted
        assertEquals(2, cache.get("two"));
        assertEquals(3, cache.get("three"));
        assertEquals(4, cache.get("four"));
    }

    @Test
    @DisplayName("should maintain the most recently used order")
    public void testMostRecentlyUsedOrder() {
        cache.add("one", 1);
        cache.add("two", 2);
        cache.add("three", 3);

        cache.get("one"); // "one" becomes most recently used
        cache.add("four", 4); // "two" should be evicted now

        assertNull(cache.get("two")); // "two" should be evicted
        assertEquals(1, cache.get("one"));
        assertEquals(3, cache.get("three"));
        assertEquals(4, cache.get("four"));
    }

    @Test
    @DisplayName("should allow deleting an item from the cache")
    public void testDelete() {
        cache.add("one", 1);
        cache.add("two", 2);

        cache.delete("one");

        assertNull(cache.get("one"));
        assertEquals(2, cache.get("two"));
    }

    @Test
    @DisplayName("should return the correct size and capacity")
    public void testSizeAndCapacity() {
        cache.add("one", 1);
        cache.add("two", 2);

        assertEquals(2, cache.size());
        assertEquals(3, cache.capacity());
    }
}