namespace CachingImpl
{
    public class LFUCache<K, V>
    {
        private readonly int capacity;

        public LFUCache(int capacity)
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