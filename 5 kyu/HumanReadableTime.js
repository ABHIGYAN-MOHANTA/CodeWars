// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600);
  seconds = Math.floor(seconds % 3600);
  let m = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (seconds < 10) seconds = "0" + seconds;
  return `${h}:${m}:${seconds}`;
}

console.log(humanReadable(35));
