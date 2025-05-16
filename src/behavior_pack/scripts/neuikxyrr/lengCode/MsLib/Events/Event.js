import NodeList from "../Libs/NodeList";
import IEvent from "./IEvent";
import ICallback from "./ICallback";
import EventHandler from "./EventHandler";

export default class Event extends IEvent {
    min_index; //当前最低优先级回调的索引
    min_priority;
    eventHandler; //当前最小优先级

    /**
     * 事件
     * 含有一个链表储存回调
     */
    constructor(name) {
        super(name);
        this.min_priority = Number.MAX_VALUE; //0为最高优先级
        this.min_index = 0; //最低优先级回调的索引
        this.eventHandler = new EventHandler(this);
    }

    /**
     * 获取世事件句柄
     * @returns {EventHandler}
     */
    getEventHandler() {
        return this.eventHandler;
    }

    /**
     * 添加一个回调
     * @param {object} obj
     * @param {Function} obj.callback 回调
     * @param {number} obj.priority 优先级，上限为0
     */
    addCallback(obj) {
        obj = ICallback(obj.callback, obj.priority ? obj.priority : 0);
        if (!this._callbacks_.getSize()) {
            this.min_priority = 0;
            this.min_index = 0;
            this._callbacks_.push(obj);
        }
        if (obj.priority < this.min_priority) {
            this.min_priority = obj.priority;
            this.min_index = 0;
            this._callbacks_.insert(0, obj);
        } else {
            for (var i = this.min_index; i < this._callbacks_.getSize(); i++) {
                if (this._callbacks_.get(i).priority >= obj.priority) {
                    return this._callbacks_.insert(i, obj);
                }
            }
        }
    }

    /**
     * 删除回调
     * @param {Function} callback 回调
     */
    removeCallback(callback) {
        for (var i = 0; i < this._callbacks_.getSize(); i++) {
            if (this._callbacks_.get(i).callback === callback) this._callbacks_.removeAt(i);
        }
    }

    /**
     * 清空回调
     */
    clearCallbacks() {
        super.clear();
    }

    /**
     * 获取事件名
     * @returns {string}
     */
    getEventName() {
        return super.name();
    }

    /**
     * 获取回调链表
     * @returns {NodeList}
     */
    getCallbacks() {
        return super.callbacks();
    }

    /**
     * 获取回调数量
     * @papar {number}
     */
    getCallbacksSize() {
        return super.getCallbacksSize();
    }
}
