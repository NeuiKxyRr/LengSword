import Node from './Node.js';
export default class Stack {
    /**
     * 栈
     */
    constructor() {
        this.list = new Array();
        this.length = 0;
    }
    
    /**
     * 添加一个值
     * @param {*} item 值
     */
    push(item) {
        this.list.push(item);
        this.length++;
    }
    
    /**
     * 弹出一个值
     * @returns {*}
     */
    pop() {
        this.length--;
        return list.shift();
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
     * 将队列转为字符串
     * @returns {string}
     */
    toString() {
        let result = '';
        for (var i = this.length - 1; i >= 0; i--) {
            result += this.list[i] + ' ';
        }
        return result.trim();
    }
    
    *[Symbol.iterator]() {
        for (var i = this.length - 1; i >= 0; i--) {
            yield this.list[i];
        }
    }
}
