import { ArrayUtils } from '../../helpers/utils.js';

const { newPush } = ArrayUtils;

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number[]}
 */
export function arraySkip(array, n) {
  try {
    if (!Array.isArray(array)) throw new Error('Wrong data');

    if (n === 0) return array;
    else if (array.length <= n) return [];

    const newArr = [];
    for (let i = n; i < array.length; i++) {
      newPush(newArr, array[i]);
    }
    return newArr;

  }
  
  catch (err) {
    return err.message;
  }
}
