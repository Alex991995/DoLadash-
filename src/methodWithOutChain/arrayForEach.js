import { ArrayUtils } from '../../helpers/utils.js';

const { newPush } = ArrayUtils;

/**
 * @param {number[]} array
 * @param {requestCallback} callback
 * @returns {number[]}
 */
export function arrayForEach(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    newPush(newArr, result);
  }
  return newArr;
}
