import { MsWorld } from "./World";

class Dimension {
    instance;
    hightRange;
    id;
    currentId;

    /**
     * 创建维度
     * @param {McNative.McServer.Dimension} instance 
     */
    constructor(instance) {
        this.instance = instance;
        this.hightRange = instance.hightRange;
        this.id = instance.id;
        this.currentId = 0;
    }
    
    /**
     * 给volume是否含有filter过滤的方法
     * @param {BlockVolumeBase} volume
     * @param {BlockFilter} filter
     * @param {boolean} allowUnloadChunk
     * @returns {boolean}
     */
    containBlock(volume, filter, allowUnloadChunk = false) {
        return this.instance.containBlock(volume, filter, allowUnloadChunk);
    }
    
    /**
     * 创建一个爆炸
     * @param {Vector3} vector
     * @param {number} radius
     * @param {ExplosionOptions} options
     * @returns {boolean}
     */
    createExplosion(vector, radius, options = {}) {
        this.instance.createExplosion(vector, radius, options);
    }
    
    /**
     * 填充某volume所有方块
     * @param {BlockVolumeBase|CompoundBlockVolume} volume
     * @param {BlockPermutations|BlockType|string} block
     * @param {BlockFillOptions} options
     * @returns {ListBlockVolume}
     */
    fillBlocks(volume, block, options = {}) {
        return this.instance.fillBlocks(volume, block, options);
    }
    
    /**
     * 获取某处的方块
     * @param {Vector3} vector
     * @returns {Block|undefined}
     */
    getBlock(vector) {
        return this.instance.getBlock(vector);
    }
    
    /**
     * 根据矢量获取方块
     * @param {Vector3} vector
     * @param {Vector3} direction
     * @param {BlockRaycastOptions} options
     * @returns {BlockRaycastHit|undefined}
     */
    getBlockFromRay(vector, direction, options = {}) {
        return this.instance.getBlockFromRay(vector, direction, options);
    }
    
    /**
     * 获取某volume的所有blocks
     * @param {BlockVolumeBase} volume
     * @param {BlockFilter} filter
     * @param {boolean} allowUnloadChunk
     * @returns {ListBlockVolume}
     */
    getBlocks(volume, filter, allowUnloadChunk = false) {
        return this.instance.getBlocks(volume, filter, allowUnloadChunk);
    }
    
    /**
     * 获取所有实体
     * @param {EntityQueryOptions} options
     * @returns {Entity[]}
     */
    getEntities(options = {}) {
        return this.instance.getEntities(options);
    }
    
    /**
     * 获取某处所有实体
     * @param {Vector3} vector
     * @returns {Entity[]}
     */
    getEntitiesAtBlockLocation(vector) {
        return this.instance.getEntitiesAtBlockLocation(vector);
    }
    
    /**
     * 根据矢量获取实体
     * @param {Vector3} vector
     * @param {Vector3} direction
     * @param {EntityRaycastOptions} options
     * @returns {EntityRaycastHit[]}
     */
    getEntitiesFromRay(vector, direction, options = {}) {
        return this.instance.getEntitiesFromRay(vector, direction, options);
    }
    
    /**
     * 获取所有玩家
     * @param {EntityQueryOptions} options
     * @returns {Player[]}
     */
    getPlayers(options = {}) {
        return this.instance.getPlayers(options);
    }
    
    /**
     * 获取最高处的方块
     * @param {VectorXZ} vectorXZ
     * @param {number} minHight
     * @returns {Block|undefined}
     */
    getTopmostBlock(vectorXZ, minHight = null) {
        return this.instance.getTopmostBlock(vectorXZ, minHight);
    }
    
    /**
     * 播放声音
     * @param {string} soundId
     * @param {Vector3} vector
     * @param {WorldSoundOptions} options
     */
    playSound(soundId, vector, options = {}) {
        this.instance.playSound(soundId, vector, options);
    }
    
    /**
     * 执行指令
     * @param {string} cmd
     * @returns {CommandResult}
     */
    runCommand(cmd) {
        return this.instance.runCommand(cmd);
    }
    
    /**
     * 异步执行指令
     * @param {string} cmd
     * @returns {Promise<CommandResult>}
     */
    runCommandAsync(cmd) {
        return this.instance.runCommandAsync(cmd);
    }
    
    /**
     * 设置块的排列
     * @param {Vector3} vector
     * @param {BlockPermutation} permutations
     */
    setBlockPermutations(vector, permutations) {
        this.instance.setBlockPermutations(vector, permutations);
    }
    
    /**
     * 设置方块种类
     * @param {Vector3} vector
     * @param {BlockType|string} blockType
     */
    setBlockType(vector, blockType) {
        this.instance.setBlockType(vector, blockType);
    }
    
    /**
     * 设置天气
     * @param {WeatherType} weatherType
     * @param {number} duration
     */
    setWeather(weatherType, duration = null) {
        this.instance.setWeather(weatherType, duration);
    }
    
    /**
     * 生成实体
     * @param {string} id
     * @param {Vector3} vector
     * @param {SpawnEntityOptions} options
     * @returns {Entity}
     */
    spawnEntity(id, vector, options = {}) {
        return this.instance.spawnEntity(id, vector, options);
    }
    
    /**
     * 生成物品(实体)
     * @param {ItemStack} itemStack
     * @param {Vector3} vector
     * @returns {Entity}
     */
    spawnItem(itemStack, vector) {
        return this.instance.spawnItem(itemStack, vector);
    }
    
    /**
     * 生成粒子
     * @param {string} effectName
     * @param {Vector3} vector
     * @param {MolangVariableMap} molangVariables
     */
    spawnParticle(effectName, vector, molangVariables = null) {
        this.instance.spawnParticle(effectName, vector, molangVariables);
    }
}

export const OverWorld = new Dimension(MsWorld.getDimension("overworld"));
export const TheEnd = new Dimension(MsWorld.getDimension("the_end"));
export const Nether = new Dimension(MsWorld.getDimension("nether"));
