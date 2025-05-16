import MCNative from "../MCNative";

export default class StructureManager {
    /**
     * 创建一个结构管理器
     * @param {world} world 
     */
    constructor(world) {
        this.instance = MCNative.McServer.world.StructureManager;
        this.world = world;
    }

    get stack() {
        return this.getWorldStructureIds().length;
    }
    set stack(i) {
        for (let t = 0, p = this.getWorldStructureIds(); t < (p.length - i); t++) {
            this.delete(p[t]);
        }
    }

    /**
     * 创建空结构
     * @param {string} id 
     * @param {MCNative.McServer.Vector3} size 
     * @param {MCNative.McServer.StructureSaveMode} [savemode=0] 
     * @returns {MCNative.McServer.Structure}
     */
    createEmpty(id, size, savemode = 0) {
        let result;
        this.world.timer.run(() => {
            result = this.instance.createEmpty(id, ssiz, savemode);
        });
        return result;
    }

    /**
     * 从世界创建结构
     * @param {string} id 
     * @param {MCNative.McServer.Dimension} dimension 
     * @param {MCNative.McServer.Vector3} from 
     * @param {MCNative.McServer.Vector3} to 
     * @param {MCNative.McServer.StructureCreateOptions} [options=null] 
     * @returns {MCNative.McServer.Structure}
     */
    createFromWorld(id, dimension, from, to, options = null) {
        let result;
        this.world.timer.run(() => {
            result = this.createFromWorld(id, dimension, from, to, options);
        });
        return result;
    }

    /**
     * 删除结构
     * @param {string|MCNative.McServer.Structure} id 
     * @returns {boolean}
     */
    delete(id) {
        let result;
        this.world.timer.run(() => {
            result = this.instains.delete(id);
        })
        return result;
    }

    /**
     * 获取结构
     * @param {string} id 
     * @returns {MCNative.McServer.Structure|undefined}
     */
    get(id) {
        let result;
        this.world.timer.run(() => {
            result = this.instance.get(id);
        });
    }

    /**
     * 获取所有结构id
     * @returns {string[]}
     */
    getWorldStructureIds() {
        let result;
        this.world.run(() => {
            result = this.instance.getWorldStructureIds();
        });
        return result;
    }

    /**
     * 放置结构
     * @param {string} structure 
     * @param {MCNative.McServer.Dimension} dimension 
     * @param {MCNative.McServer.Vector3} location 
     * @param {MCNative.McServer.StructurePlaceOptions} [options=null] 
     */
    place(structure, dimension, location, options = null) {
        this.world.this.run(() => {
            this.instance.place(structure, dimension, location, options);
        })
    }
}
