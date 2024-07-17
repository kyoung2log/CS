class HashTable<K, V> {
  private table: Map<K, V>[];

  constructor(private size: number) {
    this.table = new Array(size).map(() => new Map<K, V>());
  }

  private hash(key: K): number {
    let hashValue = 0;

    if (typeof key === 'string') {
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
    } else if (typeof key === 'number') {
      hashValue = key;
    }

    return hashValue % this.size;
  }

  push(key: K, value: V): void {
    const index = this.hash(key);
    this.table[index].set(key, value);
  }

  get(key: K): V | undefined {
    const index = this.hash(key);

    return this.table[index].get(key);
  }

  remove(key: K): void {
    const index = this.hash(key);
    this.table[index].delete(key);
  }
}
