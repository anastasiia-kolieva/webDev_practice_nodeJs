const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
    
        this.emit('some_event', { id: 1, text: 'Event test text'});
    };
};

module.exports = Logger;

// or use modele util:
// const util = require('util');

// class Logger {
//     log = (msg) => {
//         console.log(msg);
    
//         this.emit('some_event', { id: 1, text: 'Event test text'});
//     };
// };

// util.inherits(Logger, EventEmitter);

