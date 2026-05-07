/** @param {Internal.BlockEntityJS} entity */
global['handleDataStorageTick'] = (entity) => {
    let nbt = entity.block.entityData
    nbt.merge({ data: entity.level.server.persistentData['slime_value_data'] })
}

/** @param {Internal.BlockRightClickedEventJS} clickCtx */
global['dataStorageClicked'] = (clickCtx) => {
    const { block, player, item } = clickCtx
    if (!player.shiftKeyDown) {
        player.tell("§cShift key must be held to display market data")
        return
    }
    let nbt = clickCtx.block.entityData
    nbt.merge({ data: player.server.persistentData['slime_value_data'] })
    player.tell(nbt)
    player.tell("§dDisplayed market data above, copy from your log if usage desired.")
}

StartupEvents.registry("block", e => {
    e.create("kubejs:market_data_storage", "cardinal")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool")
        .soundType("copper")
        .model("minecraft:block/furnace")
        .item(item => {
            item.tooltip(Text.gray("Stores the daily markets data in it's block entity data"))
            item.tooltip(Text.gray("The data can be extracted using computercraft and a block reader"))
            item.tooltip(Text.gray("Shift right clicking also sends you the full market data"))
        })
        .rightClick(clickCtx => {
            if (clickCtx.hand == "OFF_HAND") return
            global['dataStorageClicked'](clickCtx)
        })
        .blockEntity(blockInfo => {
            blockInfo.serverTick(100, 0, entity => {
                global['handleDataStorageTick'](entity)
            })
        })
})