namespace CachingImpl.Tests
{
    public class FIFOCacheTests
    {
        [Fact]
        public void TestPutAndGet()
        {
            var cache = new FIFOCache<string, int>(3);
            cache.Put("one", 1);
            cache.Put("two", 2);
            cache.Put("three", 3);
            Assert.Equal(1, cache.Get("one"));
            Assert.Equal(2, cache.Get("two"));
            Assert.Equal(3, cache.Get("three"));
        }

        [Fact]
        public void TestEviction()
        {
            var cache = new FIFOCache<string, int>(2);
            cache.Put("one", 1);
            cache.Put("two", 2);
            cache.Put("three", 3);
            Assert.Throws<KeyNotFoundException>(() => cache.Get("one"));
            Assert.Equal(2, cache.Get("two"));
            Assert.Equal(3, cache.Get("three"));
        }

        [Fact]
        public void TestUpdate()
        {
            var cache = new FIFOCache<string, int>(2);
            cache.Put("one", 1);
            cache.Put("two", 2);
            cache.Put("one", 10);
            Assert.Equal(10, cache.Get("one"));
        }

        [Fact]
        public void TestAccessOrder()
        {
            var cache = new FIFOCache<string, int>(2);
            cache.Put("one", 1);
            cache.Put("two", 2);
            cache.Get("one");
            cache.Put("three", 3);
            Assert.Throws<KeyNotFoundException>(() => cache.Get("one"));
            Assert.Equal(2, cache.Get("two"));
            Assert.Equal(3, cache.Get("three"));
        }
    }
}