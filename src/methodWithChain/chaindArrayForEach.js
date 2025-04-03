import { ArrayUtils } from '../../helpers/utils.js';

const { newPush } = ArrayUtils;

export function chaindArrayForEach(arr, callback) {

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newPush(newArr, result);
  }
  arr = newArr;
  return this;
}