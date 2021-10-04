import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(num) {
  let sum = 0;
  let digits = [];
  let strNum = '' + num;
  for (let i = 0; i < strNum.length; i++) {
    digits.push(+strNum[i]);
    sum += digits[i];
  }
  if (sum > 9) {
    sum = getSumOfDigits(sum);
  } 
  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}