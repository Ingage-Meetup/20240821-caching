namespace CachingImpl
{
    public class FIFOCache<K, V>
    {
        private readonly int capacity;
        public FIFOCache(int capacity)
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