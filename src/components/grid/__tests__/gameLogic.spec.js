import { describe, it, expect } from "vitest";
import { hasMatch, selectTile } from "../gameLogic";

describe("gameLogic", () => {
  describe("selectTile", () => {
    it("should add a tile to a list of selected tiles", () => {
      const selectedList = [];
      selectTile("Test", "Test", selectedList);
      expect(selectedList).toEqual([{ clue: "Test", category: "Test" }]);
    });

    it("should add to the list if called twice with different clues", () => {
      const selectedList = [];
      selectTile("Test", "Test", selectedList);
      selectTile("Test 2", "Test", selectedList);
      expect(selectedList).toEqual([
        { clue: "Test", category: "Test" },
        { clue: "Test 2", category: "Test" },
      ]);
    });

    it("should remove a clue from the list if it is already in the list", () => {
      const selectedList = [{ clue: "Test", category: "Test" }];
      selectTile("Test", "Test", selectedList);
      expect(selectedList).toEqual([]);
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