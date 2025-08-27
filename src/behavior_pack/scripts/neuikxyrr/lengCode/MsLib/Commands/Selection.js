let SelectionTypes;
(() => {
    SelectionTypes["@a"] = "@a";
    SelectionTypes["@p"] = "@p";
    SelectionTypes["@r"] = "@r";
    SelectionTypes["@e"] = "@e";
    SelectionTypes["@s"] = "@s";
})(SelectionTypes || (SelectionTypes = {}));

/**
 * 返回 = or !=
 * true: = , false: !=
 * @returns {boolean}
 */
function isOrNot(str) {
    if (str.startsWith("!#")) return true;
    return str.startsWith("!")
}

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
            let p_val = params[p];
            if (p_val instanceof Array) {
                for (var i=0;i<p_val.length;i++) {
                    if (isOrNot(p_val[i])) slect.concat(`${p}=${p_val[i]},`)
                        else
                    slect.concat(`${p}!=${p_val[i]},`);
                }
            }
            if (isOrNot(p_val)) slect.concat(`${p}=${p_val},`);
                else
            slect.concat(`${p}!=${p_val},`);
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

const CustomSelcetion = {
    OnlyPlayer: Selection.get("@a"),
    NearEntity: Selection.get("@p"),
    RandomEntity: Selection.get("@r"),
    AllEntity: Selection.get("@e"),
    Self: Selection.get("@s"),
    AllMonster: Selection.addParameter(CustomSelcetion.AllEntity, {type: "monster"}),
    AllMob: Selection.addParameter(CustomSelcetion.AllEntity, {type: "mob"}),
    AllUndead: Selection.addParameter(CustomSelcetion.AllEntity, {type: "undead"}),
    Boss: Selection.addParameter(CustomSelcetion.AllEntity, {type: ["ender_dragon", "wither"]})
}

export {
    Selection,//导入请别起别名
    CustomSelcetion
}