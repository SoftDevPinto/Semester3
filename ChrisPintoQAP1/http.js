// Chris Pinto
// September 15th 2022
// Task 1

// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the cliet.

// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

// use the createServer() method to create an HTTP server

var http = require('http');

// Create a server Object

http.createServer(function (req, res) {
    // Writing a response tp the client
    res.write('Hello, Welcome to my HTTP Example for peters class');
    // End the response 
    res.end(); 

// the server objects listens on port 8080
}).listen(8080); 

console.log("Please go to localhost:8080")

// Adding an HTTP header
// res.writeHead(200, {'Content-Type': 'text/html'});

// Please go to 'Localhost:8080' to see my messege :)


