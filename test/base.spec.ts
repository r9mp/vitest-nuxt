import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HelloWorld from "../components/base/HelloWorld.vue";

describe("components > HelloWorld", () => {
  it("Component should return prop with p tag", () => {
    const wrapper = mount(HelloWorld, {
      props: { message: "Hello World" },
    });

    expect(wrapper.html()).toBe("<p>Hello World</p>");
  });
});
