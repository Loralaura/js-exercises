export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [];

  nums.forEach(function (num) {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let namesBeginningWith = [];

  names.forEach(function (name) {
    if (name[0] === char) {
      namesBeginningWith.push(name);
    }
  });
  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let verbs = [];

  words.forEach(function (word) {
    if (word.includes("to ")) {
      verbs.push(word);
    }
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let ints = [];

  nums.forEach(function (num) {
    if (num % 1 === 0) {
      ints.push(num);
    }
  });
  return ints;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];

  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];

  nums.forEach(function (num) {
    squareRoots.push(Math.round(Math.sqrt(num) * 100) / 100);
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentencesContaining = [];

  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      sentencesContaining.push(sentence);
    }
  });
  return sentencesContaining;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];

  triangles.forEach(function (triangle) {
    let longestSide = triangle[0];
    triangle.forEach(function (side) {
      if (side > longestSide) {
        longestSide = side;
      }
    });
    longestSides.push(longestSide);
  });
  return longestSides;
}
