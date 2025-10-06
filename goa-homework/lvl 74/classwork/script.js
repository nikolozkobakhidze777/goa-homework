// საკლასო დავალება:

// Write a function that has 5 parameters and it concatenates all string arguments passed to it.

function concall(a, b, c, d, e) {
  let result = ''
  for (let str of arguments) {
    result += str
  }
  return result
}
