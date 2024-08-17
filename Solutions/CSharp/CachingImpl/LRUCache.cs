namespace CachingImpl
{
    public class LRUCache<K, V>
    {
        private readonly int capacity;

        public LRUCache(int capacity)
        {
            this.capacity = capacity;
        }

        public V Get(K key)
        {
            throw new NotImplementedException();
        }

        public void Put(K key, V value)
        {
            throw new NotImplementedException();
        }
    }
}