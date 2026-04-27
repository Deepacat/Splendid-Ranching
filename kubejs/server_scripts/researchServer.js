// definitions in startup
ServerEvents.recipes(e => {
    // loop over recipe stages data
    for (let [stageId, stageObj] of Object.entries(global.researchStages)) {
        // loop over recipes that output the staged ingredient
        for (let ingredient of stageObj.ingredients) {
            e.stage({ output: ingredient, type: "minecraft:crafting_shaped" }, stageId)
            e.stage({ output: ingredient, type: "minecraft:crafting_shapeless" }, stageId)
        }
    }
})

ServerEvents.tags('item', e => {
    // Research stage related tags
    tagRegex(e, 'kubejs:apothecaries', /botania:apothecary_/)
    e.add('kubejs:extra_gauges', '@extra_gauges')
    e.add('kubejs:fluid_logistics', '@create_factory_logistics')
    tagRegex(e, 'kubejs:connectors', /createaddition.*connector/)
})