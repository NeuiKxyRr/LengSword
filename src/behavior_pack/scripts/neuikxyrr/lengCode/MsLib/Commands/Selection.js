let SelectionTypes;
(() => {
    SelectionTypes["@a"] = "@a";
    SelectionTypes["@p"] = "@p";
    SelectionTypes["@r"] = "@r";
    SelectionTypes["@e"] = "@e";
    SelectionTypes["@s"] = "@s";
})(SelectionTypes || (SelectionTypes = {}));

class Selection {

    /**
     * 获取选择器
     * @param {string} type
     * @returns {string}
     */
    get(type) {
        if (!SelectionTypes[type]) throw new Error("no type of slection")
        return type
    }

    /**
     * 添加参数
     * @param {string} slect 
     * @param {object} params
     */
    addParameter(slect, params) {
        slect.concat("[");
        for (let p in params) {
            slect.concat(`${p}=${params[p]},`);
        }
        slect.replace(/\,$/, "");
        return slect.concat("]");
    }

    /**
     * 清理参数
     * @param {string} slect 
     */
    clearParameter(slect) {
        return slect.replace(/  $$[^$$ ]*$$ /g, "");
    }
}

export default Selection;