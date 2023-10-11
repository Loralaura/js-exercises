export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map((num) => num ** 2);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let total = 0;
  for (let i = 0; i < people.length; i++) {
    total += people[i].subjects.length;
  }
  return total;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let hasIngredient = false;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      hasIngredient = true;
    }
  }
  return hasIngredient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
