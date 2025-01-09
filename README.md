# Testing practice

A small exercise in Test Driven Development for [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)'s fullstack Javascript course. The assignment was to implement the methods below using a TDD workflow.

What I learned is that you _**really**_ do not need to account for types in every function. If you're that paranoid about type safety, just use Typescript for Pete's sake. The test driven development cycle really brought that to light. Also, I don't really like Jest's syntax. I'm not making this up: typing so many arrow functions might be finally pushing me over the edge of carpal tunnel syndrome. Now that copilot has a free tier, I might have it write my initial tests.

### Public methods

- `.capitalize(string)` - Takes in a `string` and returns another string where the first character is uppercase.
- `.reverseString(string)` - Reverses a `string` and returns the resulting string.
- `.caesarCipher(string, shiftAmount)` - Applies a Caesar cipher to `string`, shifting each letter by `shiftAmount`. Preserves capitalization and leaves punctuation unchanged.
- `calculator.add(a, b)` - Adds `a` and `b` and returns the result. Accepts strings that may resolve to a number.
- `calculator.subtract(a, b)` - Subtracts `b` from `a` and returns the result. Accepts strings that may resolve to a number.
- `calculator.divide(a, b)` - Divides `a` by `b` and returns the result. Accepts strings that may resolve to a number.
- `calculator.multiply(a, b)` - Multiplies `a` by `b` and returns the result. Accepts strings that may resolve to a number.
- `.analyzeArray(arr)` - Analyses an array of numbers (`arr`) and returns an object with the results:
  - `.average`: The geometric mean of all the values; that is, the sum of all values divided by the amount of values.
  - `.min`: The lowest number in the array.
  - `.max`: The highest number in the array.
  - `.length`: The length of the array.
