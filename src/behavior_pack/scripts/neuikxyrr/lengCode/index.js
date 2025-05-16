import { MsLib } from "./MsLib/export";
const em = MsLib.World.eventManager;
for (const key in em.getListers()) {
    if (Object.hasOwnProperty.call(em.getListers(), key)) {
        const event = em.getListers()[key];
        event = new MsLib.Event("test");  
    }
}