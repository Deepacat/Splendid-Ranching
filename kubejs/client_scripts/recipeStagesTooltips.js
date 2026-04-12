let recipeStages = global.recipeStages

ItemEvents.tooltip(e => {
    for (let [stageId, stageObj] of Object.entries(recipeStages)) {
        for (let stageIngredient of stageObj.ingredients) {
            let curItems = Ingredient.of(stageIngredient).getStacks()
            let name = stageObj.name.toString()
            if (curItems == null) {
                console.warn(`stage obj ${stageIngredient} has no items`)
                continue
            }
            for (let curItem of curItems) {
                e.addAdvanced(curItem, (item, advanced, text) => {
                    let player = $Minecraft.player
                    if (player == null) return
                    if (player.stages.has(stageId)) { return }

                    text.add(text.length, [
                        `§6Requires research to craft:`
                    ])
                    text.add(text.length, [
                        `§8[ §7${name}§8 ]`
                    ])
                })
            }
        }
    }
})
