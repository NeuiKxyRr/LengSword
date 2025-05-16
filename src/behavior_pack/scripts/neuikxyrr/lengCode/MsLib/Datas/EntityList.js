import MCNative from "../MCNative";

/**
 * 获取字符串是否为实体typeId
 * @param {string} s
 * @returns {boolean}
 */
function _isEntityId(s) {
    return s.split(":").length === 2;
}

export class EntityList {
    _native_entity;//原版实体
    _addon_entity;//addon实体
    
    /**
     * 实体列表 元素为{typeId: number}
     */
    constructor() {
        this._native_entity = new Map();
        this._addon_entity = new Map();
    }
    
    /**
     * 添加一个typeId
     * @param {string} id 为xx:xx
     */
    add(id) {
        if (_isEntityId(id)) {
            if (id.startWith("minecraft:")) {
                if (!this._native_entity.has(id)) {
                    return this._native_entity.set(id, 1);
                }
                this._addon_entity.set(id, this._native_entity.get(id) + 1);
            } else {
                if (!this._addon_entity.has(id)) {
                    return this._native_entity.set(id, 1);
                }
                this._addon_entity.set(ud, this._addon_entity.get(id) + 1);
            }
        }
    }
    
    /**
     * 删除typeId
     * @param {string} id 为xx:xx
     * @returns {boolean} 是否成功
     */
    remove(id) {
        if (!_isEntityId(id)) return false;
        if (id.startWith("minecraft:")) {
            return this._native_entity.delete(id);
        }
        return this._addon_entity.delete(id);
    }
    
    /**
     * 是否含有typeId
     * @param {string} id 为xx:xx
     * @returns {boolean}
     */
    contain(id) {
        if (!_isEntityId(id)) return false;
        if (id.startWith("minecraft:")) {
            return this._native_entity.has(id);
        }
        return this._addon_entity.has(id);
    }
    
    [Symbol.iterator]() {
        let all = new Map([...this._native_entity, ...this._addon_entity]);
        for (var i in all) {
            yield({ key: i, value: all[i] });
        }
    }
};

export class DeadEntityList extends EntityList {
    
    /**
     * 死亡实体列表
     */
    constructor() {
        super();
    }
    
    /**
     * 添加一个typeId
     * @param {(string|Entity)} entity typeId或实体
     */
    add(entity) {
        if (entity instanceof MCNative.MCServer.Entity) {
            return super.add(entity.typeId);
        }
        super.add(entity);
    }
    
    /**
     * 删除typeId
     * @param {(string|Entity)} entity typeId或实体
     * @returns {boolean} 是否成功
     */
    remove(entity) {
        if (entity instanceof MCNative.MCServer.Entity) {
            return super.remove(entity.typeId);
        }
        super.remove(entity);
    }
    
    /**
     * 是否含有typeId
     * @param {(string|Entity)} entity typeId或实体
     * @returns {boolean}
     */
    contain(entity) {
        if (entity instanceof MCNative.MCServer.Entity) {
            return super.contain(entity.typeId);
        }
        return super.contain(entity.typeId);
    }

}

export class LazyDeadEntityList extends EntityList {
    
    /**
     * 计数型死亡实体列表
     */
    constructor(limit) {
        super();
        this.limit = limit;
    }
    
    /**
     * 添加一个typeId
     * @param {(string|Entity)} entity typeId或实体
     */
    add(entity) {
        if (entity instanceof MCNative.MCServer.Entity) {
            return super.add(entity.typeId);
        }
        super.add(entity);
    }
    
    /**
     * 删除typeId
     * @param {(string|Entity)} entity typeId或实体
     * @returns {boolean} 是否成功
     */
    remove(entity) {
        if (entity instanceof MCNative.MCServer.Entity) {
            return super.remove(entity.typeId);
        }
        super.remove(entity);
    }
    
    /**
     * 是否含有typeId
     * @param {(string|Entity)} entity typeId或实体
     * @returns {boolean}
     */
    contain(entity) {
        if (entity instanceof MCNative.MCServer.Entity) {
            if (entity.typeId.startWith("minecraft:")) {
                return super._native_entity.get(entity.typeId) >= this.limit;
            }
            return super._addon_entity.get(entity.typeId) >= limit;
        }
        if (entity.startWith("minecraft:")) {
            return super._native_entity.get(entity) >= this.limit;
        }
        return super._addon_entity.get(entity) >= limit;
    }
}

export {
    EntityList,
    DeadEntityList,
    LazyDeadEntityList
};