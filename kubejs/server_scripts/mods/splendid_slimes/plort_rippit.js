const rippitOutputs = JsonIO.read("kubejs/server_scripts/mods/splendid_slimes/rippitOutputs.jsonc")

ServerEvents.recipes(e => {
    e.remove({ type: 'splendid_slimes:plort_ripping' })

    // loop over all slimes
    for (const [slimeType, slimeData] of Object.entries(slimeBaseDefinitions)) {
        if (disabledSlimes.includes(slimeType)) continue
        let recipeData = rippitOutputs[slimeType]
        // skip and log if slime type has no recipe data
        // not all slimes *need* the data this is just for noting
        if (recipeData === undefined || recipeData.length === 0) {
            console.warn(`no rippit data for - "${slimeType}"`)
            continue
        }
        e.custom({
            type: "splendid_slimes:plort_ripping",
            ingredient: {
                item: "splendid_slimes:plort",
                nbt: { plort: { id: `splendid_slimes:${slimeType}` } }
            },
            results: recipeData
        }).id(`kubejs:generated/rippit/${slimeType}`)
    }

    // Manual recipes
    e.custom({
        type: "splendid_slimes:plort_ripping",
        ingredient: { item: "splendid_slimes:plort", nbt: { plort: { id: "splendid_slimes:time" } } },
        results: [
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'), count: 1, weight: 10 },
            { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'), count: 1, weight: 10 }
        ]
    }).id(`kubejs:generated/rippit/sweet`)
})
