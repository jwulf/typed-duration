import { Duration } from "..";

describe("milliseconds.of", () => {
  const MILLISECONDS = "MILLISECONDS";
  it("produces a milliseconds object from a number", () => {
    const ms = Duration.milliseconds.of(500);
    expect(ms.value).toBe(500);
    expect(ms.type).toBe(MILLISECONDS);
  });
  it("produces a milliseconds object from a seconds object", () => {
    const sec = Duration.seconds.of(10);
    const ms = Duration.milliseconds.of(sec);
    expect(ms.value).toBe(10000);
    expect(ms.type).toBe(MILLISECONDS);
  });
  it("produces a milliseconds object from a minutes object", () => {
    const m = Duration.minutes.of(1);
    const ms = Duration.milliseconds.of(m);
    expect(ms.value).toBe(60000);
    expect(ms.type).toBe(MILLISECONDS);
  });
  it("produces a milliseconds object from an hours object", () => {
    const h = Duration.hours.of(1);
    const ms = Duration.milliseconds.of(h);
    expect(ms.value).toBe(60 * 60 * 1000);
    expect(ms.type).toBe(MILLISECONDS);
  });
  it("produces a milliseconds object from a days object", () => {
    const d = Duration.days.of(1);
    const ms = Duration.milliseconds.of(d);
    expect(ms.value).toBe(24 * 60 * 60 * 1000);
    expect(ms.type).toBe(MILLISECONDS);
  });
});

describe("milliseconds.from", () => {
  it("produces a number from a milliseconds object", () => {
    const ms = Duration.milliseconds.of(100);
    const num = Duration.milliseconds.from(ms);
    expect(num).toBe(100);
  });
  it("produces the correct value from a seconds object", () => {
    const s = Duration.seconds.of(10);
    const ms = Duration.milliseconds.from(s);
    expect(ms).toBe(10000);
  });
  it("produces the correct value from a minutes object", () => {
    const m = Duration.minutes.of(5);
    const ms = Duration.milliseconds.from(m);
    expect(ms).toBe(5 * 60 * 1000);
  });
  it("produces the correct value from a hours object", () => {
    const h = Duration.hours.of(2);
    const ms = Duration.milliseconds.from(h);
    expect(ms).toBe(2 * 60 * 60 * 1000);
  });
  it("produces the correct value from a days object", () => {
    const d = Duration.days.of(2);
    const ms = Duration.milliseconds.from(d);
    expect(ms).toBe(2 * 24 * 60 * 60 * 1000);
  });
});
