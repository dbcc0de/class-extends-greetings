import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class that is child  class of greeter", () => {
  test("checks that the greet method returns with extra !!", () => {
    const greet1: LoudGreeter = new LoudGreeter("Hello", "!!");
    expect(greet1.greet("Ryan")).toBe("Hello, Ryan!!!");
  });
  test("checks that the greet method + addVolume returns extra exclamations", () => {
    const greet1: LoudGreeter = new LoudGreeter("Hello", "!!");
    greet1.addVolume();
    greet1.addVolume();
    expect(greet1.greet("Ryan")).toBe("Hello, Ryan!!!!!");
  });
});
