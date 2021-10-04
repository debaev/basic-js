import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let numArr = `${n}`.split('').map(Number);
  return Math.max(...numArr.map((_,i)=>{
    let obt = numArr.slice();
    obt.splice(i,1);
    return Number(obt.join(''))}))
  // remove line with error and write your code here
}
