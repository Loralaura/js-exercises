import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("returns the sum of all multiples in the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 6, 12, 65, 23, 40, 1, 6])).toBe(129);
  });

  test("if only one multiple is present, only that number is returned", () => {
    expect(sumMultiples([7, 5, 1, 2])).toBe(5);
  });

  test("if no multiples are found, should return 0", () => {
    expect(sumMultiples([7, 8, 1, 2])).toBe(0);
  });
});
/*
describe("isValidDNA", () => {
  test("returns true if a string is a valid DNA sequence (only contains Cs, Gs, As, Ts)", () => {
    expect(isValidDNA("CGATTAGCACAC")).toBe(true);
    expect(isValidDNA("CCCCCCCCCCCC")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
  });

  test("returns false if a string contains any disallowed chars (CGA or T)", () => {
    expect(isValidDNA("F")).toBe(false);
    expect(isValidDNA("CGATTAGCACAQ")).toBe(false);
    expect(isValidDNA("QCGATAGCACAT")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("reverses the digits of a number", () => {
    expect(getComplementaryDNA(5)).toBe(5);
    expect(getComplementaryDNA(104)).toBe(401);
    expect(getComplementaryDNA(12345)).toBe(54321);
    expect(getComplementaryDNA(100)).toBe(1); // No leading 0 necessary
  });
});

describe("isItPrime", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(isItPrime(arrs)).toBe(44);
  });
});

describe("createMatrix", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(createMatrix([1, 2])).toEqual([2, 1]);
    expect(createMatrix([1, 2, 3])).toEqual([3, 2, 1]);
    expect(createMatrix([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(createMatrix([1])).toEqual([1]);
    expect(createMatrix([])).toEqual([]);
  });
});

describe("areWeCovered", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(areWeCovered(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(areWeCovered(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(areWeCovered(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(areWeCovered(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    expect(areWeCovered(obj1, "warrington")).toBe(true);
    expect(areWeCovered(obj1, "linnmon")).toBe(true);
    expect(areWeCovered(obj1, "Liverpool")).toBe(false);
  });
});
*/
