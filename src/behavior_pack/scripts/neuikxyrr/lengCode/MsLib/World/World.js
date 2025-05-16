import MsHelper from "../MsHelper";
import MCNative from "../MCNative"
import EventManager from "../Events/ EventManager";
import Timer from "../Utils/Timer";
import StructureManager from "../Structures/ StructureManager";
import EntityGetter from "./EntityGetter";

class World {
    instance;
    uuid;
    beforeEvents;
    afterEvents;
    gameRules;
    isHardcore;
    scoreboard;
    structureManager;
    eventManager;
    timer;
    entityGetter;

    /**
     * 替换为我的类
     * @param {MCNative.MCServer.World} instance
     */
    constructor(instance) {
        this.instance = instance;
        this.uuid = MsHelper.getUUID();
        this.beforeEvents = instance.beforeEvents;
        this.afterEvents = instance.afterEvents;
        this.gameRules = instance.gameRules;
        this.isHardcore = instance.isHardcore;
        this.scoreboard = instance.scoreboard;
        this.entityGetter = new EntityGetter(this.instance);
        this.entityGetter.init();
        this.eventManager = new EventManager();
        this.timer = new Timer();
        this.structureManager = new StructureManager(this);
    }

    /**
     * 获取所有agent
     * @returns {MCNative.MCServer.Entity[]}
     */
    getAgents() {
        return this.entityGetter.getAgents();
    }

    /**
     * 更好的获取所有实体
     * @returns {MCNative.MCServer.Entity[]}
     */
    getEntitiesSuperly() {
        return this.entityGetter.getEntitiesSuperly();
    }
    
    /**
     * 清除所有动态属性
     */
    clearDynamicProperties() {
        this.instance.clearDynamicProperties();
    }
    
    /**
     * 获取绝对时间
     * @returns [number]
     */
    getAbsoluteTime() {
        return this.instance.getAbsoluteTime();
    }

    /**
     * 获取所有玩家
     * @returns {MCNative.MCServer.Player[]}
     */
    getAllPlayers() {
        return this.instance.getAllPlayers();
    }

    /**
     * 获取存档已创建的日期
     * @returns {number}
     */
    getDay() {
        return this.instance.getDay();
    }

    /**
     * 获取默认生成点
     * @returns {MCNative.MCServer.Vector3}
     */
    getDefaultSpawnLocation() {
        return this.instance.getDefaultSpawnLocation();
    }

    /**
     * 获取维度
     * @param {string} dimensionId
     * @returns {MCNative.MCServer.Dimension}
     */
    getDimension(dimensionId) {
        return this.instance.getDimension(dimensionId);
    }

    /**
     * 获取世界动态属性
     * @param {string} identifier 
     * @returns {boolean|number|string|MCNative.MCServer.Vector3|undefined}
     */
    getDynamicProperty(identifier) {
        return this.instance.getDynamicProperty(identifierH);
    }

    /**
     * 获取所有世界动态属性
     * @returns {string[]}
     */
    getDynamicPropertyIds() {
        return this.instance.getDynamicPropertyIds();
    }

    /**
     * 获取世界动态属性大小
     * @returns {number}
     */
    getDynamicPropertyTotalByteCount() {
        return this.instance.getDynamicPropertyTotalByteCount();
    }

    /**
     * 获取实体
     * @param {string} id 
     * @returns {MCNative.MCServer.Entity}
     */
    getEntity(id) {
        return this.instance.getEntity(id);
    }

    /**
     * 获取月相
     * @returns {MCNative.MCServer.MoonPhase}
     */
    getMoonPhase() {
        return this.instance.getMoonPhase();
    }

    /**
     * 获取所有玩家
     * @param {MCNative.MCServer.EntityQueryOptions} [options={}] 
     * @returns {MCNative.MCServer.Player[]}
     */
    getPlayers(options = {}) {
        return this.instance.getPlayers(options);
    }

    /**
     * 获取一天的时间刻
     * @returns {number}
     */
    getTimeOfDay() {
        return this.instance.getTimeOfDay();
    }

    /**
     * 播放音乐
     * @param {string} trackId 
     * @param {MCNative.MCServer.MusicOptions} [options={}] 
     */
    playMusic(trackId, options = {}) {
        this.instance.playMusic(trackId, options);
    }

    /**
     * 队列顺序播放音乐
     * @param {string} trackId 
     * @param {MCNative.MCServer.MusicOptions} [options={}] 
     */
    queueMusic(trackId, options = {}) {
        this.instance.queueMusic(trackId, options);
    }

    /**
     * 发送消息
     * @param {(MCNative.MCServer.RawMessage|string)[]|MCNative.MCServer.RawMessage|string} message 
     */
    sendMessage(message) {
        this.instance.sendMessage(message);
    }

    /**
     * 设置绝对时间
     * @param {number} absoluteTime 
     */
    setAbsoluteTime(absoluteTime) {
        this.instance.setAbsoluteTime(absoluteTime);
    }

    /**
     * 设置默认生成点
     * @param {MCNative.MCServer.Vector3} spawnLocation 
     */
    setDefaultSpawnLocation(spawnLocation) {
        this.instance.setDefaultSpawnLocation(spawnLocation);
    }

    /**
     * 设置动态属性
     * @param {string} identifier 
     * @param {boolean|number|string|MCNative.MCServer.Vector3} [options=null] 
     */
    setDynamicProperty(identifier, options = null) {
        this.instance.setDynamicProperty(identifier, options);
    }

    /**
     * 设置时间(刻)
     * @param {number|MCNative.MCServer.TimeOfDay} timeOfDay 
     */
    setTimeOfDay(timeOfDay) {
        this.instance.setTimeOfDay(timeOfDay);
    }

    /**
     * 停止音乐
     */
    stopMusic() {
        this.instance.stopMusic();
    }
}

export const MsWorld = new World(MCNative.MCServer.world);