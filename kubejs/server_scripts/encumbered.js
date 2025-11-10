// @ts-check

PlayerEvents.inventoryChanged(e => {
    if (e.player.isFake() || !e.player.isPlayer()) { return }
    // @ts-ignore
    if (!e.item.id == 'splendid_slimes:slime_item') { return }

    let invCount = e.player.inventory.count('splendid_slimes:slime_item')
    if (e.player.inventory.count('splendid_slimes:slime_item') > 4 ) {
        e.player.potionEffects.add("slowness", 25, (invCount) - 2, false, false)
        e.player.potionEffects.add("jump_boost", 25, 2 - (invCount), false, false)
    }
})

PlayerEvents.tick(e => {
    if (Utils.server.tickCount % 20 != 0) { return }
    
    let invCount = e.player.inventory.count('splendid_slimes:slime_item')
    if (e.player.inventory.count('splendid_slimes:slime_item') > 4 ) {
        e.player.potionEffects.add("slowness", 25, (invCount) - 2, false, false)
        e.player.potionEffects.add("jump_boost", 25, 2 - (invCount), false, false)
    }
})

// PlayerEvents.inventoryChanged(e => {
//     const player = e.player
//     if (!isRealPlayer(e.player)) { return }
//     if (!e.item.id == 'splendid_slimes:slime_item') { return }
    
//     if (e.player.inventory.find('#kubejs:burning_hot') == -1) {
//         player.extinguish()
//         return
//     }

//     if (!player.isInWater()) {
//         player.setStatusMessage([Text.of(`A hot item is burning you!`).red()])
//         player.setSecondsOnFire(3)
//     }
// })

// ItemEvents.dropped(e => {
//     const player = e.player
//     if (!isRealPlayer(e.player)) { return }
//     if (!player.isOnFire()) { return }
//     if (!e.item.hasTag('kubejs:burning_hot')) { return }

//     if (e.player.inventory.find('#kubejs:burning_hot') == -1) {
//         player.extinguish()
//         return
//     }
// })

// PlayerEvents.tick(e => {
//     if (Utils.server.tickCount % 20 != 0) { return }

//     const player = e.player
//     if (!isRealPlayer(e.player)) { return }

//     if (!(player.inventory.find('#kubejs:burning_hot') == -1) && !player.isInWater()) {
//         player.setSecondsOnFire(3)
//     }
// })