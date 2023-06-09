import { describe, it, expect } from "vitest";
import { compareStrings } from "../../logic/compareStrings";

describe("compareStrings", () => {
  it("should return true when strings are the same", () => {
    expect(compareStrings("testing", "testing")).toBe(true);
  });

  it("should return false when strings aren't similar at all", () => {
    expect(compareStrings("timely", "testing")).toBe(false);
  });

  it("should return true when strings are similar", () => {
    expect(compareStrings("football", "football teams")).toBe(true);
  });

  it("should return true when strings are similar but different spelling", () => {
    expect(compareStrings("singers", "All famous singers")).toBe(true);
  });

  it("should return true when strings are in different cases", () => {
    expect(compareStrings("FOOTBALL", "this is football")).toBe(true);
  });
});
