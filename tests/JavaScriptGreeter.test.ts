import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("javascriptgreeter class that is child  class of greeter", () => {
  test("calling greet method returns bonjour greeting and name but in console.log", () => {
    const greet1: JavaScriptGreeter = new JavaScriptGreeter("Bonjour");
    expect(greet1.greet("Ryan")).toBe("console.log(Bonjour, Ryan)");
  });
  test("calling greet method returns hola greeting and name raul but in console.log", () => {
    const greet1: JavaScriptGreeter = new JavaScriptGreeter("Hola");
    expect(greet1.greet("Raul")).toBe("console.log(Hola, Raul)");
  });
});
