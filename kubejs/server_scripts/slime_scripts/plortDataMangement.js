// priority: 999

// on world load, set servers slime value data if not set yet in the world
ServerEvents.loaded(e => {
    // this SHOULD only occur on first world load, but in the future if the pack continues
    //  it should instead check if the entries are equal to base data and merge them if not for update compatibility
    if (e.server.persistentData['slime_value_data'] === undefined) {
        // set all base server values
        e.server.persistentData['slime_value_data'] = global.baseSlimeValueData
        e.server.persistentData['daily_sold_plorts'] = {}
        e.server.persistentData['daily_sold_total'] = 0
    }
})

// send slime value data to clients for tooltip information
PlayerEvents.tick(e => {
    if (Utils.server.tickCount % 200 === 0) { // update every 10 seconds
        e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
    }
})

// debug used for testing, comment on release
ItemEvents.firstLeftClicked('minecraft:diamond_sword', e => {
    e.player.tell(`reset all stored server data to defaults!`)
    e.server.persistentData['slime_value_data'] = global.baseSlimeValueData
    e.server.persistentData['daily_sold_plorts'] = {}
    e.server.persistentData['daily_sold_total'] = 0
})

// daily updates
ServerEvents.tick(e => {
    try {
        if (Utils.server.tickCount % 20 != 0) { return } // update once a second
        let dayTime = e.server.getLevel('minecraft:overworld').dayTime()
        let morningModulo = dayTime % 24000 // "6 am" every minecraft day

        // e.server.tell(`${dayTime}, ${morningModulo}`) // debug 

        if (!(morningModulo >= 0 && morningModulo < 20)) { return }

        let dailySoldPlorts = e.server.persistentData['daily_sold_plorts']
        let dailySoldTotal = e.server.persistentData['daily_sold_total']

        // if within 20 ticks of "6 am"
        e.server.tell("| §6Goooood morning, Rancher!")
        if (dailySoldTotal > 0) { // if there was anything sold, tell about it
            e.server.tell(`|| Yesterday you sold:`)
            for (let plortBreed in dailySoldPlorts) {
                let count = dailySoldPlorts[plortBreed]
                e.server.tell(Text.of(`|| ${count} ${plortBreed} plorts`).color(global.slimeDefinitionsData[plortBreed].color))
            }
            e.server.tell(`|| For a total of §6${dailySoldTotal}§a☻!`)
        }

        let slimeValueData = e.server.persistentData['slime_value_data']
        // 1-4 random plorts to have double value
        let hotDemands = Object.keys(slimeValueData)
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.floor(Math.random() * 3) + 1)

        e.server.tell(`| Todays hot §dplort§r demands are:`)
        for (let plortBreed of hotDemands) {
            e.server.tell(Text.of(`|| ${plortBreed}`).color(global.slimeDefinitionsData[plortBreed].color))
        }

        // daily price adjustments
        // gets all daily plorts sold and adjuts prices based on sales and randomness
        let dailyCalc = dailyRecalculatePlortValues(slimeValueData, dailySoldPlorts, hotDemands)
        e.server.persistentData['slime_value_data'] = dailyCalc.valueData

        let fluc = Math.round((dailyCalc.marketFluctuation - 1) * 100)
        e.server.tell(`| Todays market fluctuation is ` + (fluc > 0 ? `§a+${fluc}% :)` : `§c${fluc}% :(`))

        // reset daily data
        e.server.persistentData['daily_sold_plorts'] = {}
        e.server.persistentData['daily_sold_total'] = 0

        for (let player of e.server.players) {
            player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
        }
    } catch (err) {
        console.error(err)
    }
})