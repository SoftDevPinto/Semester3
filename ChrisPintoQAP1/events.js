// Chris Pinto
// September 15th 2022
// Task 1

// Every action on a computer is an event, weither a connection is made or a file is opened.
// Node.js has a built-in events where you can create, fire and listen for your own events.
// Event module includes EventEmitter class which can be used to raise and handle custom events.
//


var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an Event handler
var myEventHandler = function() {
    console.log('Event has been activated! This is Practice for Peters Class!');
}

//Assign the eventhandler to an event
eventEmitter.on('activated', myEventHandler);

//Fire the 'activated' event
eventEmitter.emit('activated');

// The EventEmitter class calls all the events in the order they are registered. It helps ensure  the proper sequencing 
// of events and helps us avoid logic errors.

// Steps:
// Step 1: import the "events".
// Step 2: Create an instance of "EventEmitter"
// Step 3: Use the instance of EventEmitter class to implement the emit() method.
// Step 4: USe the same instance of EventEmitter class to listen to the event.

// Example 2 
var events = require('events');
// util = utility module.
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

// Three people used for this example.
var chris = new Person('chris');
var chloe = new Person('chloe');
var dylan = new Person('dylan');

// making array for People
var people = [chris, chloe, dylan];

// listners for each object.
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg);
    });
});

// emiting the events.
chris.emit('speak', 'hey can you hear me?');
chloe.emit('speak', 'Hello also, this is custom events!');
dylan.emit('speak', 'This stuff is pretty cool!!')