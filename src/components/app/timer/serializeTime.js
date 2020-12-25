const compose = (...fn) => arg => {
  return fn.reduce((reducer, f) => f(reducer), arg);
};

const serializeTime = time => ({
  minutes: (time - time % 60) / 60,
  seconds: time % 60,
});

const binaryMinutes = time => ({
  ...time,
  minutes: time.minutes < 10 ? ('0' + time.minutes) : time.minutes,
});

const binarySeconds = time => ({
  ...time,
  seconds: time.seconds < 10 ? ('0' + time.seconds) : time.seconds,
});

const transformTime = compose(serializeTime, binaryMinutes, binarySeconds);

export default transformTime;