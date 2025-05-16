/**
 * Callback接口
 * @param {Function} cb 回调函数
 * @param {number} pr 优先级，最高为0，增大优先级降低
 */
export default function ICallback(cb, pr) {
    return {
        callback: callback,
        priority: Math.abs(pr)
    }
}