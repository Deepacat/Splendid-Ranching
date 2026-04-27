// Adds tooltips to items telling what research they come from

// Global variable of researches from startup scripts
let playerStages = []
NetworkEvents.dataReceived('kubejs:research_stages', e => {
    /** @type {Internal.ListTag} */
    let data = e.data.stages
    data.forEach(stage => playerStages.push(stage.asString))
})

let itemStages = {}
ItemEvents.tooltip(e => {
    // Inside of the event for tag access
    for (let [stageId, stageObj] of Object.entries(global.researchStages)) {
        for (let stageIngredient of stageObj.ingredients) {
            // Using Ingredient stack itemIds to support tags in research item list
            let IngredientStacks = Ingredient.of(stageIngredient).itemIds
            for (let stack of IngredientStacks) {
                itemStages[stack] = stageId
            }
        }
    }
    
    e.addAdvancedToAll((item, advanced, text) => {
        // Return if the item does not have a related stage or stage data not received from server yet
        if (!itemStages[item.id] || playerStages.length === 0) return

        let stageId = itemStages[item.id]
        let displayName = global.researchStages[stageId].name
        let researched = playerStages.includes(stageId)
        let researchedText = researched ? "§a✔" : "§c❌"

        if (!researched) {
            text.add(text.length, [`§6Requires research to craft:`])
        }
        text.add(text.length, [`§8[§7 §e💡§7 ${displayName}§8 ${researchedText} §8]`])
    })
})
