import MCNative from "../MCNative";

export default class AssistantUtil {
    
    /**
     * 禁用mcfunction
     */
    static disableMCFunction() {
        MCNative.MCServer.GameRules.functionCommandLimit = 0;
    }
    
    /**
     * 锁定randomTick
     */
    static lockRandomTick() {
        MCNative.MCServer.GameRules.randomTickSpeed = 0;
    }
    
    /**
     * 关闭命令方块
     */
    static disableCommand() {
        MCNative.MCServer.GameRules.commandBlocksEnable = false;
    }
    
};
