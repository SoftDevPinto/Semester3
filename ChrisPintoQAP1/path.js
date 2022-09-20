// Chris Pinto
// September 19th 2022
// Task 1

// The Path module provides a way of working with directories and file paths.

// The syntax for including the Path module in your application:
// var path = require('path');

// Example 1 - path.basename
// Extract the filename from a file path:
var path = require('path');

var filename = path.basename('/Users/Refsnes/ChrispintoQAP1_path.js');
console.log(filename);
// Returns ChrispintoQAP1_path.js

// Example 2 - Delimiter
// Return the delimiter used on the server:
var path = require('path');

console.log(path.delimiter);
// Returns :

// Example 3 - Dirname
// Get the directories from a file path:
var path = require('path');

var directories = path.dirname('/Users/Refsnes/ChrispintoQAP1_path.js');
console.log(directories);
// Returns /Users/Refsnes

// Example 4 - path.Join
// Join several segments into one path:
var path = require('path');

var x = path.join('Users', 'Refsnes', 'ChrispintoQAP1_path.js');

console.log(x);
// Returns Users/Refsnes/ChrispintoQAP1_path.js

// Example 5 - Normalize
// Resolve the path:
var path = require('path');

var x = path.normalize('Users/Refsnes/../Chris');

console.log(x);
// Returns Users/Chris
