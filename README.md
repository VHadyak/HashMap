# Array-based HashMap Project

### *Project HashMap* is a practice project to be able to manipulate data structure of key-value pairs within the buckets, and perform various methods/operations such as: entry insertion, deletion, and collision handling.

### The following methods have been implemented into HashMap class:

* hash(key) - Generate hash code for the key, which defines the bucket index within the HashMap
* set(key, value)  - Add an entry to the bucket
* get(key) - Get a value of the key that is in the HashMap
* has(key) - Check if the key in the HashMap exists
* remove(key) - Remove an entry based on the given key that is within the HashMap
* length() - Get total number of keys in the HashMap
* clear() - Remove all the entries within the HashMap
* keys() - Return an array of all the keys that are in the HashMap
* values() - Return an array of all the values that are in the HashMap
* entries() - Return an array of all the entries that are in the HashMap
* resizeHashMap() - Resize the HashMap if its size exceeds the threshold capacity based on the load factor
