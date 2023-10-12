export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNums = nums.filter(function (num) {
    return num < 1;
  });

  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const namesBeginningWith = names.filter(function (name) {
    return name[0] === char;
  });

  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = words.filter(function (word) {
    return word.includes("to ");
  });

  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const ints = nums.filter(function (num) {
    return num % 1 === 0;
  });

  return ints;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = users.map((user) => {
    return user.data.city.displayName;
  });

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = nums.map((num) => {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });

  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const sentencesContaining = sentences.filter(function (sentence) {
    return sentence.toLowerCase().includes(str.toLowerCase());
  });

  return sentencesContaining;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = triangles.map((triangle) => {
    return Math.max(...triangle);
  });

  return longestSides;
}
