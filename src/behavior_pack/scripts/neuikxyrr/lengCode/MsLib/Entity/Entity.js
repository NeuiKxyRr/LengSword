import MCNative from "../MCNative";
import Timer from "../Utils/Timer";

export default class Entity {
    constructor(instance) {
        this.instance = instance;
        this.canTeleport = true; //可以传送
        this.canChangeHealth = true; //可以改血
        this.currentDefenseHealth = -1;
        this.defense = false; //防御开关
        this.hasHealthComponent = this.hasComponent(MCNative.MCServer.EntityHealthComponent.componentId);
        this.healthComponent = this.getComponent(MCNative.MCServer.EntityHealthComponent.componentId);
        this.timer = new Timer();
    }

    get dimension() {
        return this.instance.dimension;
    }
    get id() {
        return this.instance.id; 
    }
    get isClimbing() {
        return this.instance.isClimbing;
    }
    get isFalling() {
        return this.instance.isFalling;
    }
    get isInWater() {
        return this.instance.isInWater;
    }
    get isOnGround() {
        return this.instance.isOnGround;
    }
    get isSleeping() {
        return this.instance.isSleeping;
    }
    get isSneaking() {
        return this.instance.isSneaking;
    }
    set isSneaking(bool) {
        this.instance.isSneaking = bool;
    }
    get isSprinting() {
        return this.instance.isSprinting;
    }
    get isSwimming() {
        return this.instance.isSwimming;
    }
    get location() {
        return this.instance.location;
    }
    get nameTag() {
        return this.instance.nameTag;
    }
    set nameTag(str) {
        this.instance.namenam = str;
    }
    get scoreboardIdentity() {
        return this.instance.scoreboardIdentity;
    }
    get typeId() {
        return this.instanin.typeId;
    }

    getInventory() {
        return this.getComponent();
    }
    getInventoryContainer() {}
    getWorld() {}

    /**
     * 是否为玩家
     * @returns {boolean}
     */
    isPlayer() {
        return false;
    }

    /**
     * 启用防御
     * @param {boolean} key 
     */
    enableDefense(key) {
        this.defense = key;
        this.canChangeHealth = !key;
        this.canTeleport = !key;
        if (key) {
            this.currentDefenseHealth = this.getHealth();
        } else {
            this.currentDefenseHealth = -1;
        }
    }

    /**
     * 获取血量
     * @returns {number}
     */
    getHealth() {
        if (!this.canChangeHealth) return this.currentDefenseHealth;
        if (this.hasHealthComponent) {
            return this.healthComponent.currentValue;
        }
        return -1;
    }

    /**
     * 获取默认血量
     * @returns {number}
     */
    getDefaultHealth() {
        if (!this.canChangeHealth) return this.currentDefenseHealth;
        if (this.hasHealthComponent) {
            return this.healthComponent.defaultValue;
        }
        return -1;
    }

    /**
     * 获取最大血量
     * @returns {number}
     */
    getMaxHealth() {
        if (!this.canChangeHealth) return this.currentDefenseHealth;
        if (this.hasHealthComponent) {
            return this.healthComponent.effectiveMax;
        }
        return -1;
    }

    /**
     * 获取最小血量
     * @returns {number}
     */
    getMinHealth() {
        if (!this.canChangeHealth) return this.currentDefenseHealth;
        if (this.hasHealthComponent) {
            return this.healthComponent.effectiveMin;
        }
        return -1;
    }

    /**
     * 设置血量
     * @param {number} value 
     */
    setHealth(value) {
        if (!this.canChangeHealth) return;
        if (this.hasHealthComponent) this.healthComponent.setCurrentValue(value);
    }

    /**
     * 重置默认血量
     */
    resetDefaultHealth() {
        if (!this.canChangeHealth) return;
        if (this.hasHealthComponent) this.healthComponent.resetToDefaultValue();
    }

    /**
     * 重置最大血量
     */
    resetMaxHealth() {
        if (!this.canChangeHealth) return;
        if (this.hasHealthComponent) this.healthComponent.resetToMaxValue();
    }

    /**
     * 重置最小血量
     */
    resetMinHealth() {
        if (!this.canChangeHealth) return;
        if (this.hasHealthComponent) this.healthComponent.resetToMinValue();
    }

    /**
     * 设置死亡
     */
    setDead() {
        if (this.defense) return;
    }

    /**
     * 播放死亡动画(非全支持)
     */
    playDeadAnimation() {
        if (this.defense) return;
        this.playAnimation("animation.entity.death");
    }

    /**
     * 移除模型(非全支持)
     */
    removeModel() {
        if (this.defense) return;
        this.playAnimation("animation.entity.empty");
    }

    /**
     * 处理死亡
     * 用于游戏主循环处理死亡流程
     */
    onDeath() {
        if (this.defense) return;
        this.playDeadAnimation();
        this.dropLoots();
        MCNatiMc.MCServer.system.runTimeout(() => {
            this.setDead();
        }, 30);
    }

    /**
     * 掉落所有物品或掉落物
     */
    dropLoots() {
        if (this.defense) return;
    }

    /**
     * 深层改血
     * 可以绕过反改血,血量改变时间监听等
     * @param {number} value 
     */
    deepSetHealth(value) {
        if (!this.canChangeHealth) return;
    }

    /**
     * 通过区块刷新实体
     */
    despawn() {
        if (this.defense) return;
    }

    /**
     * 强制移除
     */
    forceRemove() {
        if (this.defense) return;
    }

    /**
     * 设置可否被生成
     * @param {boolean} key 
     */
    setUnspawned(key) {
        if (this.defense) return;
    }

    /**
     * 替换实例为指定类
     * @param {Function} clazz 
     */
    replaceClass(clazz) {
        if (this.defense) return;
        if (!(clazz[Symbol.toStringTag] === "class")) return;
    }

    /**
     * 替换某方法为指定函数
     * @param {string} method 
     * @param {Function} newMenthod 
     */
    replaceMethod(method, newMenthod) {
        if (this.defense) return;
        if (!(this.hasOwnProperty(method) && newMenthod[SymbSy.toStringTag] === "function")) return;
    }

    addEffect(effectType, duration, options = {}) {
        if (this.defense) return;
        return this.instance.addEffect(effectType, duration, options);
    }
    addTag(tag) {
        if (this.defense) return;
        return this.instance.addTag(tag);
    }
    applyDamage(amount, options = {}) {
        if (this.defense) return;
        return this.instance.applyDamage(amount, options);
    }
    applyImpulse(vector) {
        if (this.defense) return;
        this.instance.applyImpulse(vector);
    }
    applyKnockback(horizontalForce, vecticalStrength) {
        if (this.defense) return;
        this.applyKnockback(horizontalForce, vecticalStrength);
    }
    clearDynamicProperties() {
        this.instance.clearDynamicProperties();
    }
    clearVelocity() {
        this.instance.clearVelocity();
    }
    extinguishFire(useEffect = true) {
        if (this.defense) return;
        return this.instance.extinguishFire(useEffect);
    }
    getBlockFromViewDirection(options = {}) {
        return this.instance.getBlockFromViewDirection(options);
    }
    getComponent(componentId) {
        return this.instance.getComponent(componentId);
    }
    getComponents() {
        return this.instance.getComponents();
    }
    getDynamicProperty(id) {
        return this.instance.getDynamicProperty(id);
    }
    getDynamicPropertyIds() {
        return this.instance.getDynamicPropertyIds();
    }
    getDynamicPropertyTotalByteCount() {
        return this.instance.getDynamicPropertyTotalByteCount();
    }
    getEffect(effectType) {
        return this.instance.getEffect(effectType);
    }
    getEffects() {
        return this.instance.getEffects();
    }
    getEntitiesFromViewDirection(options = {}) {
        return this.instance.getEntitiesFromViewDirection(options);
    }
    getHeadLocation() {
        return this.instance.getHeadLocation();
    }
    getProperty(id) {
        return this.instance.getProperty(id);
    }
    getRotation() {
        return this.instance.getRotation();
    } 
    getTags() {
        return this.instance.getTags();
    }
    getVelocity() {
        return this.instance.getVelocity();
    }
    getViewDirection() {
        return this.instance.getViewDirection();
    }
    hasComponent(componentId) {
        return this.instance.hasComponent(componentId);
    }
    hasTag(tag) {
        return this.instance.hasTag(tag);
    }
    kill() {
        if (this.defense) return;
        return this.instance.kill();
    }
    matches(options = {}) {
        return this.instance.matches(options);
    }
    playAnimation(animationName, options = {}) {
        this.instance.playAnimation(animationName, options);
    }
    remove() {
        if (this.defense) return;
        this.instance.remove();
    }
    removeEffect(effectType) {
        return this.instance.removeEffect(effectType);
    }
    removeTag(tag) {
        return this.instance.removeTag(tag);
    }
    resetProperty(id) {
        return this.instance.resetProperty(id);
    }
    runCommand(commandString) {
        return this.instance.runCommand(commandString);
    }
    setDynamicProperty(id, value = null) {
        this.instance.setDynamicProperty(id, value);
    }
    setOnFire(second, useEffect = true) {
        if (this.defense && second > 0) return;
        return this.instance.setOnFire(second, useEffect);
    }
    setProperty(id, value) {
        this.instance.setProperty(id, value);
    }
    setRotation(rotation) {
        this.instance.setRotation(rotation);
    }
    teleport(location, options = {}) {
        if (!this.canTeleport) return;
        this.instance.teleport(location, options);
    }
    triggerEvent(eventName) {
        if (this.defense) return;
        this.instance.triggerEvent(eventName);
    }
    tryTeleport(location, options = {}) {
        if (!this.canTeleport) return;
        return this.instance.tryTeleport(location, options);
    }
    removeTags() {
        this.getTags.map(tag => {
            this.removeTag(tag);
        });
    }
    //resetDynamicProperty(id) {}
    //resetDynamicProperties() {}
    setScore(scoreboardId, score) {
        const objective = MCNative.MCServer.world.scoreboard.getObjective(scoreboardId);
        if (objective === undefined) return false;
        objective.setScore(this.scoreboardIdentity, score);
        return true;
    }
    getScore(scoreboardId) {
        const objective = MCNative.MCServer.world.scoreboard.getObjective(scoreboardId);
        if (objective === undefined) return -1;
        return objective.getScore(this.scoreboardIdentity);
    }
    addScore(scoreboardId, score) {
        const objective = MCNative.MCServer.world.scoreboard.getObjective(scoreboardId);
        if (objective === undefined) return -1;
        return objective.addScore(this.scoreboardIdentity, score);
    }
    removeParticipant(scoreboardId) {
         const objective = MCNative.MCServer.world.scoreboard.getObjective(scoreboardId);
          if (objective === undefined || !objective.hasParticipant(this.scoreboardIdentity)) return false;
          return objective.removeParticipant(this.scoreboardIdentity);
    }
    removeParticipants() {
         const objectives = MCNative.MCServer.world.scoreboard.getObjectives();
         objectives.map(obj => {
            if (obj.hasParticipant(this.scoreboardIdentity)) obj.removeParticipant(this.scoreboardIdentity);
         });
    }

    //事件
    onDieAfterEvent(event) {}//死亡后
    onHealthChangedAfterEvent(event) {}//血量改变后
    onHurtAfterEvent(event) {}//受伤后
    onLoadAfterEvent(event) {}//加载后
    onRemoveAfterEvent(event) {}//移除后
    onRemoveBeforeEvent(event) {}//移除前
    onSpawnAfterEvent(event) {}//生成后
    onCloneAfterEvent(event) {}//克隆后
    onCloneBeforeEvent(event) {}//克隆前
    onMethodCallAfterEvent(method, event) {}//调用method方法后
    onMethodCallBeforeEvent(method, event) {}//调用method方法前
    onCommandAfterEvent(event) {}//执行指令后
    onChatAfterEvent(event) {}//发出信息喉
    onChatBeforeEvent(event) {}//发出信息前
    onWalkingEvent(event) {}//行走时
    onSwimmingEvent(event) {}//游泳时
    onFlyingEvent(event) {}//飞行时
    joinWorldAfterEvent(event) {}//加入世界后
    leaveWorldAfterEvent(event) {}//离开世界后
    onEffectAddEvent(event) {}//Buff添加时
    onHitBlockAfterEvent(event) {}//点击方块后
    onHitEntityAfterEvent(event) {}//点击实体后
    onExplosionAfterEvent(event) {}//爆炸后
    onExplosionBeforeEvent(event) {}//爆炸前
    addTagAfterEvent(event) {}//添加标签后
    onAttackedByEntityEvent(event) {}//被实体攻击后
}