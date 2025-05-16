import MCNative from "../MCNative";

const system = MCNative.McServer.system;
export default class Timer {
    constructor() {
        this.timeout;
        this.interval;
    }

    /**
     * 执行，避开只读模式
     * @param {Function} callback 
     */
    run(callback) {
        system.run(callback);
    }

    /**
     * 延迟执行
     * @param {Function} callback 
     * @param {number} delay 
     */
    runTimeout(callback, delay) {
        system.run(() => {
            if (this.timeout) system.clearRun(this.timeout);
            this.timeout = system.runTimeout(callback, delay)
        })
    }

    /**
     * 重复执行
     * @param {Function} callback 
     * @param {number} delay 
     */
    runInterval(callback, delay) {
        if (this.interval) system.clearRun(this.interval);
        this.interval = system.runInterval(callback, delay);
    }

    /**
     * 清空Timer
     */
    clearAll() {
        if (this.timeout) system.clearRun(this.timeout);
        if (this.interval) system.clearRun(this.interval);
        this.timeout = undefined;
        this.interval = undefined;
    }
}
