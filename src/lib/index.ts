interface TypedDuration {
  type: string;
  valueType: "TYPED_DURATION";
  value: number;
  unit: string;
}

export interface Seconds extends TypedDuration {
  type: "SECONDS";
  valueType: "TYPED_DURATION";
  unit: "s";
}

export interface Milliseconds extends TypedDuration {
  type: "MILLISECONDS";
  valueType: "TYPED_DURATION";
  unit: "ms";
}

export interface Minutes extends TypedDuration {
  type: "MINUTES";
  valueType: "TYPED_DURATION";
  unit: "m";
}

export interface Hours extends TypedDuration {
  type: "HOURS";
  valueType: "TYPED_DURATION";
  unit: "h";
}

export interface Days extends TypedDuration {
  type: "DAYS";
  valueType: "TYPED_DURATION";
  unit: "d";
}
export type TimeDuration = Milliseconds | Seconds | Minutes | Hours | Days;
export type MaybeTimeDuration = TimeDuration | number;

/**
 * Returns true if the argument is a typed duration object.
 * Also, acts as a type guard.
 *
 */
export const isTypedDuration = (
  maybeTypedDuration: any
): maybeTypedDuration is TimeDuration =>
  typeof maybeTypedDuration === "object" &&
  maybeTypedDuration.valueType === "TYPED_DURATION";

/**
 * Return the unwrapped number from any typed duration, regardless of its type
 */
export const valueFrom = (time: MaybeTimeDuration): number =>
  isTypedDuration(time) ? time.value : time;

/**
 *
 * Return a string representation, with units. For example: `60000ms`
 */
export const valueOf = (
  time: MaybeTimeDuration,
  defaultUnit: string = ""
): string =>
  `${valueFrom(time)}${isTypedDuration(time) ? time.unit : defaultUnit}`;

const isSeconds = (maybeSeconds: MaybeTimeDuration): maybeSeconds is Seconds =>
  isTypedDuration(maybeSeconds) && maybeSeconds.type === "SECONDS";

const isMilliseconds = (
  maybeMilliseconds: MaybeTimeDuration
): maybeMilliseconds is Milliseconds =>
  isTypedDuration(maybeMilliseconds) &&
  maybeMilliseconds.type === "MILLISECONDS";

const isMinutes = (maybeMinutes: MaybeTimeDuration): maybeMinutes is Minutes =>
  isTypedDuration(maybeMinutes) && maybeMinutes.type === "MINUTES";

const isHours = (maybeHours: MaybeTimeDuration): maybeHours is Hours =>
  isTypedDuration(maybeHours) && maybeHours.type === "HOURS";

const isDays = (maybeDays: MaybeTimeDuration): maybeDays is Days =>
  isTypedDuration(maybeDays) && maybeDays.type === "DAYS";

const isNumber = (maybeNumber: MaybeTimeDuration): maybeNumber is number =>
  typeof maybeNumber === "number";

const newSeconds = (time: number): Seconds => ({
  type: "SECONDS",
  value: time,
  valueType: "TYPED_DURATION",
  unit: "s"
});

export function secondsOf(time: MaybeTimeDuration): Seconds {
  return isSeconds(time)
    ? time
    : isNumber(time)
    ? newSeconds(time)
    : isMilliseconds(time)
    ? secondsOf(time.value / 1000)
    : isMinutes(time)
    ? secondsOf(time.value * 60)
    : isHours(time)
    ? secondsOf(minutesOf(time))
    : isDays(time)
    ? secondsOf(minutesOf(hoursOf(time)))
    : time;
}

const newMilliseconds = (time: number): Milliseconds => ({
  type: "MILLISECONDS",
  value: time,
  valueType: "TYPED_DURATION",
  unit: "ms"
});

export function millisecondsOf(time: MaybeTimeDuration): Milliseconds {
  return isMilliseconds(time)
    ? time
    : isNumber(time)
    ? newMilliseconds(time)
    : isSeconds(time)
    ? millisecondsOf(time.value * 1000)
    : isMinutes(time)
    ? millisecondsOf(secondsOf(time))
    : isHours(time)
    ? millisecondsOf(secondsOf(minutesOf(time)))
    : isDays(time)
    ? millisecondsOf(secondsOf(minutesOf(hoursOf(time))))
    : time;
}

const newMinutes = (time: number): Minutes => ({
  type: "MINUTES",
  value: time,
  valueType: "TYPED_DURATION",
  unit: "m"
});

export function minutesOf(time: MaybeTimeDuration): Minutes {
  return isMinutes(time)
    ? time
    : isNumber(time)
    ? newMinutes(time)
    : isMilliseconds(time)
    ? minutesOf(secondsOf(time))
    : isSeconds(time)
    ? newMinutes(time.value / 60)
    : isHours(time)
    ? newMinutes(time.value * 60)
    : isDays(time)
    ? minutesOf(hoursOf(time))
    : time;
}

const newHours = (time: number): Hours => ({
  type: "HOURS",
  value: time,
  valueType: "TYPED_DURATION",
  unit: "h"
});

export function hoursOf(time: MaybeTimeDuration): Hours {
  return isHours(time)
    ? time
    : isNumber(time)
    ? newHours(time)
    : isMilliseconds(time)
    ? hoursOf(minutesOf(secondsOf(time)))
    : isSeconds(time)
    ? hoursOf(minutesOf(time))
    : isMinutes(time)
    ? hoursOf(time.value / 60)
    : isDays(time)
    ? hoursOf(time.value * 24)
    : time;
}

const newDays = (time: number): Days => ({
  type: "DAYS",
  value: time,
  valueType: "TYPED_DURATION",
  unit: "d"
});

export function daysOf(time: MaybeTimeDuration): Days {
  return isDays(time)
    ? time
    : isNumber(time)
    ? newDays(time)
    : isMilliseconds(time)
    ? daysOf(hoursOf(minutesOf(secondsOf(time))))
    : isSeconds(time)
    ? daysOf(hoursOf(minutesOf(time)))
    : isMinutes(time)
    ? daysOf(hoursOf(time))
    : isHours(time)
    ? daysOf(time.value / 24)
    : time;
}

export const numberFrom = (time: MaybeTimeDuration): number =>
  isTypedDuration(time) ? time.value : time;

export const millisecondsFrom = (time: MaybeTimeDuration): number =>
  isNumber(time)
    ? time
    : isMilliseconds(time)
    ? numberFrom(time)
    : millisecondsFrom(millisecondsOf(time));

export const secondsFrom = (time: MaybeTimeDuration): number =>
  isNumber(time)
    ? time
    : isSeconds(time)
    ? numberFrom(time)
    : secondsFrom(secondsOf(time));

export const minutesFrom = (time: MaybeTimeDuration): number =>
  isNumber(time)
    ? time
    : isMinutes(time)
    ? numberFrom(time)
    : minutesFrom(minutesOf(time));

export const hoursFrom = (time: MaybeTimeDuration): number =>
  isNumber(time)
    ? time
    : isHours(time)
    ? numberFrom(time)
    : hoursFrom(hoursOf(time));

export const daysFrom = (time: MaybeTimeDuration): number =>
  isNumber(time)
    ? time
    : isDays(time)
    ? numberFrom(time)
    : daysFrom(daysOf(time));
