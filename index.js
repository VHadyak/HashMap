// Custom HashMap (arrays as buckets for storing key-value pairs)
export default class HashMap {
  constructor(defaultCapacity = 16, loadFactor = 0.75) {
    this.capacity = new Array(defaultCapacity);
    this.loadFactor = loadFactor;
    this.size = 0; // Track key-value pairs
  }

  // Hash function
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity.length;
    }
    return hashCode;
  }

  // Assign key-value pair to a bucket
  set(key, value) {
    const index = this.hash(key);

    // If bucket doesn't exist at given index, create an empty one
    if (!this.capacity[index]) {
      this.capacity[index] = [];
    }

    const bucket = this.capacity[index];
    const keyIndex = bucket.findIndex((item) => item[0] === key);

    // Overwrite the value if same key exists, else push the new key-value into the bucket
    if (keyIndex !== -1) {
      bucket[keyIndex][1] = value;
    } else {
      bucket.push([key, value]);
      this.size++;
    }

    const capThreshold = this.capacity.length * this.loadFactor;

    // If threshold exceeded, double the length of hashmap
    if (this.size > capThreshold) {
      this.resizeHashMap();
    }
  }

  // Return value of the key
  get(key) {
    const index = this.hash(key);
    const bucket = this.capacity[index];

    if (!bucket) return null; // If key not found

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1]; // Return value of a key if found
      }
    }
    return null;
  }

  // Check if key exists in the hashmap
  has(key) {
    const keyExists = this.get(key);

    if (keyExists) {
      return true;
    }
    return false;
  }

  // Remove an entry from the bucket based on the key
  remove(key) {
    const index = this.hash(key);
    const bucket = this.capacity[index];

    if (!bucket) return false;

    const keyIndex = bucket.findIndex((item) => item[0] === key);

    // If key exists, remove that key-value pair from a bucket
    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
      this.size--;
      return true;
    }
    return false;
  }

  // Get total length of entries within the hashmap
  length() {
    return this.size;
  }

  // Clear all the entries from the hashmap
  clear() {
    this.capacity = this.capacity.map(() => []); // Reset all buckets to empty arrays
    this.size = 0;
    return this.capacity;
  }

  // Get all the keys from the hashmap
  keys() {
    const keyArr = [];

    this.capacity.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((pair) => {
          keyArr.push(pair[0]);
        });
      }
    });
    return keyArr;
  }

  // Get all the values from the hashmap
  values() {
    const valueArr = [];

    this.capacity.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((pair) => {
          valueArr.push(pair[1]);
        });
      }
    });
    return valueArr;
  }

  // Get an array of all the entries
  entries() {
    const pairArr = []; // [[firstKey, firstValue], [secondKey, secondValue]]

    this.capacity.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((pair) => {
          pairArr.push(pair);
        });
      }
    });
    return pairArr;
  }

  // Resize the hashmap if capacity threshold is exceeded
  resizeHashMap() {
    const oldCapacity = this.capacity;
    this.capacity = new Array(this.capacity.length * 2);
    this.size = 0;

    oldCapacity.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(([key, value]) => {
          this.set(key, value);
        });
      }
    });
  }
}
