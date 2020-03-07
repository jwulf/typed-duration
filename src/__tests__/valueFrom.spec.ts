import { Duration } from "..";

describe("valueFrom", () => {
  it("Unwraps a TimeDuration to a number", () => {
    const ms = Duration.milliseconds.of(100);
    const num = Duration.valueFrom(ms);
    expect(num).toBe(100);
  });
  it("Unwraps a number to a number", () => {
    const num = Duration.valueFrom(100);
    expect(num).toBe(100);
  });
});
