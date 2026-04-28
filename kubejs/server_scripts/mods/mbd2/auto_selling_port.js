MBDMachineEvents.onTick("mbd2:auto_selling_port", e => {
    const mbdEvent = e.event
    const { machine } = mbdEvent
    if (Utils.server.tickCount % 20 != 0) { return }
    // set cooldown to 0 if it doesn't exist
    if (!machine.customData.getAllKeys().contains("cooldown")) {
        machine.customData.putInt("cooldown", 0)
    }
    // Lower cooldown every tick if it's greater than 0 (Once per second)
    if (machine.customData.getInt("cooldown") > 0) {
        machine.customData.putInt("cooldown", machine.customData.getInt("cooldown") - 1)
        return
    }
    let itemTrait = machine.getTraitByName("item_slot_in")
    /** @type {ItemStackTransfer.prototype} */
    let storage = itemTrait.storage
    let plorts = {}
    // iterate every slot and add to plorts object to calculate sell value
    for (let i = 0; i < storage.getSlots(); i++) {
        let stack = storage.getStackInSlot(i)
        if (stack.isEmpty()) { continue }
        let plortid = String(stack.nbt.plort.id).split(":")[1] // get plort breed e.g. "slimy"
        plorts[plortid] = (plorts[plortid] || 0) + stack.count // add to the plorts object
    }
    // if no plorts found in slots, return
    if (Object.keys(plorts).length === 0) { return }

    let sellPrice = 0
    let slimeData = Utils.server.persistentData['slime_value_data'] // get current plort value data
    // calculate sell price from all plorts stored
    for (let plortid in plorts) {
        let count = plorts[plortid]
        sellPrice += slimeData[plortid].currentValue * count
    }
    // get coin items from sell price
    let coinItems = global.getSellCoins(sellPrice)
    // Set cooldown to 300 (In seconds since this event runs once a second)
    machine.customData.putInt("cooldown", 300)
    machine.level.playSound(null, machine.pos.x, machine.pos.y, machine.pos.z, "create:stock_ticker_trade", "blocks", 1, 1)
    // Remove all items from slots
    for (let i = 0; i < storage.getSlots(); i++) {
        storage.setStackInSlot(i, Item.empty)
    }
    // iterate through coin items and pop them out of the machines top face
    for (let i = 0; i < coinItems.length; i++) {
        let block = machine.level.getBlock(machine.pos)
        let face = block.blockState.getValue(BlockProperties.HORIZONTAL_FACING)
        block.popItemFromFace(coinItems[i], face)
    }
    // get the daily sold plorts from server data
    let dailySoldObj = machine.level.server.persistentData['daily_sold_plorts']
    // add sold plorts to the daily sold plorts server data
    for (let plortid in plorts) {
        dailySoldObj[plortid] = (dailySoldObj[plortid] || 0) + plorts[plortid]
    }
    // update daily sold total
    machine.level.server.persistentData['daily_sold_total'] += sellPrice
})
