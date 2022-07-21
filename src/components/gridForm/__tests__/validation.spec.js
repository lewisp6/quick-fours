import { describe, it, expect } from "vitest";

import { validate } from "../validation";

describe("validation", () => {
  it("returns a list of empty categories", () => {
    const exampleCategories = {
      categoryOne: {
        one: "",
        two: "content",
      },
      categoryTwo: {
        one: "content",
        two: "",
      },
    };

    const expected = [
      { category: "categoryOne", missingFields: ["one"] },
      { category: "categoryTwo", missingFields: ["two"] },
    ];

    expect(validate(exampleCategories)).toStrictEqual(expected);
  });
});
