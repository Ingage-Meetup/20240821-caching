
public class LFUCache<K, V> extends Cache<K, V> {
    private final int capacity;

    public LFUCache(int capacity) {
        this.capacity = capacity;
    }

    @Override
    public void add(K key, V value) {
        throw new UnsupportedOperationException("Not implemented yet");
    }

    @Override
    public V get(K key) {
        throw new UnsupportedOperationException("Not implemented yet");
    }

    @Override
    public void delete(K key) {
        throw new UnsupportedOperationException("Not implemented yet");
    }

    @Override
    public int size() {
        throw new UnsupportedOperationException("Not implemented yet");
    }

    @Override
    public int capacity() {
        return this.capacity;
    }
}