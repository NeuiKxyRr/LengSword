import Queue from "../Libs/Queue";

export default class Task {
    constructor() {
        this.queue = new Queue();
        this.interval = null;
    }
    
    run(callback, ...args) {
        this.queue.enqueue(callback.bind(null, ...args))
    }
   
}
