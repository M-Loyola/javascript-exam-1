import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  test("map: should return array with added serial numbers", () => {
    const fruits = ["apple","mango","banana"];
    const result = addSerialNumber(fruits);
    expect(result).toEqual(["1. apple", "2. mango", "3. banana"]);
  });
  
  test("map: should return array with half numbers", () => {
    const numbers = [5,10,15,20];
    const result = halfNumbers(numbers);
    expect(result).toEqual([2.5,5,7.5,10]);
  });

  test("map: should return array with splice names", () => {
    const names = ["John","Jen","Rock"];
    const result = spliceNames(names);
    expect(result).toEqual(["Hello John","Hello Jen","Hello Rock"]);
  });
});
