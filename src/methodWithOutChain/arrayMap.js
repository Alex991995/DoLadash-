import { ArrayUtils } from '../../helpers/utils.js';

const { newPush } = ArrayUtils;

 /**
   * @param {number[]} array - The array of data.
   * @param {requestCallback} callback - callback.
   */
export function arrayMap(array, callback) {
  try {
    if (!Array.isArray(array)) throw new Error('Wrong data');
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i], i, array);
      newPush(newArr, result);
    }
    return newArr;
  } catch (err) {
    return err.message;
  }
}
