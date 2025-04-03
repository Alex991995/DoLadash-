/**
 * @param {number[]} array - The array of data.
 * @param {requestCallback} callback - callback.
 * @param {number} initialValue
 */
export function arrayReduce(array, callback, initialValue) {
  let sum = initialValue;
  for (let i = 0; i < array.length; i++) {
    sum = callback(sum, array[i], i, array);
  }
  return sum;

}
