import { EntityList, DeadEntityList, LazyDeadEntityList } from "./Datas/EntityList";
import { MsItemManagerIn } from "./Datas/MsItem";
import Entity from "./Entity/Entity";
import Player from "./Entity/Player";
import EventManager from "./Events/ EventManager";
import Event from "./Events/Event";
import ItemStack from "./ItemStack/ItemStack";
import NodeList from "./Libs/NodeList";
import NodeStack from "./Libs/NodeStack";
import Queue from "./Libs/Queue";
import Stack from "./Libs/Stack";
import StructureManager from "./Structures/ StructureManager";
import AssistantUtil from "./Utils/AssistantUtil";
import Task from "./Utils/Task";
import Timer from "./Utils/Timer";
import VectorUtil from "./Utils/VectorUtil";
import { OverWorld, TheEnd, Nether } from "./World/Dimension";
import { MsWorld } from "./World/World";
import MsHelper from "./MsHelper";
import MCNative from "./MCNative";

const MsLib = {
    EntityList: EntityList,//实体列表
    DeadEntityList: DeadEntityList,//死亡实体列表
    LazyDeadEntityList: LazyDeadEntityList,//惰性死亡实体列表
    ItemManager: MsItemManagerIn,//物品管理类
    Entity: Entity,//实体类
    Player: Player,//玩家类
    EventManager: EventManager,//事件管理类
    Event: Event,//事件类
    ItemStack: ItemStack,//物品类
    NodeList: NodeList,//链表
    NodeStack: NodeStack,//链栈
    Queue: Queue,//队列
    Stack: Stack,//栈
    StructureManager: StructureManager,//结构管理类
    AssistantUtil: AssistantUtil,//额外杀伤工具
    Task: Task,//任务
    Timer: Timer,//定时器
    VectorUtil: VectorUtil,//坐标工具
    World: MsWorld,
    Dimension: {
        OverWorld: OverWorld,//主世界
        TheEnd: TheEnd,//末地
        Nether: Nether//地狱
    },
    Helper: MsHelper,//Helper类
    Native: MCNative//原模块
}

export { MsLib };