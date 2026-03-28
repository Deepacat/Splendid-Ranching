// Script for slowing the player when holding over 4 slimes

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
