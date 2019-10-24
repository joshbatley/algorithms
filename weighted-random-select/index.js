/**
 *
 * @param {map|array|list} list - [item,  weight]
 * @returns random value from list, depending on weight
 */
function weightRandomSelect(list) {

  let collectiveWeight = 0;
  // Loop though add up collective weight
  list.forEach((v) => collectiveWeight += v);

  // Select random number between 0 and collectiveWeight
  let random = Math.random() * (collectiveWeight - 0);

  // Loop through all values minusing off the random number
  // Once random is less then 0 return that value as the random
  // weight value
  for([key, value] of list) {
    random -= value;
    if (random < 0) {
      return [key, value];
    }
  }
}

/**
 * Example
 */
const testObject = new Map([
  ['abc', 0.4],
  ['def', 0.2],
  ['xyz', 0.1],
  ['123', 1]
]);

console.log('--- Starting list', testObject);

let Collection = new Map();
for (let i = 0; i < 10; i++) {
  let result = weightRandomSelect(testObject);
  console.log('Run - ' + i, result);
  if(Collection.has(result[0])) {
    Collection.set(result[0], 1 + Collection.get(result[0]));
  } else {
    Collection.set(result[0], 1);
  }
}

console.log(Collection, 'Should total 10');

