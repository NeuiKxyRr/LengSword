import Node from './Node.js';
export default class NodeStack {
    /**
     * 链栈
     */
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * 返回链表是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * 返回链表大小
     * @returns {number}
     */
    getLength() {
        return this.length;
    }

    /**
     * 添加一个值
     * @param {*} item 值
     */
    push(item) {
        const old_node = this.head;
        this.head = new Node();
        this.head.item = item;
        if (this.length) {
            this.head.next = old_node;
        }
        this.length++;
    }

    /**
     * 弹出一个值
     * @returns {*}
     */
    pop() {
        const item = this.head.item;
        this.head = this.head.next;
        if (this.length > 0) this.length--;
        return item;
    }

    /**
     * 将链栈转为字符串
     * @returns {string}
     */
    toString() {
        let result = '';
        let node = this.head;
        while (node) {
            result += node.item + ' ';
            node = node.next;
        }
        return result.trim();
    }

    *[Symbol.iterator]() {
        let node = this.head;
        for (var i = 0; i < this.length; i++) {
            yield node.item;
            node = node.next;
        }
    }
}