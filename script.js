const logEvents = require('./eventEmitter');


const EventEmitter =  require('events');


class MyEmitter extends EventEmitter();


const myEmitter = new MyEmitter();


myEmitter.on('log', (msg) => {
   logEvents(msg);

})
myEmitter.emit('log');