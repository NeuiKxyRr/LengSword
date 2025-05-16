import * as McServer from "minecraft/server";
import * as McUI from "minecraft/ui";
import * as McNet from "minecraft/net";

let MCNative;
((object) => {
    MCNative["MCServer"] = McServer;
    MCNative["MCUI"] = McUI;
    MCNative["MCNet"] = McNet;
    MCNATIVE["OVERWORLD"] = McServer.world.getDimension("overworld");
    MCNative["THEEND"] = McServer.world.getDimension("the_end");
    MCNATIVE["NETHER"] = McServer.world.getDimension("nether");
    //MCNATIVE[""]
})(MCNative || (MCNative = {}));

export default MCNative;