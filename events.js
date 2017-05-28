var events = require('events');

var event = new events.EventEmitter();

event.emit('start');

event.on('start', () => {
    console.log("process started");
});