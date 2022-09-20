// Chris Pinto
// September 15th 2022
// Task 1

// A Console class with methods such as console.log(), console.error(), and console.warn() that can be used to write
// to any Node.js stream.

// A global console instance configured to write to process.stdout and process.stderr. The global console can be used without 
// calling require ('node:console').

// This will print out "hello welcome to my example of console" to out
// Example 1 - console.log
console.log('Hello welcome to my example of console');


// Prints error message and stack trace to stderr
// Example 2 - console.error
console.error(new Error('Whoops, something bad happened, dont worry this is supposed to happen.'));

// Example 3 - console.warn
const name = "Chris Pinto";

// Prints "Danger Chris Pinto! Danger!" to stderr
console.warn(`Danger ${name}! Danger!`);

// stdout vs stderr vs stdin

// stdout - Standard Output process and writes conventional output to this file handle.
// stdin - Standard Input is what yours process reads to get information from you.
// stderr - Standard Error is your process writes daignostic output to this file handle.

// Example 4 - console.assert
console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');
// Assertion failed: Whoops didn't work

console.assert();
// Assertion failed

// Example 5 - console.table
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

// Showing results from table a and b.
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

// Showing results from the a table.
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘