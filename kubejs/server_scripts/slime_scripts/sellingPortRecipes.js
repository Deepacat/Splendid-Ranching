
ServerEvents.recipes(e => {
    // these recipes don't function they're just there to display selling in recipe viewer
    for (const [type, _] of Object.entries(global.baseSlimeData)) {
        e.recipes.mbd2.plort_selling()
            .inputItems(
                Item.of(`splendid_slimes:plort`, `{plort:{id:"splendid_slimes:${type}"}}`).weakNBT()
            )
    }
})