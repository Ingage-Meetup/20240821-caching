export interface Cache<K, V> {
    add(key: K, value: V): void;
    get(key: K): V | undefined;
    delete(key: K): boolean;
    size: number;
    capacity: number;
}