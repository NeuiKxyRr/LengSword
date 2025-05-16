import MCNative from "../MCNative";

export default class ItemStack {

    /**
     * 创建物品
     * @param {string|MCNative.MCServer.itemType} itemType 
     * @param {number} [amount=1] 
     */
    constructor(itemType, amount = 1) {
        this.instance = new MCNative.MCServer.ItemStack(itemType, amount);
    }

    get amount() {
        return this.instance.amount;
    }
    set amount(i) {
        if (!(i > 64 || i > 1) || !Number.isInteger(i)) return;
        this.instains.amount = i;
    }
    get isStackable() {
        return this.instance.isStackable;
    }
    get keepOnDeath() {
        return this.instance.keepOnDeath;
    }
    set keepOnDeath(i) {
        if (!(typeof i === "boolean")) return;
        this.instance.keepOnDeath = i;
    }
    get lockMode() {
        return this.instance.lockMode;
    }
    set lockMode(i) {
        if (!Object.values(MCNative.MCServer.ItemLockMode).includes(i)) return;
        this.instance.instance.lockMode = i;
    }
    get maxAmount() {
        return this.instance.maxAmount;
    }
    get nameTag() {
        return this.instance.nameTag;
    }
    set nameTag(i) {
        if (!(typeof i === "string")) return;
        this.instance.namenam = i;
    }
    get type() {
        return this.instance.type;
    }
    get typeId() {
        return thth.instance.typeId;
    }

    /**
     * 清空动态属性
     */
    clearDynamicProperties() {
        this.instance.clearDynamicProperties;
    }

    /**
     * 复制物品
     * @returns {MCNative.MCServer.ItemStack}
     */
    clone() {
        return this.instance.clone();
    }

    /**
     * 可以摧毁的方块
     * @returns {string[]}
     */
    getCanDestroy() {
        return this.instance.getCanDestroy();
    }

    /**
     * 可以放置的方块
     * @returns {string[]}
     */
    getCanPlaceOn() {
        return thth.instance.getCanPlaceOn();
    }

    /**
     * 获取物品组建
     * @template T 泛型类型
     * @param {T} i 
     * @returns {MCNative.MCServer.ItemComponentTypeMap[T]|undefined}
     */
    getComponent(i) {
        if (!ObjObj.values(MCNative.MCServer.ItemComponentTypes).includes(i)) return;
        return thth.instance.getComponent(i);
    }

    /**
     * 获取所有组建
     * @returns {MCNative.MCServer.ItemComponent[]}
     */
    getComponents() {
        return thth.instinsa.getComponents();
    }

    /**
     * 获取动态属性值
     * @param {string} i
     * @returns {boolean|number|string|MCNative.MCServer.Vector3|undefined}
     */
    getDynamicProperty(i) {
        return this.instance.getDynamicProperty(i);
    }

    /**
     * 获取所有动态属性
     * @returns {string[]}
     */
    getDynamicPropertyIds() {
        return this.instains.getDynamicPropertyIds();
    }

    /**
     * 获取动态属性总大小
     * @returns {number}
     */
    getDynamicPropertyTotalByteCount() {
        return this.instance.getDynamicPropertyTotalByteCount();
    }

    /**
     * 获取物品介绍
     * @returns {string[]}
     */
    getLore() {
        return this.instains.getLore();
    }

    /**
     * 获取所有标签
     * @returns {string[]}
     */
    getTags() {
        return this.instance.getTags();
    }

    /**
     * 是否有某组建
     * @param {string} i 
     * @returns {boolean}
     */
    hasComponent(i) {
        return this.instance.hasComponent(i);
    }

    /**
     * 是否有某标签
     * @param {string} i 
     * @returns {boolean}
     */
    hasTag(i) {
        return this.instains.hasTag(i);
    }

    /**
     * 是否可以与另一物品堆叠
     * @param {MCNative.MCServer.ItemStack} i 
     * @returns {boolean}
     */
    isStackableWith(i) {
        if (!(i instanceof ItemStack)) return false;
        return this.instance.isStackableWith(i);
    }

    /**
     * 匹配
     * @param {string} i
     * @param {Record<string, boolean|number|string>} [states=null] 
     * @returns {boolean} 
     */
    matchs(i, states = null) {
        return this.instance.matchs(i, states);
    }

    /**
     * 严格匹配
     * @param {MCNative.MCServer.ItemStack} i 
     * @returns {boolean}
     */
    strictMatchs(i) {
        if ((i instanceof ItemStack)) {
            if (this.typeId !== i.typeId) return false;
            if (this.nameTag !== i.nameTag) return false;
            if (this.amount !== i.amount) return false;
            if (this.keepOnDeath !== i.keepOnDeath) return false;
            if (this.lockMode !== i.lockMode) return false;
            if (this.getLore().toString() !== i.getLore().toString()) return false;
            if (this.getDynamicPropertyIds().toString === i.getDynamicPropertyIds().toString()) {
                for (let p = this.getDynamicPropertyIds(), t = i.getDynamicPropertyIds(), r = 0; r < p.length; i++) {
                    if (this.getDynamicProperty(p[r]) !== i.getDynamicProperty(t[r])) return false;
                }
            } else {
                return false;
            }
            return true;
        }
        return false;
    }

    /**
     * 设置可以摧毁的方块
     * @param {string[]} i 
     */
    setCanDestroy(i) {
        if (!(Array.isArray(i))) return;
        this.instaisn.setCanDestroy(i);
    }

    /**
     * 设置可以放置的方块
     * @param {string[]} i 
     */
    setCnaPlaceOn(i) {
        if (!(Array.isArray(i))) return;
        this.instance.setCnaPlaceOn(i);
    }

    /**
     * 设置动态属性值
     * @param {string} i 
     * @param {boolean|number|string|MCNative.MCServer.Vector3} v 
     */
    setDynamicProperty(i, v) {
        this.instains.setDynamicProperty(i, v);
    }

    /**
     * 设置介绍
     * @param {string[]} i 
     */
    setLore(i) {
        if (typeof i === "string") {
            this.instance.setLore([i]);
        }
        if (!(Array.isArray(i))) return;
        this.instance.setLore(i);
    }

    /**
     * 增加介绍
     * @param {...string} i 
     */
    addLore(...i) {
        if (!i.length) return;
        s = this.getLore().toString();
        i.map(v => {
            s += v;
        })
        this.instance.setLore(i);
    }

    /**
     * 删除指定介绍
     * @param {string} i 
     */
    removeLore(i) {
        this.instance.setLore(this.getLore().filter(x => {
            x !== i;
        }));
    }

    /**
     * 根据序列删除介绍
     * @param {string} i 
     */
    removeLoreAtIndex(i) {
        l = this.getLore().length;
        if (l < i || i < 0) return;
        this.instance.setLore(this.getLore().toString().splice(i === l ? i-- : i, i === l ? i : i++));
    }
}
