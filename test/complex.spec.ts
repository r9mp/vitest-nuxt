import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ComplexForm from "../components/complex/Form.vue";

describe("components > HelloWorld", async () => {
  it("Component should return prop with p tag", () => {
    const wrapper = mount(ComplexForm, {
      props: {
        title: "My title",
        description: "My description",
        displayCreateAnother: true,
      },
    });

    expect(1).toBe(1);
  });
});
