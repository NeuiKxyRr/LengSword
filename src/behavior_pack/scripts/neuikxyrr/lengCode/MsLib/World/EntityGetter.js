export default class EntityGetter {
    constructor(world) {
        this.world = world;
        this.currentId = 0;
        this.playerList = [];
        this.entitiyList = [];
    }

    _getTypeId(entity) {
        return entity.typeId;
    }

    init() {
        this.world.afterEvents.entitySpawn.subscribe(({ cause, entity }) => {
            if (this._getTypeId(entity) === "minecraft:player") {
                this.playerList.push(entity);
            } else {
                this.entitiyList.push(entity);
            }
        });
    }

    /**
     * 通过推算id获取隐藏的agent
     * @returns {MCNative.MCServer.Entity[]}
     */
    getAgents() {
        const id = this.world.getDimension("overworld").spawnEntity("mslib:test_get_id", { x: 0, y: 0, z: 0 });
        let result = [];
        if (this.currentId + 1 <= id) {
            for (let s = this.currentId + 1; s < id; s++) {
                let entity = this.instance.getEntity(s);
                if (entity.isValid() && entity.typeId === "minecraft:agent") result.push(entity);
            }
        }
        return result;
    }

    /**
     * 更好的获取所有实体
     * 包括0血实体和agent
     * @returns {MCNative.MCServer.Entity[]}
     */
    getEntitiesSuperly() {
        return [...this.entitiyList, ...this.playerList, ...this.getAgents()];
    }
}