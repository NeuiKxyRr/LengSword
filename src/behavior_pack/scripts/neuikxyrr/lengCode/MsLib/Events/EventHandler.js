import MCNative from "../MCNative";

export default class EventHandler {
    name;
    cancel;
    callback

    /**
     * 创建事件句柄
     * @param {Event} event 
     */
    constructor(event) {
        this.name = event.getEventName();
        this.callback = [];
        for(var i=0;i<event.getCallbacksSize();i++) {
            this.callback.push(event.getCallbacks().get(i).callback);
        }
        this.callback = event.getCallbacks()
        if (MCNative.MCServer.WorldBeforeEvents.hasOwnProperty(this.name) || this.name === "watchdogTerminate") {
            this.cancel = false;
        }
        if (!MCNative.MCServer.WorldAfterEvents.hasOwnProperty(this.name) && !MCNative.MCServer.SystemAfterEvents.hasOwnProperty(this.name) && (this.event !== "shutdown" && this.event !== "startup")) {
            this.cancel = false;
        }
    }

    /**
     * 事件是否可以取消
     * @returns {boolean}
     */
    isCanCanceled() {
        return this.cancel ? true : false;
    }

    /**
     * 事件是否已取消
     * @returns {boolean}
     */
    isCanceled() {
        return this.cancel;
    }

    /**
     * 取消事件
     */
    setCanceled() {
        if (!this.isCanCanceled()) throw new Error(`${this.name} can't be canceled`);
        this.cancel = true;
    }
    
    /**
     * 清空回调函数
     */
    delete() {
        this.callback = [];
    }
}