import { ArrayUtils } from '../../helpers/utils.js';

const { newSlice } = ArrayUtils;

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number[]}
 */
export function arrayTake(array, n) {
  try {

    if (!Array.isArray(array)) throw new Error('Wrong data');
    if (n > array.length) return array;
    
    return newSlice(array, 0, n);
  } 
  
  catch (err) {
    return err.message;
  }
}
