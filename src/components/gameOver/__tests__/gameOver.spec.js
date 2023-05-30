import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import GameOver from "../gameOver.vue";

describe("Game over", () => {
  const categories = [
    [
      { clue: "Word 1", category: "one" },
      { clue: "Word 2", category: "one" },
      { clue: "Word 3", category: "one" },
      { clue: "Word 4", category: "one" },
      { link: "Link", category: "one" },
    ],
    [
      { clue: "sfsfsf", category: "two" },
      { clue: "sfsfsfs", category: "two" },
      { clue: "sfsfsfss", category: "two" },
      { clue: "sfsfsfsss", category: "two" },
      { link: "link2", category: "two" },
    ],
  ];

  it("should show game over when win is false", () => {
    render(GameOver, { props: { win: false } });
    expect(screen.getByText("Game Over")).toBeInTheDocument();
  });

  it("should show well done if the score is four", () => {
    render(GameOver, { props: { win: true } });
    expect(screen.getByText("Well Done :-)"));
  });

  it("should show the answers", () => {
    render(GameOver, { props: { win: true, categories } });
    expect(screen.getByText("Word 1, Word 2, Word 3, Word 4 : Link"));
  });
});
