import { describe, it, expect } from "vitest";

import { validate } from "../validation";

describe("validation", () => {
  describe("failures", () => {
    it("returns false if any category is missing a clue", () => {
      const categories = [
        [
          { clue: "", category: "one" },
          { clue: "clue2", category: "one" },
          { clue: "clue3", category: "one" },
          { clue: "clue4", category: "one" },
          { link: "link", category: "one" },
        ],
      ];

      expect(validate(categories)).toEqual(false);
    });

    it("returns false if any category has an undefined clue", () => {
      const categories = [
        [
          { clue: undefined, category: "one" },
          { clue: "clue2", category: "one" },
          { clue: "clue3", category: "one" },
          { clue: "clue4", category: "one" },
          { link: "link", category: "one" },
        ],
        [
          { clue: "sfsfsf", category: "two" },
          { clue: "sfsfsfs", category: "two" },
          { clue: "sfsfsfss", category: "two" },
          { clue: "sfsfsfsss", category: "two" },
          { link: "sfsfsfsssss", category: "two" },
        ],
      ];

      expect(validate(categories)).toEqual(false);
    });

    it("returns false if any link is empty", () => {
      const categories = [
        [
          { clue: "clue1", category: "one" },
          { clue: "clue2", category: "one" },
          { clue: "clue3", category: "one" },
          { clue: "clue4", category: "one" },
          { link: "", category: "one" },
        ],
      ];

      expect(validate(categories)).toEqual(false);
    });

    it("returns false if any link is undefined", () => {
      const categories = [
        [
          { clue: "clue1", category: "one" },
          { clue: "clue2", category: "one" },
          { clue: "clue3", category: "one" },
          { clue: "clue4", category: "one" },
          { link: undefined, category: "one" },
        ],
      ];

      expect(validate(categories)).toEqual(false);
    });

    it('should return false if a clue is not unique', () => {
      const categories = [
        [
          { clue: "clue1", category: "one" },
          { clue: "clue2", category: "one" },
          { clue: "clue3", category: "one" },
          { clue: "clue4", category: "one" },
          { link: "link1", category: "one" },
        ],
        [
          { clue: "clue1", category: "two" },
          { clue: "uniqueClue2", category: "two" },
          { clue: "uniqueClue3", category: "two" },
          { clue: "uniqueClue4", category: "two" },
          { link: "uniqueLink1", category: "two" },
        ]
      ];

      expect(validate(categories)).toEqual(false);
    });
  });

  describe("successes", () => {
    it("returns true if every category contains a clue", () => {
      const categories = [
        [
          { clue: "clue1", category: "one" },
          { clue: "clue2", category: "one" },
          { clue: "clue3", category: "one" },
          { clue: "clue4", category: "one" },
          { link: "link", category: "one" },
        ],
      ];

      expect(validate(categories)).toEqual(true);
    });
  });
});
