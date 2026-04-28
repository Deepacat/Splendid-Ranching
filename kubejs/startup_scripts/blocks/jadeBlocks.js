

/**
 * @param {Internal.BlockEntity} blockEntity
 * @param {Internal.CompoundTag} tag 
 * @param {String[] | String} keys 
 */
global.registerKeys = (blockEntity, tag, keys) => {
    if (blockEntity.data == null) { return }
    for (let key of keys) {
        if (blockEntity.data[key] != null && !Number.isNaN(blockEntity.data[key])) {
            if (typeof blockEntity.data[key] == Number) {
                tag.putInt(key, blockEntity.data[key])
            } else {
                tag.putString(key, blockEntity.data[key])
            }
        }
    }
}

/**
 * @param {Internal.BlockAccessor} accessor
 * @param {Internal.CompoundTag} tag 
 * @param {String[] | String} keys 
 */
global.mbd2MachineKeys = (accessor, tag) => {
    if (!accessor.block || accessor.block.id != "mbd2:auto_selling_port") { return }
    let data = accessor.level.getBlock(accessor.position).entityData["customData"]
    tag.put("customData", data || null)
}

JadeEvents.onCommonRegistration(e => {
    e.blockDataProvider("kubejs:market_monitor", $BlockEntity).setCallback((tag, accessor) => {
        global.registerKeys(accessor.blockEntity, tag, ["plort", "value"])
    })
    e.blockDataProvider("mbd2:auto_selling_port", $BlockEntity).setCallback((tag, accessor) => {
        global.mbd2MachineKeys(accessor, tag)
    })
})
