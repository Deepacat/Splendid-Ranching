// Removing recipes for items that are probably purchased in wares
// Full removals should be in nuking
ServerEvents.recipes(e => {
    e.remove({
        output: [
            "sophisticatedbackpacks:backpack",
            "sophisticatedbackpacks:restock_upgrade",
            "sophisticatedbackpacks:deposit_upgrade",
            "sophisticatedbackpacks:filter_upgrade",
            "sophisticatedbackpacks:void_upgrade",
            "sophisticatedbackpacks:pickup_upgrade",
            "sophisticatedbackpacks:battery_upgrade",
            "sophisticatedbackpacks:feeding_upgrade"
        ]
    })

    let recipeIdList = [
        "sophisticatedbackpacks:magnet_upgrade",
        "sophisticatedbackpacks:advanced_magnet_upgrade"
    ]
    for (let recipeId of recipeIdList) {
        e.remove({ id: recipeId }) // Can't just remove an array for some reason
    }
})
