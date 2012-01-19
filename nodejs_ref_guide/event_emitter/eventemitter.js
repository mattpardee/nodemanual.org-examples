// Example

	var events = require('events');
	var assert = require('assert');
 
	var eventsEmitter = new events.EventEmitter();
 
	var events_new_listener_emited = [];
	var times_hello_emited = 0;
 
	// When a new listener attaches, print the event
	eventsEmitter.on('newListener', function(event, listener) {
	  console.log('newListener: I\'m looking for a \"' + event + "\"");
	  events_new_listener_emited.push(event);
	});
 
	eventsEmitter.on('hello', function(a, b) {
	  console.log('hello');
	  times_hello_emited += 1;
 
	  // Check our passed arguments
	  assert.equal('a', a);
	  assert.equal('b', b);
	});
 
	console.log('start');
 
	eventsEmitter.emit('hello', 'a', 'b');