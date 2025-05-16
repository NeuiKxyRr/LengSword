export default class Queue {
    /**
     * 队列
     */
    constructor() {
        this.list = new Array();
        this.length = 0;
    }
    
    /**
     * 返回队列是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }
    
    /**
     * 返回队列长度
     * @returns {number}
     */
    getLength() {
        return this.length;
    }
    
    /**
     * 添加一个值
     * @param {*} item 值
     */
    enqueue(item) {
        this.list = [item].concat(this.list);
        this.length++;
    }
    
    /**
     * 弹出一个值
     * @returns {*}
     */
    dequeue() {
        if (this.length > 0) this.length--;
        return this.list.shift();
    }
}
