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
    // t0 caves
    candy: [
        { item: 'alexscaves:sharpened_candy_cane', count: 1, weight: 20 },
        { item: 'alexscaves:candy_cane', count: 4, weight: 40 },
        { item: 'alexscaves:gumball_pile', count: 3, weight: 40 }
    ],
    abyssal: [
        { item: 'alexscaves:ortholance', count: 1, weight: 30 },
        { item: 'alexscaves:bioluminesscence', count: 6, weight: 30 },
        { item: 'alexscaves:immortal_embryo', count: 1, weight: 10 },
        { item: 'alexscaves:depth_charge', count: 4, weight: 30 }
    ],
    rad: [
        { item: 'alexscaves:uranium_shard', count: 4, weight: 100 }
    ],
    forlorn: [
        { item: 'alexscaves:moth_dust', count: 4, weight: 35 },
        { item: 'alexscaves:dark_tatters', count: 4, weight: 35 },
        { item: 'alexscaves:occult_gem', count: 1, weight: 30 }
    ],
    jurassic: [
        { item: 'alexscaves:heavy_bone', count: 4, weight: 30 },
        { item: 'alexscaves:tough_hide', count: 4, weight: 40 },
        { item: 'alexscaves:dinosaur_chop', count: 4, weight: 30 }
    ],
    neodymium: [
        { item: 'alexscaves:raw_scarlet_neodymium', count: 4, weight: 35 },
        { item: 'alexscaves:raw_azure_neodymium', count: 4, weight: 35 },
        { item: 'alexscaves:ferrouslime_ball', count: 4, weight: 30 }
    ],
    // t1
    bony: [
        { item: 'minecraft:bone', count: 8, weight: 40 },
        { item: 'minecraft:bone_block', count: 4, weight: 20 },
        { item: 'alexscaves:heavy_bone', count: 4, weight: 10 },
        { item: 'galosphere:silver_ingot', count: 4, weight: 30 }
    ],
    rotting: [
        { item: 'minecraft:rotten_flesh', count: 8, weight: 60 },
        { item: 'minecraft:iron_ingot', count: 6, weight: 40 }
    ],
    all_seeing: [
        { item: 'minecraft:spider_eye', count: 4, weight: 30 },
        { item: 'minecraft:string', count: 6, weight: 40 },
        { item: 'minecraft:copper_ingot', count: 6, weight: 30 }
    ],
    blazing: [
        { item: 'minecraft:blaze_rod', count: 4, weight: 20 },
        { item: 'minecraft:quartz', count: 6, weight: 30 },
        { item: 'minecraft:soul_sand', count: 4, weight: 30 },
        { item: 'minecraft:gold_ingot', count: 6, weight: 20 }
    ],
    prisma: [
        { item: 'minecraft:prismarine_shard', count: 4, weight: 30 },
        { item: 'minecraft:prismarine_crystals', count: 4, weight: 30 },
        { item: 'minecraft:pufferfish', count: 3, weight: 20 },
        { item: 'minecraft:sponge', count: 4, weight: 10 },
        { item: 'minecraft:trident', count: 1, weight: 10 }
    ],
    bitwise: [
        { item: 'minecraft:redstone', count: 6, weight: 50 },
        { item: 'minecraft:copper_ingot', count: 6, weight: 50 }
    ],
    boomcat: [
        { item: 'minecraft:gunpowder', count: 4, weight: 50 },
        { item: 'create:zinc_ingot', count: 6, weight: 50 }
    ],
    fungus: [
        { item: 'minecraft:brown_mushroom_block', count: 4, weight: 30 },
        { item: 'minecraft:red_mushroom_block', count: 4, weight: 30 },
        { item: 'minecraft:mycelium', count: 4, weight: 10 },
        { item: 'minecraft:nether_wart', count: 4, weight: 40 }
    ],
    ocean: [
        { item: 'minecraft:kelp', count: 4, weight: 30 },
        { item: 'minecraft:ink_sac', count: 4, weight: 30 },
        { item: 'minecraft:heart_of_the_sea', count: 1, weight: 10 },
        { item: 'minecraft:trident', count: 1, weight: 10 },
        { item: 'minecraft:diamond', count: 6, weight: 10 }
    ],
    stony: [
        { item: 'minecraft:andesite', count: 4, weight: 30 },
        { item: 'minecraft:diorite', count: 4, weight: 30 },
        { item: 'minecraft:granite', count: 4, weight: 30 },
        { item: 'minecraft:iron_ingot', count: 6, weight: 10 }
    ],
    tree: [
        { item: 'minecraft:oak_log', count: 8, weight: 20 },
        { item: 'minecraft:spruce_log', count: 8, weight: 20 },
        { item: 'minecraft:birch_log', count: 8, weight: 15 },
        { item: 'minecraft:jungle_log', count: 8, weight: 15 },
        { item: 'minecraft:acacia_log', count: 8, weight: 15 },
        { item: 'minecraft:dark_oak_log', count: 8, weight: 15 }
    ],
    phantom: [
        { item: 'minecraft:phantom_membrane', count: 4, weight: 60 },
        { item: 'minecraft:phantom_membrane', count: 4, weight: 10 },
        { item: 'create:zinc_ingot', count: 4, weight: 30 }
    ],

    // t2
    ender: [
        { item: 'minecraft:ender_pearl', count: 4, weight: 70 },
        { item: 'minecraft:diamond', count: 4, weight: 30 }
    ],
    luminous: [
        { item: 'minecraft:glowstone_dust', count: 4, weight: 70 },
        { item: 'galosphere:silver_ingot', count: 6, weight: 30 }
    ],
    magma: [
        { item: 'minecraft:magma_cream', count: 4, weight: 50 },
        { item: 'minecraft:quartz', count: 6, weight: 30 },
        { item: 'minecraft:gold_ingot', count: 6, weight: 20 }
    ],
    charred: [
        { item: 'supplementaries:ash', count: 4, weight: 30 },
        { item: 'minecraft:charcoal', count: 8, weight: 50 },
        { item: 'minecraft:wither_rose', count: 4, weight: 20 }
    ],
    weeping: [
        { item: 'minecraft:gunpowder', count: 4, weight: 40 },
        { item: 'minecraft:ghast_tear', count: 1, weight: 30 },
        { item: 'minecraft:crying_obsidian', count: 4, weight: 30 }
    ],
    crimson: [
        { item: 'minecraft:crimson_fungus', count: 1, weight: 20 },
        { item: 'minecraft:weeping_vines', count: 4, weight: 40 },
        { item: 'minecraft:crimson_nylium', count: 4, weight: 40 }
    ],
    warped: [
        { item: 'minecraft:warped_fungus', count: 1, weight: 20 },
        { item: 'minecraft:twisting_vines', count: 4, weight: 40 },
        { item: 'minecraft:warped_nylium', count: 4, weight: 40 }
    ],
    geode: [
        { item: 'minecraft:raw_iron', count: 4, weight: 30 },
        { item: 'minecraft:raw_copper', count: 4, weight: 30 },
        { item: 'create:raw_zinc', count: 4, weight: 30 },
        { item: 'galosphere:raw_silver', count: 4, weight: 30 }
    ],
    gem: [
        { item: 'minecraft:amethyst_shard', count: 6, weight: 40 },
        { item: 'minecraft:quartz', count: 6, weight: 30 },
        { item: 'minecraft:lapis_lazuli', count: 6, weight: 20 },
        { item: 'minecraft:emerald', count: 6, weight: 10 }
    ],
    dark: [
        { item: 'botania:ender_air_bottle', count: 4, weight: 20 },
        { item: 'minecraft:obsidian', count: 4, weight: 50 },
        { item: 'minecraft:glow_ink_sac', count: 4, weight: 30 }
    ],
    sculk: [
        { item: 'minecraft:sculk', count: 4, weight: 30 },
        { item: 'minecraft:sculk_catalyst', count: 4, weight: 30 }
    ],
    magnetic: [
        { item: 'alexscaves:notor_gizmo', count: 1, weight: 20 },
        { item: 'alexscaves:telecore', count: 1, weight: 20 },
        { item: 'alexscaves:heavyweight', count: 1, weight: 20 },
        { item: 'alexscaves:galena', count: 24, weight: 40 }
    ],

    // t3
    shulking: [
        { item: 'minecraft:shulker_shell', count: 8, weight: 30 },
        { item: 'minecraft:diamond', count: 16, weight: 30 },
        { item: 'minecraft:end_stone', count: 24, weight: 40 }
    ],
    metallic: [
        { item: 'minecraft:iron_ingot', count: 8, weight: 25 },
        { item: 'minecraft:copper_ingot', count: 8, weight: 25 },
        { item: 'galosphere:silver_ingot', count: 8, weight: 25 },
        { item: 'create:zinc_ingot', count: 8, weight: 25 }
    ],
    minty: [
        { item: 'minecraft:dragon_breath', count: 8, weight: 47 },
        { item: 'minecraft:elytra', count: 1, weight: 3 },
        { item: 'quark:dragon_scale', count: 8, weight: 50 }
    ],
    jewel: [
        { item: 'minecraft:amethyst_shard', count: 16, weight: 25 },
        { item: 'minecraft:quartz', count: 16, weight: 25 },
        { item: 'minecraft:lapis_lazuli', count: 16, weight: 25 },
        { item: 'minecraft:emerald', count: 16, weight: 25 }
    ],
    infernal: [
        { item: 'alexscaves:tectonic_shard', count: 4, weight: 20 },
        { item: 'minecraft:wither_skeleton_skull', count: 1, weight: 20 },
        { item: 'minecraft:ancient_debris', count: 4, weight: 20 },
        { item: 'minecraft:netherrack', count: 32, weight: 20 },
        { item: 'minecraft:soul_sand', count: 32, weight: 20 }
    ],
    mechanical: [
        { item: 'create:cogwheel', count: 8, weight: 20 },
        { item: 'create:gearbox', count: 6, weight: 20 },
        { item: 'create:encased_chain_drive', count: 4, weight: 20 },
        { item: 'create:shaft', count: 24, weight: 40 }
    ],
    tendril: [
        { item: 'minecraft:sculk', count: 24, weight: 60 },
        { item: 'minecraft:echo_shard', count: 4, weight: 40 }
    ],
    radiant: [
        { item: 'alexscaves:sweet_tooth', count: 1, weight: 50 },
        { item: 'alexscaves:radiant_essence', count: 1, weight: 50 }
    ],
    
    // t4
    gold: [
        { item: 'minecraft:gold_ingot', count: 32, weight: 69 },
        { item: 'minecraft:gold_block', count: 8, weight: 30 },
        { item: 'minecraft:enchanted_golden_apple', count: 24, weight: 1 }
    ],
    forge: [
        { item: 'minecraft:iron_ingot', count: 32, weight: 25 },
        { item: 'minecraft:copper_ingot', count: 32, weight: 25 },
        { item: 'galosphere:silver_ingot', count: 32, weight: 25 },
        { item: 'create:zinc_ingot', count: 32, weight: 25 }
    ],
    time: [
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'), count: 1, weight: 10 },
        { item: Item.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'), count: 1, weight: 10 }
    ],
    
    // t5
    quantum: [
        { item: 'minecraft:dragon_egg', count: 1, weight: 10 },
        { item: 'minecraft:cake', count: 3, weight: 90 }
    ],
    nuclear: [
        { item: 'alexscaves:fissile_core', count: 1, weight: 20 },
        { item: 'alexscaves:charred_remnant', count: 4, weight: 30 },
        { item: 'alexscaves:unrefined_waste', count: 8, weight: 50 }
    ],
    
    // other
    burger: [
        { item: 'numismatics:spur', count: 16, weight: 35 },
        { item: 'numismatics:bevel', count: 8, weight: 25 },
        { item: 'numismatics:sprocket', count: 4, weight: 20 },
        { item: 'numismatics:cog', count: 2, weight: 14 },
        { item: 'numismatics:crown', count: 1, weight: 5 },
        { item: 'numismatics:sun', count: 1, weight: 1 }
    ]
}

ServerEvents.recipes(e => {
    e.remove({ type: 'splendid_slimes:plort_ripping' })

    // loop over all slimes
    for (const [slimeType, slimeData] of Object.entries(global.slimeDefinitionsData)) {
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