export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let namesBeginningWith = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      namesBeginningWith.push(names[i]);
    }
  }
  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let verbs = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes("to ")) {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let ints = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 1 === 0) {
      ints.push(nums[i]);
    }
  }
  return ints;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];

  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];

  //Math.round((num + Number.EPSILON) * 100) / 100
  for (let i = 0; i < nums.length; i++) {
    squareRoots.push(Math.round(Math.sqrt(nums[i]) * 100) / 100);
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentencesContaining = [];

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      sentencesContaining.push(sentences[i]);
    }
  }
  return sentencesContaining;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];

  //Math.round((num + Number.EPSILON) * 100) / 100
  for (let i = 0; i < triangles.length; i++) {
    let longestSide = triangles[i][0];
    for (let j = 1; j < triangles[i].length; j++) {
      if (triangles[i][j] > longestSide) {
        longestSide = triangles[i][j];
      }
    }
    longestSides.push(longestSide);
  }
  return longestSides;
}
