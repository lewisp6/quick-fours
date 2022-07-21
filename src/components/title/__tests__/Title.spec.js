import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Title from "../Title.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Title, { props: { title: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
