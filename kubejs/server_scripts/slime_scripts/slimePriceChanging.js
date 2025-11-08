// priority: 999

ServerEvents.loaded(e => {
    if (e.server.persistentData['slime_value_data'] === undefined) {
        e.server.persistentData['slime_value_data'] = global.baseSlimeValueData
    }
})

PlayerEvents.tick(e => {
    if(Utils.server.tickCount % 200 === 0) {
        e.player.sendData('kubejs:slime_value_data', e.server.persistentData['slime_value_data'])
    }
})

ItemEvents.firstLeftClicked('minecraft:iron_sword', e => {
    e.server.persistentData['slime_value_data'] = global.baseSlimeValueData
})