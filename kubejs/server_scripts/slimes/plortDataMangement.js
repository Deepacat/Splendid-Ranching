// priority: 999
// Happens after globalServer

// On world load, set servers slime value data if not set yet in the world
ServerEvents.loaded(e => {
    // Set all base server values if not set yet (These are edited by market data updates)
    e.server.persistentData['slime_value_data'] = e.server.persistentData['slime_value_data'] || slimeBaseValues
    e.server.persistentData['daily_sold_plorts'] = e.server.persistentData['daily_sold_plorts'] || {}
    e.server.persistentData['daily_sold_total'] = e.server.persistentData['daily_sold_total'] || 0
    e.server.persistentData['announce_text'] = e.server.persistentData['announce_text'] || {}

    // Should only run on first server load
    if (e.server.persistentData['slime_value_data'] === undefined) {
        // Run daily updates to set initial values and announce them on world load
        dailyUpdates(e.server)
    }
    // Update servers slime market values from file, if any edits were made
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
        $UsernameCache.getMap().forEach((key, value) => { knownPlayers[key] = value })
        e.player.sendData('kubejs:known_players', knownPlayers)

        let stagesObj = { stages: [] }
        let stagesArray = e.player.stages.all.toArray()
        for (let stageId of stagesArray) { stagesObj['stages'].push(stageId) }
        e.player.sendData('kubejs:research_stages', stagesObj)
    }
})

// re-announce the daily text stored in the server to the player when a player logs in
PlayerEvents.loggedIn(e => {
    announceDaily(`§6Welcome Back§r, Rancher!`, e.player)
})

// Send slime value data to clients that request it
NetworkEvents.dataReceived('kubejs:slime_value_data_client_request', e => {
    e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
})

// Checking if daily updates should run
ServerEvents.tick(e => {
    if (Utils.server.tickCount % 20 != 0) { return } // update once a second
    let dayTime = e.server.getLevel('minecraft:overworld').dayTime()
    let morningModulo = dayTime % 24000 // "6 am" every minecraft day

    if (!(morningModulo >= 0 && morningModulo < 20)) { return }

    dailyUpdates(e.server) // run daily updates
})
