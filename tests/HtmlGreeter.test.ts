import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter adds tagName parameter to parent's greet method", () => {
  test("HtmlGreeter greet method returns string of greeting and name wrapped in tagName default value h1", () => {
    const greeter1: HtmlGreeter = new HtmlGreeter("Bonjour");
    expect(greeter1.greet("Ryan")).toBe("<h1>Bonjour, Ryan!</h1>");
  });
  test("HtmlGreeter greet method returns string of greeting and name wrapped in tagName when provided in parameter", () => {
    const greeter1: HtmlGreeter = new HtmlGreeter("Bonsoir", "div");
    expect(greeter1.greet("Michel")).toBe("<div>Bonsoir, Michel!</div>");
  });
});
