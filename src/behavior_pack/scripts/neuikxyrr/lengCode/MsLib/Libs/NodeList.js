import Node from "./Node";
export default class NodeList {
    /**
     *链表
     */
    constructor() {
        this.head = null; //首节点
        this.tail = null; //尾节点
        this.size = 0; //大小
        this.call_time = 0; //push和pop的调用数
    }

    /**
     * 尾部添加一个值
     * @param {*} item 添加的值
     */
    push(item) {
        call_time++;
        let node = new Node(item);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        }
        node.last = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    /**
     * 尾部弹出一个值
     * @returns {*} 值
     */
    pop() {
        call_time++;
        if (this.size === 0) return null;
        let node = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return node.item;
        }
        this.tail.last.next = null;
        this.tail = this.tail.last;
        this.size--;
        return node.item;
    }

    /**
     * 获取链表是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * 获取链表大小
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * 将链表转为字符串
     * @returns {string} 以一个空格分割
     */
    toString() {
        let result = '';
        let node = this.head;
        for (var i = 0; i < this.size; i++) {
            result += node.item + ' ';
            node = node.next;
        }
        return result.trim();
    }

    /**
     * 通过索引删除值并返回
     * @param {number} index 索引
     * @returns {*} 值
     */
    removeAt(index) {
        if (index < 0 || index >= this.size) return false;

        if (index === 0) {
            let removedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.last = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return removedNode.item;
        } else if (index === this.size - 1) {
            let removedNode = this.tail;
            this.tail = this.tail.last;
            this.tail.next = null;
            this.size--;
            return removedNode.item;
        } else {
            let current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            let removedNode = current;
            current.last.next = current.next;
            current.next.last = current.last;
            this.size--;
            return removedNode.item;
        }
    }

    /**
     * 通过索引插入值
     * @param {number} index 索引
     * @param {*} item 值
     * @returns {boolean} 是否成功
     */
    insert(index, item) {
        if (index < 0 || index > this.size) return false;
        let node = new Node(item);
        if (this.size == 0) {
            this.head = node;
            this.tail = node;
        } else {
            if (index == 0) {
                this.head.last = node;
                node.next = this.head;
                this.head = node;
            } else if (index == this.size) {
                this.tail.next = node;
                node.last = this.tail;
                this.tail = node;
            } else {
                let current = this.head;
                let i = 0;
                while (i++ < index) {
                    current = current.next;
                }
                node.next = current;
                node.last = current.last;
                current.last.next = node;
                current.last = node;
            }
        }
        this.size++;
        return true;
    }

    /**
     * 通过索引替换值
     * @param {number} index 索引
     * @param {*} item 值
     * @returns {boolean} 是否成功
     */
    replace(index, item) {
        if (index < 0 || index >= this.size) {
            return false;
        }
        let current = this.head;
        let i = 0;
        if (this.size / 2 > index) {
            while (i++ < index) {
                current = current.next;
            }
        } else {
            current = this.tail;
            i = this.size - 1;
            while (i-- > index) {
                current = current.last;
            }
        }
        current.item = item;
        return true;
    }

    /**
     * 通过索引返回值
     * @param {number} index 索引
     * @returns {*} 值
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = null;
        let i = 0
        if ((i / 2) > index) {
            current = this.head;
            while (i++ < index) {
                current = current.next;
            }
        } else {
            current = this.tail;
            i = this.size - 1;
            while (i-- > index) {
                current = current.last;
            }
        }
        return current.item;
    }

    /**
     * 返回值的第一个索引，失败返回-1
     * @param {*} item 值
     * @returns {boolean}
     */
    indexOf(item) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (current.item == item) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }

    /**
     * 与另一链表合并
     * @param {NodeList} nodeList 另一链表
     */
    merge(nodeList) {
        this.tail.next = nodeList.head;
        nodeList.head.last = this.tail;
        this.size += nodeList.size;
    }

    /**
     * 清空链表
     */
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.call_time = 0;
    }

    *[Symbol.iterator]() {
        let node = this.head;
        const current_call_time = this.call_time;
        for (var i = 0; i < this.size; i++) {
            if (this.call_time !== current_call_time) {
                throw "NodeListEachofError"
            }
            yield node.item;
            node = node.next;
        }
    }
}
