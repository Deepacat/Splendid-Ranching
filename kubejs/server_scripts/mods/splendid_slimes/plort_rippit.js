const rippitOutputs = {
    // t0 
    slimy: [
        { item: "minecraft:slime_ball", count: 6, weight: 1 },
        { item: "minecraft:slime_ball", count: 4, weight: 1 },
    ],
    puddle: [
        { item: "minecraft:clay_ball", count: 5, weight: 55 },
        { item: "minecraft:lily_pad", count: 3, weight: 15 },
        { item: "minecraft:lapis_lazuli", count: 7, weight: 30 },
    ],
    rocky: [
        { item: "minecraft:cobblestone", count: 10, weight: 50 },
        { item: "minecraft:tuff", count: 8, weight: 35 },
        { item: "minecraft:dripstone_block", count: 5, weight: 10 },
        { item: "minecraft:pointed_dripstone", count: 1, weight: 5 },
    ],
    monster: [
        { item: "minecraft:rotten_flesh", count: 5, weight: 60 },
        { item: "minecraft:string", count: 5, weight: 10 },
        { item: "minecraft:bone", count: 5, weight: 20 },
        { item: "minecraft:gunpowder", count: 5, weight: 10 },
    ],
    orby: [
        { item: "minecraft:experience_bottle", count: 3, weight: 1 },
        { item: "create:experience_nugget", count: 8, weight: 1 },
        { item: "create:experience_nugget", count: 5, weight: 1 },
    ],
    tabby: [
        { item: "minecraft:rabbit_foot", count: 1, weight: 5 },
        { item: "minecraft:rabbit_hide", count: 2, weight: 31 },
        { item: "minecraft:string", count: 3, weight: 32 },
        { item: "minecraft:feather", count: 2, weight: 32 },
    ],
    sweet: [
        { item: "minecraft:sugar", count: 4, weight: 200 },
        { item: "splendid_slimes:slime_candy", count: 1, weight: 1 }
    ],
    lush: [
        { item: "minecraft:flowering_azalea", count: 3, weight: 1 },
        { item: "minecraft:moss_block", count: 5, weight: 1 },
    ],
    dusty: [
        { item: "minecraft:gravel", count: 15, weight: 1 },
        { item: "alexscaves:sulfur_dust", count: 2, weight: 1 },
        { item: "create:cinder_flour", count: 5, weight: 1 },
    ],
    crystal: [
        { item: "quark:indigo_corundum", count: 5, weight: 1 },
        { item: "minecraft:amethyst_shard", count: 3, weight: 1 },
        { item: "minecraft:calcite", count: 8, weight: 1 },
        { item: "minecraft:lapis_lazuli", count: 4, weight: 1 },
    ],
    sandy: [
        { item: "minecraft:sand", count: 27, weight: 70 },
        { item: "minecraft:nautilus_shell", count: 1, weight: 25 },
        { item: "minecraft:scute", count: 3, weight: 5 },
    ],
    fire: [
        { item: "minecraft:blaze_powder", count: 3, weight: 40 },
        { item: "minecraft:charcoal", count: 7, weight: 40 },
        { item: "minecraft:fire_charge", count: 2, weight: 20 },
    ],
    alien: [
        { item: "minecraft:chorus_flower", count: 1, weight: 10 },
        { item: "minecraft:chorus_fruit", count: 8, weight: 45 },
        { item: "minecraft:end_stone", count: 16, weight: 45 },
    ],
    // t1

    // t2

    // t3

}

ServerEvents.recipes(e => {
    e.remove({ type: 'splendid_slimes:plort_ripping' })

    // loop over all slimes
    for (const [slimeType, slimeData] of Object.entries(global.slimeDefinitionsData)) {
        let recipeData = rippitOutputs[slimeType]
        // skip and log if slime type has no recipe data
        // not all slimes *need* the data this is just for noting
        if (recipeData === undefined) {
            console.warn(`no rippit data for - "${slimeType}"`)
            continue
        }
        e.custom({
            type: "splendid_slimes:plort_ripping",
            ingredient: {
                item: "splendid_slimes:plort",
                nbt: {
                    plort: {
                        id: `splendid_slimes:${slimeType}`
                    }
                }
            },
            results: recipeData
        }).id(`kubejs:generated/rippit/${slimeType}`)
    }

    // let placeholder = {
    //     type: "splendid_slimes:plort_ripping",
    //     ingredient: {
    //         item: "splendid_slimes:plort",
    //         nbt: {
    //             plort: {
    //                 id: "splendid_slimes:sweet"
    //             }
    //         }
    //     },
    //     results: [
    //         {
    //             item: "minecraft:sugar",
    //             count: 4,
    //             weight: 99
    //         },
    //         {
    //             item: "splendid_slimes:slime_candy",
    //             count: 1,
    //             weight: 1
    //         }
    //     ]
    // }
})