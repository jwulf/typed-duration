import { Duration } from "..";

describe("minutes.of", () => {
  const MINUTES = "MINUTES";
  it("produces a minutes object from a number", () => {
    const s = Duration.minutes.of(500);
    expect(s.value).toBe(500);
    expect(s.type).toBe(MINUTES);
  });
  it("produces a minutes object from a milliseconds object", () => {
    const ms = Duration.milliseconds.of(10000);
    const s = Duration.minutes.of(ms);
    expect(s.value).toBe(10 / 60);
    expect(s.type).toBe(MINUTES);
  });
  it("produces a minutes object from a seconds object", () => {
    const sec = Duration.seconds.of(120);
    const s = Duration.minutes.of(sec);
    expect(s.value).toBe(2);
    expect(s.type).toBe(MINUTES);
  });
  it("produces a minutes object from a minutes object", () => {
    const m = Duration.minutes.of(1);
    const s = Duration.minutes.of(m);
    expect(s.value).toBe(1);
    expect(s.type).toBe(MINUTES);
  });
  it("produces a minutes object from an hours object", () => {
    const h = Duration.hours.of(1);
    const s = Duration.minutes.of(h);
    expect(s.value).toBe(60);
    expect(s.type).toBe(MINUTES);
  });
  it("produces a minutes object from a days object", () => {
    const d = Duration.days.of(1);
    const s = Duration.minutes.of(d);
    expect(s.value).toBe(24 * 60);
    expect(s.type).toBe(MINUTES);
  });
});

describe("minutes.from", () => {
  it("produces a number from a minutes object", () => {
    const s = Duration.minutes.of(100);
    const num = Duration.minutes.from(s);
    expect(num).toBe(100);
  });
  it("produces the correct value from a seconds object", () => {
    const sec = Duration.seconds.of(120);
    const s = Duration.minutes.from(sec);
    expect(s).toBe(120 / 60);
  });
  it("produces the correct value from a minutes object", () => {
    const m = Duration.minutes.of(5);
    const s = Duration.minutes.from(m);
    expect(s).toBe(5);
  });
  it("produces the correct value from a hours object", () => {
    const h = Duration.hours.of(2);
    const s = Duration.minutes.from(h);
    expect(s).toBe(2 * 60);
  });
  it("produces the correct value from a days object", () => {
    const d = Duration.days.of(2);
    const s = Duration.minutes.from(d);
    expect(s).toBe(2 * 24 * 60);
  });
});
