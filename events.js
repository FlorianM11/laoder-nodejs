const EventEmitter = require('events')
const Loader  = require('./loader')

module.exports = class Events {

    constructor(lengthLoader) {
        this.emitter = new EventEmitter()
        this.load = new Loader()
        this.name = 'loading'
        this.lengthLoader = lengthLoader;
    }

    createEmitter() {
        this.emitter.on(this.name, () => {
            process.stdout.write(this.load.addPoint());
        });
    }

    executeEmitter(){
        let count = 0;
        const timer = setInterval( () => {
            this.emitter.emit(this.name);
            count++;

            if (count === this.lengthLoader){
                clearInterval(timer);
                this.load.finalLoading();
            }

        }, 1000)
    }
}