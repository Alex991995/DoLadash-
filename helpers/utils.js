export const ArrayUtils = {
  /**
   * @param {number[]} arr
   * @param {number} element
   * @returns { number[] }
   */
  newPush: (arr, element) => {
    const last = arr.length;
    arr[last] = element;
    return arr;
  },
  /**
   * @param {number[]} array
   * @param {number} start
   * @param {number} end
   * @returns { number[] }
   */
  newSlice: (array, start, end) => {
    const newArr = [];
    for (let i = start; i < end; i++) {
      ArrayUtils.newPush(newArr, array[i]);
    }
    return newArr;
  },
};
