import {
  millisecondsOf,
  millisecondsFrom,
  secondsOf,
  secondsFrom,
  minutesOf,
  minutesFrom,
  hoursOf,
  hoursFrom,
  daysOf,
  daysFrom,
  valueFrom,
  valueOf,
  isTypedDuration
} from "./lib";

export const Duration = {
  milliseconds: {
    of: millisecondsOf,
    from: millisecondsFrom
  },
  seconds: {
    of: secondsOf,
    from: secondsFrom
  },
  minutes: {
    of: minutesOf,
    from: minutesFrom
  },
  hours: {
    of: hoursOf,
    from: hoursFrom
  },
  days: {
    of: daysOf,
    from: daysFrom
  },
  value: {
    from: valueFrom,
    of: valueOf
  },
  isTypedDuration
};

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
