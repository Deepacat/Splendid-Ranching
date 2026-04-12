function returnOg(accessor) {
    return $IElementHelper.item(Item.of(accessor.block.id))
}

/**
 * @param {Internal.BlockAccessor} accessor
 * @param {Internal.IPluginConfig} config
 * @param {Internal.IElement} currentIcon
 * @returns
 */
global["marketMonitorIconCallback"] = (accessor, config, currentIcon) => {
    if (accessor.block.id != 'kubejs:market_monitor') { return returnOg(accessor) }
    let nbt = accessor.getServerData()
    if (!nbt.plort) return returnOg(accessor)
    return $IElementHelper.item(Item.of('splendid_slimes:plort', { plort: { id: nbt.plort } }))

}
/**
 * @param {Internal.ITooltipWrapper} tooltip
 * @param {Internal.BlockAccessor} accessor
 * @param {Internal.IPluginConfig} pluginConfig
 */
global["marketMonitorTooltipCallback"] = (tooltip, accessor, pluginConfig) => {
    if (accessor.block.id != 'kubejs:market_monitor') return
    let nbt = accessor.getServerData()
    if (!nbt.plort) return
    let item = Item.of('splendid_slimes:plort', { plort: { id: nbt.plort } })
    tooltip.clear()
    tooltip.append(Text.of(item.hoverName))
}

JadeEvents.onClientRegistration(e => {
    e.block('kubejs:market_monitor', $Block)
        .tooltip((tooltip, accessor, pluginConfig) => {
            global["marketMonitorTooltipCallback"](tooltip, accessor, pluginConfig);
        })
        .icon((accessor, config, currentIcon) => {
            return global["marketMonitorIconCallback"](accessor, config, currentIcon);
        })
})
