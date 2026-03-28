// Simple Discord Rich Presence Script
// Thanks to Monifactory & Ae6r for reference
// Server part (Server, Client)

/**
 * @param {Internal.SimplePlayerEventJS} e
 */
function updateRPC(e) {
    let account = global.GLOBAL_BANK["getAccount(net.minecraft.world.entity.player.Player)"](e.player)
    let balance = account.balance
    let day = Math.round(e.server.getLevel('minecraft:overworld').dayTime() / 24000) // convert to days, rounded for display purposes
    let collection = getSlimeCollectionData(e.player)

    let dataObj = { // Object of data to be sent to clients for rpc
        tickCount: Utils.server.tickCount, // testing
        balance: balance, // players numismatics balance
        day: day, // current minecraft day count
        collection: collection // slime collection data
    }

    e.player.sendData('kubejs:rpc', dataObj)
}

PlayerEvents.loggedIn(e => { // update rpc on login
    updateRPC(e)
})

PlayerEvents.tick(e => { // update rpc every 10 seconds
    if (Utils.server.tickCount % (20 * 10) != 0) { return }
    updateRPC(e)
})

// On completion causes issues with LOTS of queued rpc changes per quest, timer maybe better for all
// e.g. 9 quests completed at once queues 9 rpc updates every 5 seconds for 45 seconds total
// FTBQuestsEvents.completed(e => { // update rpc on quest completion
//     updateRPC(e)
// })
