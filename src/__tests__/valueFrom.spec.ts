import { Duration } from "..";

describe("value.from", () => {
  it("Unwraps a TimeDuration to a number", () => {
    const ms = Duration.milliseconds.of(100);
    const num = Duration.value.from(ms);
    expect(num).toBe(100);
  });
  it("Unwraps a number to a number", () => {
    const num = Duration.value.from(100);
    expect(num).toBe(100);
  });
});

describe("value.of", () => {
  it("Serializes a TimeDuration to a string", () => {
    const ms = Duration.milliseconds.of(100);
    const str = Duration.value.of(ms);
    expect(str).toBe("100ms");
  });
  it("Serializes a number to a string", () => {
    const str = Duration.value.of(100);
    expect(str).toBe("100");
  });
  it("Serializes a number to a string with a default unit", () => {
    const str = Duration.value.of(10, "h");
    expect(str).toBe("10h");
  });
});
