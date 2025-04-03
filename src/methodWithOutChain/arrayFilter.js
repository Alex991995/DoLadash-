import { ArrayUtils } from '../../helpers/utils.js';

const { newPush } = ArrayUtils;

/**
 * @param {number[]} array
 * @param {requestCallback} callback
 * @returns {number[]}
 */
export function arrayFilter(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const isValid = callback(array[i], i, array);
    if (isValid) {
      newPush(newArr, array[i]);
    }
  }
  return newArr;
}