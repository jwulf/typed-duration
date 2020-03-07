# Typed Duration 

![Node.js CI](https://github.com/jwulf/typed-duration/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/typed-duration.svg)](https://badge.fury.io/js/typed-duration)

A Zero-dependency typed duration library for JavaScript/TypeScript. Express and convert time durations with type-safety. 

This library uses [Value Object Typing](https://medium.com/@hannespetri/type-safe-value-objects-in-typescript-d1b119c4f5cd) to allow you to express time durations in a type-safe way, and perform conversion between different units.

## Use 

Install the library to your project:

```
npm i typed-duration
```

## Use 

Consider the following code:

```TypeScript
setTimeout(doSomething, 1000)
```

It's pretty clear that these are milliseconds, because you know the API. Typically, developers might do something like:

```TypeScript
setTimeout(doSomething, 5 * 60 * 1000) // Every Five Minutes
```

With this library, you can do this: 

```TypeScript
import { Duration } from 'typed-duration'
const { milliseconds, minutes } = Duration

const period = minutes.of(5)

setTimeout(doSomething, milliseconds.from(period)) // Every Five Minutes
```

Well, that looks like more code. Yes, it is. It is also _more semantically expressive_ of the programmer's intent, which makes it _better for maintenance_.

The situation is exacerbated when you expose a programming API that takes a time duration as a `number`. We all know that `setTimeout` takes milliseconds, but how do you communicate to consumers of your API what the time units are for `timeout` in _your_ API call?

You should, of course, document it, and put it in JSDoc comments so that they can get hinting in their IDE. 

You could call it `timeoutSeconds` to make it clear that it expects seconds.

Or you could make it take a `TimeDuration` and allow them to pass in whatever they want, and convert it to the units you need, like this:

```TypeScript
import { Duration, TimeDuration } from 'typed-duration'

function executePeriodically(fn: () => void, period: TimeDuration) {
    setTimeout(fn, Duration.milliseconds.from(period))
}
```

Now, consumers of this function can call it like this:

```TypeScript
import { Duration } from 'typed-duration'
const { milliseconds, seconds, minutes, hours, days } = Duration

// Every 2.5 seconds
executePeriodically(doSomething, milliseconds.of(2500))

// Every 10 seconds
executePeriodically(doSomething, seconds.of(10))

// Every 15 minutes
executePeriodically(doSomething, minutes.of(15))

// Every 3 hours
executePeriodically(doSomething, hours.of(3))

// Every 6 days
executePeriodically(doSomething, days.of(6))
```

**#winning**

## Backward-compatible API 

If you have an existing API you want to add this to, you can use the `MaybeTimeDuration` type, like this:

```TypeScript
import { Duration, MaybeTimeDuration } from 'typed-duration'

function executePeriodically(fn: () => void, period: MaybeTimeDuration) {
    setTimeout(fn, Duration.milliseconds.from(period))
}

// You can pass in a typed duration, and it will convert to a number of milliseconds
executePeriodically(doSomething, Duration.seconds.from(20))

// a number will be allowed by the MaybeTimeDuration type
// and the milliseconds.from() call will simply pass it through
executePeriodically(doSomething, 2500)
```

## Feature Requests, Bug Reports

See the [GitHub repo](https://github.com/jwulf/typed-duration).