// priority: 999

// on world load, set servers slime value data if not set yet in the world
ServerEvents.loaded(e => {
    // this SHOULD only occur on first world load, but in the future if the pack continues
    //  it should instead check if the entries are equal to base data and merge them if not for update compatibility
    if (e.server.persistentData['slime_value_data'] === undefined) {
        // set all base server values
        e.server.persistentData['slime_value_data'] = slimeBaseValues
        e.server.persistentData['daily_sold_plorts'] = {}
        e.server.persistentData['daily_sold_total'] = 0

        e.server.tell(`| §6Goooood morning, Rancher!`)
        // run first daily updates, unsure if this should stay on first day
        dailyUpdates(e)
    }
})

// send slime value data to clients for tooltip information
PlayerEvents.tick(e => {
    if (Utils.server.tickCount % 200 === 0) { // update every 10 seconds
        e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
    }
})

// Checking if daily updates should run
ServerEvents.tick(e => {
    try {
        if (Utils.server.tickCount % 20 != 0) { return } // update once a second
        let dayTime = e.server.getLevel('minecraft:overworld').dayTime()
        let morningModulo = dayTime % 24000 // "6 am" every minecraft day

        if (!(morningModulo >= 0 && morningModulo < 20)) { return }

        dailyUpdates(e) // run daily updates
    } catch (err) {
        console.error(err)
    }
})
