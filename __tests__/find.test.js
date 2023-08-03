import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  test("find: should return first grown up over 17", () => {
    const ages = [11, 23, 51, 60, 12];
    expect(firstGrownUp(ages)).toBe(23);
  });

  test("find: should return first orange", () => {
    const fruits = ["apple", "grape", "orange"];
    expect(firstOrange(fruits)).toBe("orange")
  });

  test("find: should return first name over 5 length", () => {
    const names = ["Mich","Raymond","Gae","Sayra"];
    expect(firstLengthOver5Name(names)).toBe("Raymond")
  });
});
