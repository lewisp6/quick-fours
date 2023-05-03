import { describe, it, expect } from "vitest";
import { hasMatch, selectTile } from "../gameLogic";

describe("gameLogic", () => {
  describe("selectTile", () => {
    it("should add a tile to a list of selected tiles", () => {
      const selectedList = [];
      selectTile("Test", "Test", selectedList);
      expect(selectedList).toEqual([{ clue: "Test", category: "Test" }]);
    });

    it("should add to the list if called twice", () => {
      const selectedList = [];
      selectTile("Test", "Test", selectedList);
      selectTile("Test", "Test", selectedList);
      expect(selectedList).toEqual([
        { clue: "Test", category: "Test" },
        { clue: "Test", category: "Test" },
      ]);
    });
  });

  describe("hasMatch", () => {
    it("Should return true if four selected tiles share the same categories", () => {
      const selectedList = [
        { clue: "Test", category: "Test" },
        { clue: "Test", category: "Test" },
        { clue: "Test", category: "Test" },
        { clue: "Test", category: "Test" },
      ];

      expect(hasMatch(selectedList, "Test")).toBe(true);
    });

    it("Should return false if four selected tiles do not share the same categories", () => {
      const selectedList = [
        { clue: "Test", category: "Test" },
        { clue: "Test", category: "Egg" },
        { clue: "Test", category: "Test" },
        { clue: "Test", category: "Test" },
      ];

      expect(hasMatch(selectedList, "Test")).toBe(false);
    });
  });
});
