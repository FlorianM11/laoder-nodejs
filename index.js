const EventEmitter = require('./events');
const lengthLoader = 10;

const emitter = new EventEmitter(lengthLoader);
emitter.createEmitter();

emitter.executeEmitter()