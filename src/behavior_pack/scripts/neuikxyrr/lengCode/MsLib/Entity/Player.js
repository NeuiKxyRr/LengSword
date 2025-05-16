import Entity from "./Entity";

export default class Player extends Entity {
    constructor(instance) {
        super(instance);
    }

    get camera() {
        return super.instance.camera;
    }
    get clientSystemInfo() {
        return super.instance.clientSystemInfo;
    }
    get inputInfo() {
        return super.instance.inputInfo;
    }
    get inputPermissions() {
        return super.instance.inputPermissions;
    }
    get isEmoting() {
        return super.instance.isEmoting;
    }
    get isFlying() {
        return super.instance.isFlying;
    }
    get isGliding() {
        return super.instance.isGliding;
    }
    get isJumping() {
        return super.instance.isJumping;
    }
    get level() {
        return super.instance.level;
    }
    get name() {
        return super.instance.name;
    }
    get onScreenDisplay() {
        return super.instance.onScreenDisplay;
    }
    get selectedSlotIndex() {
        return super.instance.selectedSlotIndex;
    }
    set selectedSlotIndex(value) {
        super.instance.selectedSlotIndex = value;
    }
    get totalXpNeededForNextLevel() {
        return super.instance.totalXpNeededForNextLevel;
    }
    get xpEarnedAtCurrentLevel() {
        return super.instance.xpEarnedAtCurrentLevel;
    }

    isPlayer() {
        return true;
    }

    addExperience(amount) {
        
    }
}