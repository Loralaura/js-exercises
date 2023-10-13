/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  let sum = 0;

  arr.forEach((num) => {
    if (num % 3 == 0 || num % 5 == 0) {
      sum += num;
    }
  });
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  //Fun fact, some DNA models also include N to denote a gap in DNA.
  return /^[CGATcgat]*$/.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (isValidDNA(str) === false) throw new Error("DNA string not valid");

  let complementaryDNA = "";

  /*note: In geneology, uppercase and lowercase letters indicate important
   * information, however this does not have an agreed standardisation (and
   * overcomplicates things) so I have opted for a default to uppercase instead.
   */
  str.split("").forEach((char) => {
    switch (char.toUpperCase()) {
      case "C":
        complementaryDNA += "G";
        break;
      case "G":
        complementaryDNA += "C";
        break;
      case "A":
        complementaryDNA += "T";
        break;
      case "T":
        complementaryDNA += "A";
        break;
    }
  });
  return complementaryDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} num
 * @returns {Boolean}
 */
export const isItPrime = (num) => {
  if (num === undefined) throw new Error("n is required");

  let isPrime = num > 1 ? true : false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} num
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (num, fill) => {
  if (num === undefined) throw new Error("num is required");
  if (fill === undefined) throw new Error("fill is required");

  let matrix = [];

  for (let i = 0; i < num; i++) {
    let tempArr = [];
    for (let j = 0; j < num; j++) {
      tempArr.push(fill);
    }
    matrix.push(tempArr);
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};
