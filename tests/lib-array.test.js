import { describe, expect, it } from 'vitest';
import { arrayLib } from '../index.js';

describe('Array Utility Functions', () => {
  describe('take()', () => {
    it('should return the first n elements of array', () => {
      console.log(arrayLib)
      expect(arrayLib.take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
      expect(arrayLib.take([1, 2, 3], 1)).toEqual([1]);
    });

    it('should return the entire array if n is greater than array length', () => {
      expect(arrayLib.take([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    it('should return empty array if n is 0', () => {
      expect(arrayLib.take([1, 2, 3], 0)).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(arrayLib.take([], 3)).toEqual([]);
    });
  });

  describe('skip()', () => {
    it('should skip the first n elements of array', () => {
      expect(arrayLib.skip([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
      expect(arrayLib.skip([1, 2, 3], 1)).toEqual([2, 3]);
    });

    it('should return empty array if n is greater than or equal to array length', () => {
      expect(arrayLib.skip([1, 2, 3], 3)).toEqual([]);
      expect(arrayLib.skip([1, 2, 3], 5)).toEqual([]);
    });

    it('should return the entire array if n is 0', () => {
      expect(arrayLib.skip([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    it('should handle empty arrays', () => {
      expect(arrayLib.skip([], 3)).toEqual([]);
    });
  });

  describe('map()', () => {
    it('should apply callback to each element of array', () => {
      expect(arrayLib.map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
      expect(arrayLib.map([1, 2, 3], x => x.toString())).toEqual(['1', '2', '3']);
    });

    it('should pass element index to callback', () => {
      expect(arrayLib.map([10, 20, 30], (x, i) => x + i)).toEqual([10, 21, 32]);
    });

    it('should handle empty arrays', () => {
      expect(arrayLib.map([], x => x * 2)).toEqual([]);
    });
  });

  describe('reduce()', () => {
    it('should accumulate values using callback', () => {
      expect(arrayLib.reduce([1, 2, 3, 4], (acc, val) => acc + val, 0)).toBe(10);
      expect(arrayLib.reduce([1, 2, 3], (acc, val) => acc * val, 1)).toBe(6);
    });

    it('should use initial value as starting accumulator', () => {
      expect(arrayLib.reduce([1, 2, 3], (acc, val) => acc + val, 10)).toBe(16);
    });

    it('should work with non-numeric values', () => {
      expect(arrayLib.reduce(['a', 'b', 'c'], (acc, val) => acc + val, '')).toBe(
        'abc',
      );
      expect(arrayLib.reduce([{ a: 1 }, { a: 2 }], (acc, val) => acc + val.a, 0))
        .toBe(3);
    });

    it('should return initial value for empty arrays', () => {
      expect(arrayLib.reduce([], (acc, val) => acc + val, 5)).toBe(5);
    });
  });

  describe('filter()', () => {
    it('should return elements that pass the predicate', () => {
      expect(arrayLib.filter([1, 2, 3, 4, 5, 6], x => x % 2 === 0)).toEqual([
        2,
        4,
        6,
      ]);
      expect(arrayLib.filter([1, 2, 3, 4], x => x > 2)).toEqual([3, 4]);
    });

    it('should pass element index to predicate', () => {
      expect(arrayLib.filter([10, 20, 30, 40], (x, i) => i % 2 === 0)).toEqual([
        10,
        30,
      ]);
    });

    it('should return empty array if no elements pass predicate', () => {
      expect(arrayLib.filter([1, 3, 5], x => x % 2 === 0)).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(arrayLib.filter([], x => true)).toEqual([]);
    });
  });

  describe('forEach()', () => {
    it('should execute callback for each element and return new array', () => {
      expect(arrayLib.forEach([1, 2, 3], x => x + 1)).toEqual([2, 3, 4]);
    });

    it('should pass element index to callback', () => {
      expect(arrayLib.forEach([10, 20, 30], (x, i) => x + i)).toEqual([10, 21, 32]);
    });

    it('should handle empty arrays', () => {
      expect(arrayLib.forEach([], x => x * 2)).toEqual([]);
    });
  });

  describe('chain() and value()', () => {
    it('should allow chaining operations with value() returning the final result', () => {
      expect(arrayLib.chain([1, 2, 3]).take(2).skip(1).value()).toEqual([2]);
    });

    it('should correctly implement the example from requirements', () => {
      expect(arrayLib.chain([1, 2, 3]).take(2).skip(1).value()).toEqual([2]);
    });

    it('should allow chaining multiple operations in sequence', () => {
      const result = arrayLib
        .chain([1, 2, 3, 4, 5, 6])
        .filter(x => x % 2 === 0) // [2, 4, 6]
        .map(x => x * 2) // [4, 8, 12]
        .take(2) // [4, 8]
        .value();

      expect(result).toEqual([4, 8]);
    });

    it('should handle chain with map operation', () => {
      expect(arrayLib.chain([1, 2, 3]).map(x => x * 3).value()).toEqual([3, 6, 9]);
    });

    it('should handle chain with filter operation', () => {
      expect(arrayLib.chain([1, 2, 3, 4]).filter(x => x > 2).value()).toEqual([
        3,
        4,
      ]);
    });

    it('should handle chain with forEach operation', () => {
      expect(arrayLib.chain([1, 2, 3]).forEach(x => x + 10).value()).toEqual([
        11,
        12,
        13,
      ]);
    });

    it('should handle chain with reduce operation', () => {
      expect(arrayLib.chain([1, 2, 3]).reduce((acc, val) => acc + val, 0).value())
        .toBe(6);
    });

    it('should handle empty arrays in chain', () => {
      expect(arrayLib.chain([]).take(2).map(x => x * 2).value()).toEqual([]);
    });

    it('should handle complex chains with multiple operations', () => {
      const result = arrayLib
        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .filter(x => x % 2 === 0) // [2, 4, 6, 8, 10]
        .take(4) // [2, 4, 6, 8]
        .skip(1) // [4, 6, 8]
        .map(x => x * x) // [16, 36, 64]
        .value();

      expect(result).toEqual([16, 36, 64]);
    });
  });
});
