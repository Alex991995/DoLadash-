import { ArrayUtils } from './helpers/utils.js';

const { newSlice, newPush } = ArrayUtils;

import { arrayMap } from './src/methodWithOutChain/arrayMap.js';
import { arrayReduce } from './src/methodWithOutChain/arrayReduce.js';
import { arrayForEach } from './src/methodWithOutChain/arrayForEach.js';
import { arrayFilter } from './src/methodWithOutChain/arrayFilter.js';
import { arrayTake } from './src/methodWithOutChain/arrayTake.js';
import { arraySkip } from './src/methodWithOutChain/arraySkip.js';


// import { chaindArrayForEach } from './src/methodWithChain/chaindArrayForEach.js';

 

const arrayLib = {

  reduce: arrayReduce,
  map: arrayMap,
  forEach: arrayForEach,
  filter: arrayFilter,
  take: arrayTake,
  skip: arraySkip,

  chain(array) {
    /** @type {number[]} */
    let arr = array;

    return {
      take(n) {
        try {
          if (arr.length) {
            arr = newSlice(arr, 0, n);
            return this;
          }
          return this;
        } catch (error) {
          return error.message;
        }
      },
      map(callback) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
          const result = callback(arr[i], i, arr);
          newPush(newArr, result);
        }
        arr = newArr;
        return this;
      },


      forEach(callback) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
          const result = callback(arr[i], i, arr);
          newPush(newArr, result);
        }
        arr = newArr;
        return this;
      },

      reduce(callback, initialValue) {
        let sum = initialValue;

        for (let i = 0; i < arr.length; i++) {
          sum = callback(sum, arr[i], i, arr);
        }
        arr = sum;
        return this;
      },

      filter(callback) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
          const isValid = callback(array[i], i, arr);
          if (isValid) {
            newPush(newArr, array[i]);
          }
        }
        arr = newArr;
        return this;
      },

      skip(n) {
        if (n === 0) return arr;
        else if (arr.length <= n) return [];
        const newArr = [];
        for (let i = n; i < arr.length; i++) {
          newPush(newArr, arr[i]);
        }
        arr = newArr;
        return this;
      },

      value() {
        console.log(arr);
        return arr;
      },
    };
  },
};

export { arrayLib };

