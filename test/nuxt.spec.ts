import { describe, expect, it } from "vitest";
import { setup } from "@nuxt/test-utils-edge";

describe("My nuxt test", async () => {
  await setup({
    // test context options
  });

  it("my test", () => {
    expect(1).toBe(1);
  });
});
