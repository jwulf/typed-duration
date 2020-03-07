import { Duration } from "..";

describe("days.of", () => {
  const DAYS = "DAYS";
  it("produces a days object from a number", () => {
    const d = Duration.days.of(3);
    expect(d.value).toBe(3);
    expect(d.type).toBe(DAYS);
  });
  it("produces a days object from a milliseconds object", () => {
    const ms = Duration.milliseconds.of(10000);
    const d = Duration.days.of(ms);
    expect(d.value).toBe(10000 / 1000 / 60 / 60 / 24);
    expect(d.type).toBe(DAYS);
  });
  it("produces a days object from a seconds object", () => {
    const sec = Duration.seconds.of(120);
    const d = Duration.days.of(sec);
    expect(d.value).toBe(120 / 60 / 60 / 24);
    expect(d.type).toBe(DAYS);
  });
  it("produces a days object from a minutes object", () => {
    const m = Duration.minutes.of(1440);
    const d = Duration.days.of(m);
    expect(d.value).toBe(1);
    expect(d.type).toBe(DAYS);
  });
  it("produces a days object from an hours object", () => {
    const h = Duration.hours.of(48);
    const d = Duration.days.of(h);
    expect(d.value).toBe(2);
    expect(d.type).toBe(DAYS);
  });
  it("produces a days object from a days object", () => {
    const days = Duration.days.of(1);
    const d = Duration.days.of(days);
    expect(d.value).toBe(1);
    expect(d.type).toBe(DAYS);
  });
});

describe("days.from", () => {
  it("produces a number from a days object", () => {
    const s = Duration.days.of(100);
    const num = Duration.days.from(s);
    expect(num).toBe(100);
  });
  it("produces the correct value from a seconds object", () => {
    const sec = Duration.seconds.of(120);
    const s = Duration.days.from(sec);
    expect(s).toBe(120 / 60 / 60 / 24);
  });
  it("produces the correct value from a minutes object", () => {
    const m = Duration.minutes.of(1440);
    const s = Duration.days.from(m);
    expect(s).toBe(1);
  });
  it("produces the correct value from a hours object", () => {
    const h = Duration.hours.of(72);
    const s = Duration.days.from(h);
    expect(s).toBe(3);
  });
  it("produces the correct value from a days object", () => {
    const d = Duration.days.of(2);
    const s = Duration.days.from(d);
    expect(s).toBe(2);
  });
});
