const getValuePrefix = (mult, isHot) => {
    if (isHot) return "§6🔥 ";
    return mult == 0 ? '§7' : mult < 0 ? '§c' : '§a'
}

const getDisplayOffsetFromFacing = (facing, offset) => {
    switch (facing) {
    case "north":
        return offset.equals('x') ? 0.5 : 0.86;
    case "east":
        return offset.equals('x') ? 0.14 : 0.5;
    case "south":
        return offset.equals('x') ? 0.5 : 0.14;
    default:
    case "west":
        return offset.equals('x') ? 0.86 : 0.5;
    }
}

const spawnMarketMonitorDisplay = (block, y, id, textOrItem, type) => {
    let entity;
    const { x, z } = block;
    entity = block.createEntity(`minecraft:${type}_display`);
    let newNbt = entity.getNbt();
    const facing = block.properties.get("facing");
    // /summon minecraft:text_display ^ ^1 ^2 {text:'{"text":"Sample text","color":"yellow"}',brightness:{block:15,sky:15}}
    if (type === "text") {
        newNbt.text = `{"text":"${textOrItem}"}`;
        newNbt.transformation.scale = [NBT.f(0.8), NBT.f(0.8), NBT.f(0.8)]
        newNbt.brightness = { block: 15, sky: 15 }
    } else {
        newNbt.item = { id: Item.of("splendid_slimes:plort").id, Count: NBT.b(1), tag: NBT.compoundTag({ plort: { id: "splendid_slimes:" + textOrItem } }) }
        newNbt.transformation.scale = [NBT.f(0.5), NBT.f(0.5), NBT.f(0.5)]
        newNbt.brightness = { block: 15, sky: 15 }
    }
    newNbt.background = 0;
    newNbt.Rotation = [NBT.f(global.rotationFromFacing(facing)), NBT.f(0)];
    entity.setNbt(newNbt);
    entity.setX(x + getDisplayOffsetFromFacing(facing, "x"));
    entity.setY(y);
    entity.setZ(z + getDisplayOffsetFromFacing(facing, "z"));
    entity.addTag(`${id}-${x}-${block.y}-${z}`);
    entity.spawn();
};


global.handleMarketMonitorTick = (entity, forced) => {
    const { block, level } = entity;
    let nbt = block.getEntityData();
    let plort = nbt.data.plort;
    if (!plort) return;

    plort = plort.path
    const slimeData = level.getServer().persistentData['slime_value_data']

    if (slimeData && slimeData[plort] === undefined) return
    let plortData = slimeData[plort]
    let mult = plortData.multPercent;
    let value = Number(plortData.currentValue);
    if (value !== nbt.data.value) {
        nbt.merge({ data: { value: value } });
        block.setEntityData(nbt);
        let plortText =
            `${getValuePrefix(mult, plortData.isHot)}` +
            `${global.calculateCost(plortData.currentValue, 1, 1)}` +
            `${mult === 0 ? '' : mult < 0 ? '↓' : '↑'}`

        global.clearOldDisplay(block, "market_monitor_text");
        global.clearOldDisplay(block, "market_monitor_plort");

        spawnMarketMonitorDisplay(
            block,
            block.y + 0.05,
            "market_monitor_text",
            plortText,
            "text"
        );
        spawnMarketMonitorDisplay(
            block,
            block.y + 0.55,
            "market_monitor_plort",
            plort,
            "item"
        );
    }
};

const handleMarketMonitorRightClick = (click) => {
    const { block, item } = click;
    if (item.id.equals("splendid_slimes:plort")) {
        let nbt = block.getEntityData();
        nbt.merge({ data: { plort: item.nbt.plort.id } });
        block.setEntityData(nbt);
        global.handleMarketMonitorTick(click, true)
    }
};

StartupEvents.registry("block", (e) => {
    e.create("kubejs:market_monitor", "cardinal")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool")
        .box(0, 0, 13, 16, 16, 16)
        .defaultCutout()
        .soundType("copper")
        .item((item) => {
            item.tooltip(Text.gray("Right click with a Plort to display market value"));
            item.modelJson({
                parent: "kubejs:block/market_monitor",
            });
        })
        .model("kubejs:block/market_monitor")
        .rightClick((click) => {
            if (click.hand == "OFF_HAND") return;
            handleMarketMonitorRightClick(click);
        })
        .blockEntity((blockInfo) => {
            blockInfo.initialData({ plort: undefined, value: -1 });
            blockInfo.serverTick(20, 0, (entity) => {
                global.handleMarketMonitorTick(entity);
            });
        });
});
