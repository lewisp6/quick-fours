import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import CountdownTimer from "./CountdownTimer.vue";

describe("CountdownTimer", () => {
  it("should start with the time set to 0", () => {
    render(CountdownTimer, {
      propsData: {
        timeRemaining: 0,
      },
    });

    expect(screen.getByText("0:00")).toBeVisible();
  });

  it("should count down the time", () => {
    render(CountdownTimer, {
      timeRemaining: 1000,
    });

    expect(screen.getByText("0:10"));


    // const component = new CountdownTimer({
    //   propsData: {
    //     timeRemaining: 10,
    //   },
    // });

    // expect(component.minutes).toBe(0);
    // expect(component.seconds).toBe(10);

    // setTimeout(() => {
    //   expect(component.minutes).toBe(0);
    //   expect(component.seconds).toBe(9);
    // }, 1000);

    // setTimeout(() => {
    //   expect(component.minutes).toBe(0);
    //   expect(component.seconds).toBe(8);
    // }, 2000);
  });

  // it("should emit an event when the time is up", (done) => {
  //   const component = new CountdownTimer({
  //     propsData: {
  //       timeRemaining: 1,
  //     },
  //   });

  //   component.$on("update:time", (time) => {
  //     expect(time).toBe("0:00");
  //     done();
  //   });
  // });
});
