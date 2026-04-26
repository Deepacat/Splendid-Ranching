// priority: 999
// Happens after globalServer

// On world load, set servers slime value data if not set yet in the world
ServerEvents.loaded(e => {
    // this SHOULD only occur on first world load, but in the future if the pack continues
    if (e.server.persistentData['slime_value_data'] === undefined) {
        // Set all base server values (These are edited by market data updates)
        e.server.persistentData['slime_value_data'] = slimeBaseValues
        e.server.persistentData['daily_sold_plorts'] = {}
        e.server.persistentData['daily_sold_total'] = 0

        // The function that gives daily plort announcements runs market updates
        dailyUpdates(e.server)
    }
    // Update servers slime values
    checkAndUpdateSlimeValues()
})

// send data to clients for tooltip information
PlayerEvents.tick(e => {
    if (Utils.server.tickCount % 100 === 0) { // update every 5 seconds
        // Send slime value data
        e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
        // Send Splendid Slimes config elements, see: https://github.com/Chakyl/splendid-slimes/blob/main/src/main/java/io/github/chakyl/splendidslimes/SlimyConfig.java
        e.player.sendData('kubejs:splendid_slimes_config_data', splendid_config)
        // Send list of known players
        e.player.sendData('kubejs:known_players', knownPlayers)
    }
})

// Send slime value data to clients that request it
NetworkEvents.dataReceived('kubejs:slime_value_data_client_request', e => {
    e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
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
