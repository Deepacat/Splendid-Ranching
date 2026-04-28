ServerEvents.recipes(e => {
    // auto generated plort selling fake recipes
    for (const [slimeType, _] of Object.entries(slimeBaseDefinitions)) {
        let plortValueData = slimeBaseValues[slimeType]
        let disabled = disabledSlimes.includes(slimeType)

        if (plortValueData && disabled) { // skip and log if slimes disabled but has value data
            console.warn(`"${slimeType}" slime is disabled but has value data!`)
            continue
        }
        if (disabled) continue // skip disabled slimes
        if (plortValueData === undefined) { // skip and log if no value data
            console.warn(`no slime value data for - "${slimeType}"`)
            continue
        }

        // these recipes don't function they're just there to display selling in recipe viewer
        e.recipes.mbd2.plort_selling()
            .inputItems(
                Item.of(`splendid_slimes:plort`, `{plort:{id:"splendid_slimes:${slimeType}"}}`).weakNBT()
            )
    }
})

MBDMachineEvents.onTick("mbd2:selling_port", e => {
    const mbdEvent = e.event
    const { machine } = mbdEvent

    let itemTrait = machine.getTraitByName("item_slot")
    /** @type {ItemStackTransfer.prototype} */
    const storage = itemTrait.storage

    machine.customData.putInt("sell_price", 0) // base sell price to 0, changed later if any contents

    let plorts = {}

    for (let i = 0; i < storage.getSlots(); i++) { // iterate every slot
        let stack = storage.getStackInSlot(i) // get stack in slot
        if (stack.isEmpty()) { continue } // skip if empty
        let plortid = String(stack.nbt.plort.id).split(":")[1] // get plort breed e.g. "slimy"
        plorts[plortid] = (plorts[plortid] || 0) + stack.count // add to the plorts object for price calculation
    }

    if (Object.keys(plorts).length === 0) { return } // if no plorts found in slots, return
    let sellPrice = 0
    let slimeData = Utils.server.persistentData['slime_value_data'] // get current plort value data

    for (let plortid in plorts) { // calculate sell price from all plorts stored
        let count = plorts[plortid]
        sellPrice += slimeData[plortid].currentValue * count
    }

    // store updated sell price to machine block entity data since
    // the UI can't live update price when items are edited,
    // but the block entity can per tick
    machine.customData.putInt("sell_price", sellPrice)
    machine.customData.put("plort_data", plorts)
})

MBDMachineEvents.onUI("mbd2:selling_port", e => {
    const mbdevent = e.event
    const { machine, root } = mbdevent

    /** @type {LabelWidget_} */
    const label = root.getFirstWidgetById("text")
    /** @type {LabelWidget_} */
    const debuglabel = root.getFirstWidgetById("debuglabel")
    /** @type {ButtonWidget_} */
    const button = root.getFirstWidgetById("sell")

    /** @type {SlotWidget_[]} */
    const slots = []

    for (let i = 0; i < 6; i++) {
        slots.push(root.getFirstWidgetById(`item_slot_${i}`))
    }

    label.setTextProvider(() => `sells for §6${machine.customData.getInt("sell_price")}§a☻`)

    button.setOnPressCallback(clickData => {
        if (clickData.isRemote) { return } // if sell button clicked and not on client
        let plorts = machine.customData.get("plort_data")

        if (Object.keys(plorts).length === 0) { return } // return if no plort data, meaning empty

        for (let slot of slots) { // remove items from all slots
            if (slot.item.isEmpty()) { continue }
            slot.item = Item.empty
        }

        let sellPrice = machine.customData.getInt("sell_price") // get sell price from machine data
        let coinItems = global.getSellCoins(sellPrice) // get coin items from sell price
        machine.level.playSound(null, machine.pos.x, machine.pos.y, machine.pos.z, "create:stock_ticker_trade", "blocks", 1, 1)

        // iterate through coin items and pop them out of the machines top face
        machine.level.server.scheduleInTicks(10, () => {
            for (let i = 0; i < coinItems.length; i++) {
                let block = machine.level.getBlock(machine.pos)
                block.popItemFromFace(coinItems[i], "up")
            }
        })

        let dailySoldObj = machine.level.server.persistentData['daily_sold_plorts'] // get the daily sold plorts server data
        // add sold plorts to the daily sold plorts server data
        for (let plortid in plorts) {
            dailySoldObj[plortid] = (dailySoldObj[plortid] || 0) + plorts[plortid]
        }
        machine.customData.put("plort_data", {}) // reset machine plort data

        machine.level.server.persistentData['daily_sold_total'] += sellPrice // update daily sold total
    })
})
