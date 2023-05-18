import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import CategoryGuess from "../CategoryGuess.vue";

describe("CategoryGuess", () => {
  const label = "test";
  const link = "All words contain a transport method";

  it("should have a label for an input and button", () => {
    render(CategoryGuess, { props: { label, link } });
    screen.getByText(label);
    screen.getByText("Guess");
  });

  it("should show correct if guess entered matches link", async () => {
    render(CategoryGuess, { props: { label, link } });
    const guessInput = screen.getByLabelText(label);
    await fireEvent.update(guessInput, link);
    await fireEvent.click(screen.getByText("Guess"));
    expect(screen.getByText("Correct!")).toBeVisible();
  });

  it("should show correct if guess closesly matches link", async () => {
    render(CategoryGuess, { props: { label, link } });
    const guessInput = screen.getByLabelText(label);
    await fireEvent.update(guessInput, "transport");
    await fireEvent.click(screen.getByText("Guess"));
    expect(screen.getByText("Correct!")).toBeVisible();
  });

  it("should show incorrect and the correct link when guess does not match", async () => {
    render(CategoryGuess, { props: { label, link } });
    const guessInput = screen.getByLabelText(label);
    await fireEvent.update(guessInput, "something random");
    await fireEvent.click(screen.getByText("Guess"));
    expect(screen.getByText("Incorrect: " + link)).toBeVisible();
  });
});
