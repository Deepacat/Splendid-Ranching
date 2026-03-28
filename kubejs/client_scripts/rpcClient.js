// Simple Discord Rich Presence Script
// Thanks to Monifactory & Ae6r for reference
// Client part (Server, Client)

let status = "Status initializing..."

SDRP.setState(`${status}`, "hai :3", "menu")

NetworkEvents.dataReceived('kubejs:rpc', e => {
    let dataObj = e.data
    let slimesCollected = dataObj.collection.collectedTotal
    let slimesTotal = dataObj.collection.allTotal
    let balanceNum = Math.floor(Number(dataObj.balance)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    status = `Glubcoin: ${balanceNum}¤ | Day: ${dataObj.day} | Slimes: ${slimesCollected}/${slimesTotal}`

    SDRP.setState(
        `${status}`,
        "Download Splendid Ranching on curseforge!",
        "curseforgeicon"
    )
})