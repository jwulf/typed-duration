import { Duration } from "..";

describe("seconds.of", () => {
  const SECONDS = "SECONDS";
  it("produces a seconds object from a number", () => {
    const s = Duration.seconds.of(500);
    expect(s.value).toBe(500);
    expect(s.type).toBe(SECONDS);
  });
  it("produces a seconds object from a milliseconds object", () => {
    const ms = Duration.milliseconds.of(10000);
    const s = Duration.seconds.of(ms);
    expect(s.value).toBe(10);
    expect(s.type).toBe(SECONDS);
  });
  it("produces a seconds object from a seconds object", () => {
    const sec = Duration.seconds.of(10);
    const s = Duration.seconds.of(sec);
    expect(s.value).toBe(10);
    expect(s.type).toBe(SECONDS);
  });
  it("produces a seconds object from a minutes object", () => {
    const m = Duration.minutes.of(1);
    const s = Duration.seconds.of(m);
    expect(s.value).toBe(60);
    expect(s.type).toBe(SECONDS);
  });
  it("produces a seconds object from an hours object", () => {
    const h = Duration.hours.of(1);
    const s = Duration.seconds.of(h);
    expect(s.value).toBe(60 * 60);
    expect(s.type).toBe(SECONDS);
  });
  it("produces a seconds object from a days object", () => {
    const d = Duration.days.of(1);
    const s = Duration.seconds.of(d);
    expect(s.value).toBe(24 * 60 * 60);
    expect(s.type).toBe(SECONDS);
  });
});

describe("seconds.from", () => {
  it("produces a number from a seconds object", () => {
    const s = Duration.seconds.of(100);
    const num = Duration.seconds.from(s);
    expect(num).toBe(100);
  });
  it("produces the correct value from a seconds object", () => {
    const sec = Duration.seconds.of(10);
    const s = Duration.seconds.from(sec);
    expect(s).toBe(10);
  });
  it("produces the correct value from a minutes object", () => {
    const m = Duration.minutes.of(5);
    const s = Duration.seconds.from(m);
    expect(s).toBe(5 * 60);
  });
  it("produces the correct value from a hours object", () => {
    const h = Duration.hours.of(2);
    const s = Duration.seconds.from(h);
    expect(s).toBe(2 * 60 * 60);
  });
  it("produces the correct value from a days object", () => {
    const d = Duration.days.of(2);
    const s = Duration.seconds.from(d);
    expect(s).toBe(2 * 24 * 60 * 60);
  });
});
