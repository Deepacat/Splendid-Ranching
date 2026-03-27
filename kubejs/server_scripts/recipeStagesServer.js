// definitions in startup
ServerEvents.recipes(e => {
    // loop over recipe stages data
    for (let [stageId, stageObj] of Object.entries(global.recipeStages)) {
        // loop over recipes that output the staged ingredient
        for (let ingredient of stageObj.ingredients) {
            e.stage({ output: ingredient }, stageId)
        }
    }
})
