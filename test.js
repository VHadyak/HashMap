import HashMap from "./index.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("moon", "silver");
test.set("Vlad", "sad");
test.set("ice cream", "vanilla"); // Overwrite the value from 'white' to 'vanilla'
test.set("ball", "yellow");
test.set("abcd", "letters");
test.set("papaya", "orange");
test.set("lemon", "yellow");

// HASHMAP
/* ┌─────────┬────────────────────────────┐
│ (index) │ 0                          │
├─────────┼────────────────────────────┤
│ 1       │ [ 'moon', 'silver' ]       │
│ 2       │ [ 'abcd', 'letters' ]      │
│ 3       │ [ 'carrot', 'orange' ]     │
│ 4       │ [ 'frog', 'green' ]        │
│ 5       │ [ 'banana', 'yellow' ]     │
│ 10      │ [ 'papaya', 'orange' ]     │
│ 11      │ [ 'grape', 'purple' ]      │
│ 13      │ [ 'ice cream', 'vanilla' ] │
│ 14      │ [ 'jacket', 'blue' ]       │
│ 15      │ [ 'kite', 'pink' ]         │
│ 17      │ [ 'elephant', 'gray' ]     │
│ 19      │ [ 'lemon', 'yellow' ]      │
│ 25      │ [ 'Vlad', 'sad' ]          │
│ 26      │ [ 'apple', 'red' ]         │
│ 27      │ [ 'hat', 'black' ]         │
│ 28      │ [ 'dog', 'brown' ]         │
│ 31      │ [ 'ball', 'yellow' ]       │
└─────────┴────────────────────────────┘ */

console.log("Value of the key:", test.get("ice cream")); // vanilla
console.log("Check if key exists in the hashmap:", test.has("Vlad")); // True
console.log("Number of stored keys:", test.length()); // 17
console.log(
  "Get all the keys:",
  test.keys()
); /* ['moon', 'abcd', 'carrot', 'frog', 'banana', 'papaya', 'grape', 'ice cream', 'jacket', 
                                                  'kite', 'elephant', 'lemon', 'Vlad', 'apple', 'hat', 'dog', 'ball'] */
console.log(
  "Get all the values:",
  test.values()
); /* ['silver', 'letters', 'orange', 'green', 'yellow', 'orange', 'purple', 'vanilla', 'blue', 'pink', 'gray', 'yellow', 'sad', 'red', 'black', 'brown', 'yellow'] */

console.table(test.entries()); // Get each entry in the hashmap
// Tabular Format
/* ┌─────────┬─────────────┬───────────┐
│ (index) │ 0           │ 1         │
├─────────┼─────────────┼───────────┤
│ 0       │ 'moon'      │ 'silver'  │
│ 1       │ 'abcd'      │ 'letters' │
│ 2       │ 'carrot'    │ 'orange'  │
│ 3       │ 'frog'      │ 'green'   │
│ 4       │ 'banana'    │ 'yellow'  │
│ 5       │ 'papaya'    │ 'orange'  │
│ 6       │ 'grape'     │ 'purple'  │
│ 7       │ 'ice cream' │ 'vanilla' │
│ 8       │ 'jacket'    │ 'blue'    │
│ 9       │ 'kite'      │ 'pink'    │
│ 10      │ 'elephant'  │ 'gray'    │
│ 11      │ 'lemon'     │ 'yellow'  │
│ 12      │ 'Vlad'      │ 'sad'     │
│ 13      │ 'apple'     │ 'red'     │
│ 14      │ 'hat'       │ 'black'   │
│ 15      │ 'dog'       │ 'brown'   │
│ 16      │ 'ball'      │ 'yellow'  │
└─────────┴─────────────┴───────────┘ */

// Return true if key exists and is removed
console.log(test.remove("moon")); // True
console.log(test.remove("hat")); // True

console.log("Value of the key:", test.get("moon")); // null
console.log("Check if key exists in the hashmap:", test.has("hat")); // False
console.log("Number of stored keys:", test.length()); // 15

// Updated HASHMAP
/* ┌─────────┬────────────────────────────┐
│ (index) │ 0                          │
├─────────┼────────────────────────────┤
│ 1       │                            │
│ 2       │ [ 'abcd', 'letters' ]      │
│ 3       │ [ 'carrot', 'orange' ]     │
│ 4       │ [ 'frog', 'green' ]        │
│ 5       │ [ 'banana', 'yellow' ]     │
│ 10      │ [ 'papaya', 'orange' ]     │
│ 11      │ [ 'grape', 'purple' ]      │
│ 13      │ [ 'ice cream', 'vanilla' ] │
│ 14      │ [ 'jacket', 'blue' ]       │
│ 15      │ [ 'kite', 'pink' ]         │
│ 17      │ [ 'elephant', 'gray' ]     │
│ 19      │ [ 'lemon', 'yellow' ]      │
│ 25      │ [ 'Vlad', 'sad' ]          │
│ 26      │ [ 'apple', 'red' ]         │
│ 27      │                            │
│ 28      │ [ 'dog', 'brown' ]         │
│ 31      │ [ 'ball', 'yellow' ]       │
└─────────┴────────────────────────────┘ */

// Clear the hashmap, set buckets to empty arrays
console.table(test.clear());
console.log("Number of stored keys:", test.length()); // 0

// Updated HASHMAP
/* ┌─────────┐
│ (index) │
├─────────┤
│ 1       │
│ 2       │
│ 3       │
│ 4       │
│ 5       │
│ 10      │
│ 11      │
│ 13      │
│ 14      │
│ 15      │
│ 17      │
│ 19      │
│ 25      │
│ 26      │
│ 27      │
│ 28      │
│ 31      │
└─────────┘ */

test.set("hat", "brown");
test.set("apple", "red");
test.set("banana", "yellow");

console.log("Value of the key:", test.get("apple")); // red
console.log("Check if key exists in the hashmap:", test.has("Vlad")); // False
console.log("Number of stored keys:", test.length()); // 3
console.log("Get all the keys:", test.keys()); // ['banana', 'apple', 'hat']
console.log("Get all the values:", test.values()); // ['yellow', 'red', 'brown']

// Updated HASHMAP
/* ┌─────────┬────────────────────────┐
│ (index) │ 0                      │
├─────────┼────────────────────────┤
│ 1       │                        │
│ 2       │                        │
│ 3       │                        │
│ 4       │                        │
│ 5       │ [ 'banana', 'yellow' ] │
│ 10      │                        │
│ 11      │                        │
│ 13      │                        │
│ 14      │                        │
│ 15      │                        │
│ 17      │                        │
│ 19      │                        │
│ 25      │                        │
│ 26      │ [ 'apple', 'red' ]     │
│ 27      │ [ 'hat', 'brown' ]     │
│ 28      │                        │
│ 31      │                        │
└─────────┴────────────────────────┘ */
