export default class Node {
    /**
     * 节点
     * @parpa {*} item 节点值
     */
    constructor(item) {
        this.item = item;
        this.last = null;
        this.next = null;
    }
}
