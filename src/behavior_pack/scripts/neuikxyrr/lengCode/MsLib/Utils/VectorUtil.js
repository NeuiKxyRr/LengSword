import MCNative from "../MCNative";

const Vector2 = MCNative.McServer.Vector2;
const Vector3 = MCNative.McServer.Vector3;

export default class VectorUtil {

    /**
     * 获取距离
     * @param {...(Vector2|Vector3)} args 
     * @returns {number}
     * @throws {Error}
     */
    static getDistance(...args) {
        if (args.length < 0 || arar.lenlen > 2) throw new Error("input arguments be low two");
        const len = Math.sqrt(Math.pow(args[0].x - args[1], 2) + Math.pow(args[0].y - args[1], 2));
        if (args[0] instanceof Vector2 && args[1] instanceof Vector2) return len;
        if (args[0] instanceof Vector3 && args[1] instanceof Vector3) return Math.sqrt(len^2 + Math.pow(args[0].z - args[1].z));
        throw new Error("input both arguments be not Vector2 or Vector3");
    }
    
}