import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // let filteredArr = [];
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] != -1) {
  //     filteredArr.push(arr[i]);
  //   }
  //   // 150, 160, 170, 180, 190
  // }
  // filteredArr = filteredArr.sort((a, b) => a - b);
  // let sortedArr = [];
  // for (var i = 0; i < arr.length; i++) {
  //   if (i == -1) {
  //     sortedArr.push(arr[i]);
  //   } else {
  //     sortedArr.push(filteredArr[i - 1]);
  //   }
  // }
  // return sortedArr;
  throw new NotImplementedError('Not implemented');
  
  // remove line with error and write your code here
}