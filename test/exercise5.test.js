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
  test("should not be case sensitive", () => {
    expect(isValidDNA("z")).toBe(false);
    expect(isValidDNA("CGATTAGCACa")).toBe(true);
    expect(isValidDNA("cgatttagc")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("reverses the digits of a number", () => {
    expect(getComplementaryDNA("CGAT")).toBe("GCTA");
    expect(getComplementaryDNA("TCGA")).toBe("AGCT");
  });
  test("should not be case sensitive", () => {
    expect(getComplementaryDNA("acgt")).toBe("TGCA");
    expect(getComplementaryDNA("CGat")).toBe("GCTA");
    expect(getComplementaryDNA("t")).toBe("A");
  });
});

describe("isItPrime", () => {
  test("returns false is number is not prime", () => {
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(12)).toBe(false);
  });
  test("returns true if number is a prime", () => {
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(13)).toBe(true);
  });
  test("returns false if 1 (1 is not a prime)", () => {
    expect(isItPrime(1)).toBe(false);
  });

  test("returns false if number is less than 1", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(-1)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns matrix with correct number of values", () => {
    expect(createMatrix(3, "baa")).toEqual([
      ["baa", "baa", "baa"],
      ["baa", "baa", "baa"],
      ["baa", "baa", "baa"],
    ]);
    expect(createMatrix(2, "moo")).toEqual([
      ["moo", "moo"],
      ["moo", "moo"],
    ]);
  });
  test("Returns [] if num is 0 or less", () => {
    expect(createMatrix(0, "any")).toEqual([]);
  });
});

describe("areWeCovered", () => {
  test("returns true enough staff are scheduled (3)", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "David", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Josie", rota: ["Thursday", "Sunday", "Monday", "Wednesday"] },
      { name: "Eddie", rota: ["Tuesday", "Sunday", "Monday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(true);
  });
});
