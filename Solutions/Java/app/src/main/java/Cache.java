public abstract class Cache<K, V> {
    public abstract void add(K key, V value);
    public abstract V get(K key);
    public abstract void delete(K key);
    public abstract int size();
    public abstract int capacity();
}