// Adds tooltips to items telling what research they come from

// Global variable of researches from startup scripts
let playerStages = []
NetworkEvents.dataReceived('kubejs:research_stages', e => {
    /** @type {Internal.ListTag} */
    let data = e.data.stages
    data.forEach(stage => playerStages.push(stage.asString))
})

let itemStages = {}

for (let [stageId, stageObj] of Object.entries(global.researchStages)) {
    for (let stageIngredient of stageObj.ingredients) {
        itemStages[stageIngredient] = stageId
    }
}

ItemEvents.tooltip(e => {
    e.addAdvancedToAll((item, advanced, text) => {
        if (!itemStages[item.id] || playerStages.length === 0) return

        let stageId = itemStages[item.id]
        let displayName = global.researchStages[stageId].name
        let researched = playerStages.includes(stageId)
        let researchedText = researched ? "§a✔" : "§c❌"

        if (!researched) {
            text.add(text.length, [`§6Requires research to craft:`])
        }
        text.add(text.length, [`§8[ §7${displayName}§8 ${researchedText} §8]`])
    })
})
