import { MCNative } from "./MCNative";

/**
 * Helper类
 */
export default class MsHelper {
    static server = MCNative.McServer;
    static world = MsHelper.server.world;

    /**
     * @typedef {Object} Cache
     * @property {*} get 获取方法
     * @property {void} put 放入方法
     */

    /**
     * 生成一个缓存对象
     * @returns {Cache} 缓存
     */
    static createCache() {
        const cache = {};
        return {
            get: function(key) {
                return cache[key];
            },
            put: function(key, value) {
                cache[key] = value;
            }
        }
    }

    /**
     * 生成一个UUID
     * @returns {string}
     */
    static getUUID() {
        const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        return pattern.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    /**
     * 判断是否为原生函数
     * @param {Function} func 
     * @returns {boolean}
     */
    isNativeFunction(func) {
        if (typeof func === "function" && func.toString().include("[native code]")) return true;
        return false;
    }

    /**
     * 获取所有函数
     * @param {object} obj 
     * @returns {string[]}
     */
    getAllFunction(obj) {
        let prototype = Object.getPrototypeOf(obj);
        const result = [];
        while(prototype) {
            let funcs = Reflect.ownKeys(prototype).filter(funcName => {
                return funcName != "constructor";
            });
            for(const funcName of funcs) {
                if (typeof funcName == "string") result.push(funcName);
            }
            prototype = Object.getPrototypeOf(prototype);
        }
        return result;
    }
}
