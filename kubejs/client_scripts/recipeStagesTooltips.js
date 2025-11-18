const $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')

let recipeStages = global.recipeStages

ItemEvents.tooltip(e => {
    for (let [stageId, stageObj] of Object.entries(recipeStages)) {
        for (let stageItem of stageObj.items) {
            e.addAdvanced(stageItem, (item, advanced, text) => {
                let player = $Minecraft.getInstance().player
                if (player == null) return
                if (player.stages.has(stageId)) { return }

                text.add(text.length, [
                    `§6Requires research to craft:`
                ])
                text.add(text.length, [
                    `§8[§7${stageObj.name}§8]`
                ])
            })
        }
    }
})