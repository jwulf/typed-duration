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
  valueFrom,
  isTypedDuration
};

export type {
  Milliseconds,
  Seconds,
  Minutes,
  Hours,
  Days,
  TimeDuration,
  MaybeTimeDuration,
  
} from "./lib";
