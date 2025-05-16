import NodeList from "../Libs/NodeList";

class ISubCommand {
    
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
        this._name_ = name;
        this._help_ = help;
        this._error_ = error;
        this._isOp = isOp;
    }
    


}