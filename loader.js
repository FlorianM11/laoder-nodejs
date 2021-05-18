module.exports = class Loader {

    constructor() {
        this.loader = '';
    }

    addPoint() {
         return this.loader = '.';
    }

    finalLoading(){
        console.log('\r\nLoading completed !');
    }
}