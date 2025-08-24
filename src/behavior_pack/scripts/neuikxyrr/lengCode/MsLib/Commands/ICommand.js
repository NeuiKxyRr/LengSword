import NodeList from "../Libs/NodeList";
import Selection from "./Selection";

class ISubCommand {
    constructor() {

    }
}

class SubCommand extends NodeList {
    constructor() {
        super();
    }
}

export default class ICommand {
    /** 
     * @param {string} name 指令
     * @param {} selector 
     */
    constructor(name, selector, help, error, isOp) {
        this._name_ = name;//主名称
        this._help_ = help;//尽量将子命令的提示全部集成在这里
        this._error_ = error;
        this._isOp = isOp;
        this.subCommands = new SubCommand();
    }

    addSubCommand(subCmd) {
        this.subCommands.push(subCmd);
    }

    removeSubCommand() {
        this.subCommands.clear();
    }

}