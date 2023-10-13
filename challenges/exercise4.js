export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const nextIndex =
    nums.indexOf(n) + 1 !== nums.length ? nums.indexOf(n) + 1 : null;
  return nextIndex ? nums[nextIndex] : null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {
    1: str.replaceAll("0", "").length,
    0: str.replaceAll("1", "").length,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number(String(n).split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  const flatArrs = arrs.flat(Infinity);
  let sum = 0;

  flatArrs.forEach((num) => {
    sum += num;
  });
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  arr[0] = [arr[arr.length - 1], (arr[arr.length - 1] = arr[0])][0];

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let needle = false;
  let values = Object.values(haystack);

  values.forEach((value) => {
    if (
      typeof value === "string" &&
      value.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      needle = true;
    }
  });
  return needle;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const words = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(/\s/);

  const frequencies = {};
  words.forEach((word) => {
    if (!frequencies[word]) {
      frequencies[word] = 0;
    }
    frequencies[word]++;
  });

  return frequencies;
};
