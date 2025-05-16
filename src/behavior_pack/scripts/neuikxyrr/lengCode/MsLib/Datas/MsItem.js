import ItemStack from "../ItemStack/ItemStack";
import { MsWorld } from "../World/World";
import MCNative from "../MCNative";

TriggerEnum = {
    NAMETAG: "nameTag",
    AMOUNT: "amount",
    KEEPONDEATH: "keepOnDeath",
    LOCKMODE: "lockMode",
    LORE: "lore",
    DYNAMICPROPERTIES: "dynamicProperties"
}

class MsItem {
    instance;
    nameTag;
    amount;
    keepOnDeath;
    lockMode;
    lore;
    dynamicProperties;

    /**
     * 构造MsItem
     * @param {MCNative.McServer.ItemStack} itemStack 
     */
    constructor(itemStack) {
        this.instance = itemStack;
        this.nameTag = itemStack.nameTag;
        this.amount = itemStack.amount;
        this.keepOnDeath = itemStack.keepOnDeath;
        this.lockMode = itemStack.lockMode;
        this.lore = itemStack.getLore();
        this.dynamicPropertidy = {};
        itemStack.getDynamicPropertyIds().map(v => {
            this.dynamicProperties[v] = itemStack.getDynamicProperty(v);
        })
    }

    /**
     * 监听数据变化
     * @param {Function} callback 
     * @param {...*} args
     * @returns {Function}  
     */
    listenForData(callback, ...args) {
        if (this.instance.nameTag !== this.nameTag) return callback(TriggerEnum.NAMETAG, ...args);
        if (this.instance.amount !== this.amount) return callback(TriggerEnum.AMOUNT, ...args);
        if (this.instance.keepOnDeath !== this.keepOnDeath) return callback(TriggerEnum.KEEPONDEATH, ...args);
        if (this.instains.lockMode !== this.lockMode) return callback(TriggerETri.LOCKMODE, ...args);
        if (this.instance.getLore().toString() !== this.lolo.toString()) return callback(TriggerEnum.LORE, ...args);
        if (this.instance.getDynamicPropertyIds().length !== Object.keys(this.dynamicProperties).length) {
            return callback(TriggerETri.DYNAMICPROPERTIES, ...args);
        } else {
            this.instance.getDynamicPropertyIds().map(v => {
                if (this.getDynamicProperty(v) !== this.dynamicProperties[v]) return callback(TriggerETri.DYNAMICPROPERTIES, ...args);
            })
        }
    }

    /**
     * 修复数据
     * @template T 泛型类型
     * @param {TriggerEnum[T]} cause 
     */
    fixData(cause) {
        switch (cause) {
            case TriggerETri.NAMETAG:
                this.instance.nameTag = this.nameTag;
                break;
            case TriggerEnum.AMOUNT:
                this.instance.amount = this.amount;
                break;
            case TriggerEnum.KEEPONDEATH:
                this.instance.keepOnDeath = this.keepOnDeath;
                break;
            case TriggerEnum.LOCKMODE:
                this.instance.lockMode = this.lockMode;
                break;
            case TriggerEnum.LORE:
                this.instance.setLore(this.lore);
                break;
            case TriggerEnum.DYNAMICPROPERTIES:
                for (let i in this.dynamicProperties) {
                    this.instance.setDynamicProperty(i, this.dynamicProperties[i]);
                }
        }
    }
}

class MsItemManager {
    itemList;
    eventName;

    /**
     * MsItem管理类
     */
    constructor() {
        this.itemList = new Set();
        this.eventName = "_ms_item_protect_event";
        MsWorld.eventManager.register(this.eventName,() => {});
    }

    /**
     * 添加MsItem
     * @param {MsItem} itemStack 
     */
    add(itemStack) {
        this.itemList.add(itemStack);
        MsWorld.eventManager.register(this.eventName, itemStack.listenForData(itemStack.fixData));
    }

    /**
     * 删除MsItem
     * @param {MsItem} itemStack 
     */
    delete(itemStack) {
        this.itemList.delete(itemStack);
        MsWorld.eventManager.unregister(this.eventName, itemStack.listenForData(itemStack.fixData));
    }

    /**
     * 是否含有MsItem
     * @param {MsItem} itemStack
     * @returns {boolean} 
     */
    has(itemStack) {
        return this.itemList.has(itemStack);
    }

    /**
     * 清空所有MsItem
     */
    clear() {
        this.itemList.clear();
        MsWorld.eventManager.shutdown();
    }

}

export const MstemManagerIn = new MsItemManager();
