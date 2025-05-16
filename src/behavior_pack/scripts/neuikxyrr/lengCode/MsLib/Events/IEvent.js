import NodeList from "../Libs/NodeList";
/**
 * Event接口
 */
export default class IEvent {
    /**
     * @param {string} name 事件名
     */
    constructor(name) {
        this._name_ = name;
        this._callbacks_ = new NodeList(); //包含所有回调函数的链表
    }

    /**
     * 获取事件名
     * @returns {string}
     */
    name() {
        return this._name_;
    }

    /**
     * 获取所有回调函数的链表
     * @returns {NodeList}
     */
    callbacks() {
        return this._callbacks_;
    }

    /**
     * 清空所有回调函数
     */
    clear() {
        this._callbacks_.clear();
    }

    /**
     * 获取回调函数的数量
     * @returns {number}
     */
    getCallbacksSize() {
        return this._callbacks_.getSize();
    }
}