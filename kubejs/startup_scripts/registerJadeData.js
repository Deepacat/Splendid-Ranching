JadeEvents.onCommonRegistration(e => {
    function setNbtKeys(blockEntity, tag, keys) {
        for (let key of keys) {
            if (blockEntity.data == null) { continue }
            if (blockEntity.data[key] == null || Number.isNaN(blockEntity.data[key])) { continue }

            if (typeof blockEntity.data[key] == Number) {
                tag.putInt(key, blockEntity.data[key]);
            } else {
                tag.putString(key, blockEntity.data[key]);
            }
        }
    }

    e.blockDataProvider("kubejs:market_monitor", $BlockEntity).setCallback((tag, accessor) => {
        setNbtKeys(accessor.blockEntity, tag, ["plort", "value"])
    })
})
