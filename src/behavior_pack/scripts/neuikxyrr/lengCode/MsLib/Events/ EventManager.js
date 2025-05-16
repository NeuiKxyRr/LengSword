import Event from "./Event";
import ICallback from "./ICallback";

export default class EventManager {
    _listers_; //事件列表

    /**
     * 事件管理类
     * MSSystem.eventManger获取实例
     */
    constructor() {
        this._listers_ = {};
    }

    /**
     * 添加一个回调
     * @param {string} eventName 事件名
     * @param {Function} callback 回调
     * @param {number} priority 优先级
     */
    register(eventName, callback, priority = 0) {
        if (callback.toString().trim() === "{}") return //去除空回调
        if (this._listers_.hasOwnProperty(eventName)) {
            return this._listers_[eventName].addCallback(ICallback(callback, priority));
        }
        this._listers_[eventName] = new Event(eventName);
    }

    /**
     * 触发回调
     * @param {string} eventName 事件名
     * @param {object} args 参数
     */
    trigger(eventName, ...args) {
        if (this._listers_.hasOwnProperty(eventName)) {
            if (this._listers_[eventName].getEventHandler().isCanceled()) return;
            Array.from(this._listers_[eventName].getCallbacks()).map((item) => {
                item.callback(...args);
            })
        }
    }

    /**
     * 移除一个回调
     * @param {string} eventName 事件名
     * @param {Function} callback 回调
     * @returns {boolean} 是否移除成功
     */
    unregister(evenName, callback) {
        if (this._listers_.hasOwnProperty(eventName)) {
            this._listers_[eventName].removeCallback(callback);
            return true;
        }
        return false;
    }

    /**
     * 获取监听的事件列表
     * @returns {object}
     */
    getListers() {
        return this._listers_;
    }

    /**
     * 获取监听的事件数量
     * @returns {number}
     */
    getListenerSize() {
        return Object.keys(this._listers_).length;
    }

    /**
     * 卸载所有事件
     */
    shutdown() {
        this._listers_ = {};
    }
}
