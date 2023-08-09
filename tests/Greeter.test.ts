import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the greeting property  yields the string `Hello`", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the greet method with (Hello, Ryan) yields the string `Hello, Ryan`", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greet("Ryan")).toBe("Hello, Ryan!");
  });
});
