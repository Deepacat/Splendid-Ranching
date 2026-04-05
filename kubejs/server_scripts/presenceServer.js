// Simple Discord Rich Presence packet bridge for PresenceJS.

/**
 * @param {Internal.SimplePlayerEventJS} e
 */
function updateRPC(e) {
	let account = getNumismaticAccount(e.player)
    let balance = account.balance

	// console.log(balance);
	// console.log(account.balance);

	let day = Math.round(e.server.getLevel('minecraft:overworld').dayTime() / 24000)
	let collection = getSlimeCollectionData(e.player)

	let dataObj = {
		balance: balance,
		day: day,
		collection: collection
	}

	e.player.sendData('kubejs:rpc', dataObj)
}

PlayerEvents.loggedIn(e => {
	updateRPC(e)
})

PlayerEvents.tick(e => {
	if (Utils.server.tickCount % (20 * 10) != 0) { return }
	updateRPC(e)
})

// FTBQuestsEvents.completed(e => {
//     updateRPC(e)
// })
