const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received from ${name} id: ${id}`);
});


customEmitter.on('response', () => {
    console.log(`some other response here`);
});


customEmitter.emit('response', 'Ali', 28);