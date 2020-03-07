import { Duration } from "..";

describe("hours.of", () => {
  const HOURS = "HOURS";
  it("produces a hours object from a number", () => {
    const h = Duration.hours.of(3);
    expect(h.value).toBe(3);
    expect(h.type).toBe(HOURS);
  });
  it("produces a hours object from a milliseconds object", () => {
    const ms = Duration.milliseconds.of(10000);
    const h = Duration.hours.of(ms);
    expect(h.value).toBe(10000 / 1000 / 60 / 60);
    expect(h.type).toBe(HOURS);
  });
  it("produces a hours object from a seconds object", () => {
    const sec = Duration.seconds.of(120);
    const h = Duration.hours.of(sec);
    expect(h.value).toBe(120 / 60 / 60);
    expect(h.type).toBe(HOURS);
  });
  it("produces a hours object from a minutes object", () => {
    const m = Duration.minutes.of(1440);
    const d = Duration.hours.of(m);
    expect(d.value).toBe(24);
    expect(d.type).toBe(HOURS);
  });
  it("produces a hours object from an hours object", () => {
    const hours = Duration.hours.of(48);
    const h = Duration.hours.of(hours);
    expect(h.value).toBe(48);
    expect(h.type).toBe(HOURS);
  });
  it("produces a hours object from a days object", () => {
    const days = Duration.days.of(1);
    const h = Duration.hours.of(days);
    expect(h.value).toBe(24);
    expect(h.type).toBe(HOURS);
  });
});

describe("hours.from", () => {
  it("produces a number from a hours object", () => {
    const h = Duration.hours.of(100);
    const num = Duration.hours.from(h);
    expect(num).toBe(100);
  });
  it("produces the correct value from a seconds object", () => {
    const sec = Duration.seconds.of(120);
    const h = Duration.hours.from(sec);
    expect(h).toBe(120 / 60 / 60);
  });
  it("produces the correct value from a minutes object", () => {
    const m = Duration.minutes.of(360);
    const h = Duration.hours.from(m);
    expect(h).toBe(6);
  });
  it("produces the correct value from a hours object", () => {
    const hours = Duration.hours.of(72);
    const h = Duration.hours.from(hours);
    expect(h).toBe(72);
  });
  it("produces the correct value from a days object", () => {
    const d = Duration.days.of(2);
    const h = Duration.hours.from(d);
    expect(h).toBe(48);
  });
});
