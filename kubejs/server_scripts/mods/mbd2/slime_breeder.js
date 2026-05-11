const slimeRecipes = {
    // recipe id, example recipe object
    example_recipe_id: {
        // an input catalyst item that gets consumed when the recipe is ran (Optional, can have chance, max 1)
        itemIn: { item: Item.of('minecraft:glowstone_dust'), chance: 0.05 },
        // required slime entity inputs (Required > 0, recommend 2+, max 3)
        entityIn: [{ count: 1, id: 'slimy' }, { count: 1, id: 'bony' }, { count: 1, id: 'rotting' }],
        // output slime hearts (Required > 0, required weight, max 4, last item is the primary output slime)
        heartOut: [{ count: 1, id: 'bony', weight: 6 }, { count: 1, id: 'rotting', weight: 7 }, { count: 1, id: 'all_seeing', weight: 2 }]
    },
    // t1 fusion slimes - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    monster_dusty_to_bony: {
        entityIn: [{ count: 1, id: 'monster' }, { count: 1, id: 'dusty' }],
        heartOut: [
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'dusty', weight: 10 },
            { count: 1, id: 'bony', weight: 80 }
        ]
    },
    monster_lush_to_rotting: {
        entityIn: [{ count: 1, id: 'monster' }, { count: 1, id: 'lush' }],
        heartOut: [
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'lush', weight: 10 },
            { count: 1, id: 'rotting', weight: 80 }
        ]
    },
    monster_slimy_to_all_seeing: {
        entityIn: [{ count: 1, id: 'monster' }, { count: 1, id: 'slimy' }],
        heartOut: [
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'slimy', weight: 10 },
            { count: 1, id: 'all_seeing', weight: 80 }
        ]
    },
    monster_fire_to_blazing: {
        entityIn: [{ count: 1, id: 'monster' }, { count: 1, id: 'fire' }],
        heartOut: [
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'fire', weight: 10 },
            { count: 1, id: 'blazing', weight: 80 }
        ]
    },
    crystal_puddle_to_prisma: {
        entityIn: [{ count: 1, id: 'crystal' }, { count: 1, id: 'puddle' }],
        heartOut: [
            { count: 1, id: 'crystal', weight: 10 },
            { count: 1, id: 'puddle', weight: 10 },
            { count: 1, id: 'prisma', weight: 80 }
        ]
    },
    dusty_orby_to_bitwise: {
        entityIn: [{ count: 1, id: 'dusty' }, { count: 1, id: 'orby' }],
        heartOut: [
            { count: 1, id: 'dusty', weight: 10 },
            { count: 1, id: 'orby', weight: 10 },
            { count: 1, id: 'bitwise', weight: 80 }
        ]
    },
    monster_tabby_to_boomcat: {
        entityIn: [{ count: 1, id: 'monster' }, { count: 1, id: 'tabby' }],
        heartOut: [
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'tabby', weight: 10 },
            { count: 1, id: 'boomcat', weight: 80 }
        ]
    },
    puddle_rocky_to_fungus: {
        entityIn: [{ count: 1, id: 'puddle' }, { count: 1, id: 'rocky' }],
        heartOut: [
            { count: 1, id: 'puddle', weight: 10 },
            { count: 1, id: 'rocky', weight: 10 },
            { count: 1, id: 'fungus', weight: 80 }
        ]
    },
    puddle_sandy_to_ocean: {
        entityIn: [{ count: 1, id: 'puddle' }, { count: 1, id: 'sandy' }],
        heartOut: [
            { count: 1, id: 'puddle', weight: 10 },
            { count: 1, id: 'sandy', weight: 10 },
            { count: 1, id: 'ocean', weight: 80 }
        ]
    },
    rocky_fire_to_stony: {
        entityIn: [{ count: 1, id: 'rocky' }, { count: 1, id: 'fire' }],
        heartOut: [
            { count: 1, id: 'rocky', weight: 10 },
            { count: 1, id: 'fire', weight: 10 },
            { count: 1, id: 'stony', weight: 80 }
        ]
    },
    puddle_lush_to_tree: {
        entityIn: [{ count: 1, id: 'puddle' }, { count: 1, id: 'lush' }],
        heartOut: [
            { count: 1, id: 'puddle', weight: 10 },
            { count: 1, id: 'lush', weight: 10 },
            { count: 1, id: 'tree', weight: 80 }
        ]
    },
    alien_orby_to_phantom: {
        entityIn: [{ count: 1, id: 'monster' }, { count: 1, id: 'alien' }, { count: 1, id: 'orby' }],
        heartOut: [
            { count: 1, id: 'alien', weight: 10 },
            { count: 1, id: 'orby', weight: 10 },
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'phantom', weight: 70 }
        ]
    },
    // t2 fusion slimes - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    blazing_alien_crystal_to_ender: {
        entityIn: [
            { count: 1, id: 'blazing' },
            { count: 1, id: 'alien' },
            { count: 1, id: 'crystal' }
        ],
        heartOut: [
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'alien', weight: 10 },
            { count: 1, id: 'crystal', weight: 10 },
            { count: 1, id: 'ender', weight: 70 }
        ]
    },
    blazing_bitwise_to_luminous: {
        entityIn: [
            { count: 1, id: 'blazing' },
            { count: 1, id: 'bitwise' }
        ],
        heartOut: [
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'bitwise', weight: 10 },
            { count: 1, id: 'luminous', weight: 80 }
        ]
    },
    rocky_monster_blazing_to_magma: {
        entityIn: [
            { count: 1, id: 'rocky' },
            { count: 1, id: 'monster' },
            { count: 1, id: 'blazing' }
        ],
        heartOut: [
            { count: 1, id: 'rocky', weight: 10 },
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'magma', weight: 70 }
        ]
    },
    tree_fire_to_charred: {
        entityIn: [
            { count: 1, id: 'tree' },
            { count: 1, id: 'fire' }
        ],
        heartOut: [
            { count: 1, id: 'tree', weight: 10 },
            { count: 1, id: 'fire', weight: 10 },
            { count: 1, id: 'charred', weight: 80 }
        ]
    },
    blazing_monster_boomcat_to_weeping: {
        entityIn: [
            { count: 1, id: 'blazing' },
            { count: 1, id: 'monster' },
            { count: 1, id: 'boomcat' }
        ],
        heartOut: [
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'boomcat', weight: 10 },
            { count: 1, id: 'weeping', weight: 70 }
        ]
    },
    fungus_blazing_to_warped_and_crimson: {
        entityIn: [
            { count: 1, id: 'fungus' },
            { count: 1, id: 'blazing' }
        ],
        heartOut: [
            { count: 1, id: 'fungus', weight: 10 },
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'crimson', weight: 40 },
            { count: 1, id: 'warped', weight: 40 }
        ]
    },
    stony_blazing_orby_to_geode: {
        entityIn: [
            { count: 1, id: 'stony' },
            { count: 1, id: 'blazing' },
            { count: 1, id: 'orby' }
        ],
        heartOut: [
            { count: 1, id: 'stony', weight: 10 },
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'orby', weight: 10 },
            { count: 1, id: 'geode', weight: 70 }
        ]
    },
    stony_prisma_to_gem: {
        entityIn: [
            { count: 1, id: 'stony' },
            { count: 1, id: 'prisma' }
        ],
        heartOut: [
            { count: 1, id: 'stony', weight: 10 },
            { count: 1, id: 'prisma', weight: 10 },
            { count: 1, id: 'gem', weight: 80 }
        ]
    },
    all_seeing_forlorn_charred_to_dark: {
        entityIn: [
            { count: 1, id: 'all_seeing' },
            { count: 1, id: 'forlorn' },
            { count: 1, id: 'charred' }
        ],
        heartOut: [
            { count: 1, id: 'all_seeing', weight: 10 },
            { count: 1, id: 'forlorn', weight: 10 },
            { count: 1, id: 'charred', weight: 10 },
            { count: 1, id: 'dark', weight: 70 }
        ]
    },
    fungus_orby_alien_to_sculk: {
        entityIn: [
            { count: 1, id: 'fungus' },
            { count: 1, id: 'orby' },
            { count: 1, id: 'alien' }
        ],
        heartOut: [
            { count: 1, id: 'fungus', weight: 10 },
            { count: 1, id: 'orby', weight: 10 },
            { count: 1, id: 'alien', weight: 10 },
            { count: 1, id: 'sculk', weight: 70 }
        ]
    },
    prisma_neodymium_to_magnetic: {
        entityIn: [
            { count: 1, id: 'prisma' },
            { count: 1, id: 'neodymium' }
        ],
        heartOut: [
            { count: 1, id: 'prisma', weight: 10 },
            { count: 1, id: 'neodymium', weight: 10 },
            { count: 1, id: 'magnetic', weight: 80 }
        ]
    },
    // t3 fusion slimes - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    ender_monster_weeping_to_shulking: {
        entityIn: [
            { count: 1, id: 'ender' },
            { count: 1, id: 'monster' },
            { count: 1, id: 'weeping' }
        ],
        heartOut: [
            { count: 1, id: 'ender', weight: 10 },
            { count: 1, id: 'monster', weight: 10 },
            { count: 1, id: 'weeping', weight: 10 },
            { count: 1, id: 'shulking', weight: 70 }
        ]
    },
    geode_luminous_magma_to_metallic: {
        entityIn: [
            { count: 1, id: 'geode' },
            { count: 1, id: 'luminous' },
            { count: 1, id: 'magma' }
        ],
        heartOut: [
            { count: 1, id: 'geode', weight: 10 },
            { count: 1, id: 'luminous', weight: 10 },
            { count: 1, id: 'magma', weight: 10 },
            { count: 1, id: 'metallic', weight: 70 }
        ]
    },
    ender_rotting_sweet_to_minty: {
        entityIn: [
            { count: 1, id: 'ender' },
            { count: 1, id: 'rotting' },
            { count: 1, id: 'sweet' }
        ],
        heartOut: [
            { count: 1, id: 'ender', weight: 10 },
            { count: 1, id: 'rotting', weight: 10 },
            { count: 1, id: 'sweet', weight: 10 },
            { count: 1, id: 'minty', weight: 70 }
        ]
    },
    luminous_gem_boomcat_to_jewel: {
        entityIn: [
            { count: 1, id: 'luminous' },
            { count: 1, id: 'gem' },
            { count: 1, id: 'boomcat' }
        ],
        heartOut: [
            { count: 1, id: 'luminous', weight: 10 },
            { count: 1, id: 'gem', weight: 10 },
            { count: 1, id: 'boomcat', weight: 10 },
            { count: 1, id: 'jewel', weight: 70 }
        ]
    },
    magma_jurassic_blazing_to_infernal: {
        entityIn: [
            { count: 1, id: 'magma' },
            { count: 1, id: 'jurassic' },
            { count: 1, id: 'blazing' }
        ],
        heartOut: [
            { count: 1, id: 'magma', weight: 10 },
            { count: 1, id: 'jurassic', weight: 10 },
            { count: 1, id: 'blazing', weight: 10 },
            { count: 1, id: 'infernal', weight: 70 }
        ]
    },
    bitwise_tree_geode_to_mechanical: {
        entityIn: [
            { count: 1, id: 'bitwise' },
            { count: 1, id: 'tree' },
            { count: 1, id: 'geode' }
        ],
        heartOut: [
            { count: 1, id: 'bitwise', weight: 10 },
            { count: 1, id: 'tree', weight: 10 },
            { count: 1, id: 'geode', weight: 10 },
            { count: 1, id: 'mechanical', weight: 70 }
        ]
    },
    dark_sculk_warped_to_tendril: {
        entityIn: [
            { count: 1, id: 'dark' },
            { count: 1, id: 'sculk' },
            { count: 1, id: 'warped' }
        ],
        heartOut: [
            { count: 1, id: 'dark', weight: 10 },
            { count: 1, id: 'sculk', weight: 10 },
            { count: 1, id: 'warped', weight: 10 },
            { count: 1, id: 'tendril', weight: 70 }
        ]
    },
    luminous_candy_to_radiant: {
        entityIn: [
            { count: 1, id: 'luminous' },
            { count: 1, id: 'candy' }
        ],
        heartOut: [
            { count: 1, id: 'luminous', weight: 10 },
            { count: 1, id: 'candy', weight: 10 },
            { count: 1, id: 'radiant', weight: 80 }
        ]
    },
    // t4 fusion slimes - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    luminous_metallic_to_gold: {
        entityIn: [
            { count: 1, id: 'luminous' },
            { count: 1, id: 'metallic' }
        ],
        heartOut: [
            { count: 1, id: 'luminous', weight: 10 },
            { count: 1, id: 'metallic', weight: 10 },
            { count: 1, id: 'gold', weight: 80 }
        ]
    },
    metallic_infernal_charred_to_forge: {
        entityIn: [
            { count: 1, id: 'metallic' },
            { count: 1, id: 'infernal' },
            { count: 1, id: 'charred' }
        ],
        heartOut: [
            { count: 1, id: 'metallic', weight: 10 },
            { count: 1, id: 'infernal', weight: 10 },
            { count: 1, id: 'charred', weight: 10 },
            { count: 1, id: 'forge', weight: 70 }
        ]
    },
    phantom_sandy_mechanical_to_time: {
        entityIn: [
            { count: 1, id: 'phantom' },
            { count: 1, id: 'sandy' },
            { count: 1, id: 'mechanical' }
        ],
        heartOut: [
            { count: 1, id: 'phantom', weight: 10 },
            { count: 1, id: 'sandy', weight: 10 },
            { count: 1, id: 'mechanical', weight: 10 },
            { count: 1, id: 'time', weight: 70 }
        ]
    },
    // t5 fusion slimes - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    time_dark_magnetic_to_quantum: {
        entityIn: [
            { count: 1, id: 'time' },
            { count: 1, id: 'dark' },
            { count: 1, id: 'magnetic' }
        ],
        heartOut: [
            { count: 1, id: 'time', weight: 10 },
            { count: 1, id: 'dark', weight: 10 },
            { count: 1, id: 'magnetic', weight: 10 },
            { count: 1, id: 'quantum', weight: 70 }
        ]
    },
    rad_metallic_time_to_nuclear: {
        entityIn: [
            { count: 1, id: 'rad' },
            { count: 1, id: 'metallic' },
            { count: 1, id: 'time' }
        ],
        heartOut: [
            { count: 1, id: 'rad', weight: 10 },
            { count: 1, id: 'metallic', weight: 10 },
            { count: 1, id: 'time', weight: 10 },
            { count: 1, id: 'nuclear', weight: 70 }
        ]
    },
    // other - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    nuclear_quantum_to_burger: {
        entityIn: [
            { count: 1, id: 'nuclear' },
            { count: 1, id: 'quantum' }
        ],
        heartOut: [
            { count: 1, id: 'nuclear', weight: 10 },
            { count: 1, id: 'quantum', weight: 10 },
            { count: 1, id: 'burger', weight: 80 }
        ]
    }
}

delete slimeRecipes.example_recipe_id // functions if you comment this for testing, uncomment for release

ServerEvents.recipes(e => {
    for (const [recipeName, recipeData] of Object.entries(slimeRecipes)) {
        //  - - real recipes that function in slime breeder machine - -
        // probably hide this recipe category from recipe viewer on release, since fake recipe will be used for display

        if (recipeData.heartOut == undefined || recipeData.entityIn == undefined) { continue }

        let recipe = e.recipes.mbd2.slime_breeding()
            // real recipe entity input
            .inputEntities(
                recipeData.entityIn.map(input => JsonIO.of({
                    count: input.count,
                    nbt: `{Breed:"splendid_slimes:${input.id}"}`,
                    value: { entityType: "splendid_slimes:splendid_slime" }
                }))
            )
            .isXEIHidden(true)
            .id(`kubejs:mbd2/slime_breeder/real/${recipeName}`)
        // real recipe item input
        if (recipeData.itemIn) {
            if (recipeData.itemIn.chance) { recipe.chance(recipeData.itemIn.chance) }
            recipe.inputItems(recipeData.itemIn.item)
        }

        // - - fake recipe for recipe viewer displaying nicely, doesn't function - -
        /** @type {Internal.MBDRecipeSchema$MBDRecipeJS} */
        let fakeRecipe = e.recipes.mbd2.fake_slime_breeding()
            .id(`kubejs:mbd2/slime_breeder/fake/${recipeName}`)
            .inputEntities(
                recipeData.entityIn.map(input => JsonIO.of({
                    count: input.count,
                    nbt: `{Breed:"splendid_slimes:${input.id}"}`,
                    value: { entityType: "splendid_slimes:splendid_slime" }
                }))
            )
            .inputItems('minecraft:command_block') // make sure this recipe never runs lmao
            .outputItems('minecraft:command_block')

        // primary output slime fake item and entity slots
        // get primary slime, which is last in the heartOut array
        let primaryOut = recipeData.heartOut[recipeData.heartOut.length - 1]
        if (primaryOut.chance) {
            fakeRecipe.chance(primaryOut.chance)
        }
        fakeRecipe.uiName(`entity_out0`, b => b // fake recipe primary entity output
            .outputEntities(
                JsonIO.of({
                    count: primaryOut.count,
                    nbt: `{Breed:"splendid_slimes:${primaryOut.id}"}`,
                    value: { entityType: "splendid_slimes:splendid_slime" }
                })
            )
        )
        fakeRecipe.uiName(`entity_item_out0`, b => b // fake recipe primary slime item output
            .outputItems(
                Item.of(`splendid_slimes:slime_item`, primaryOut.count,
                    `{slime:{id:"splendid_slimes:${primaryOut.id}"}}`).weakNBT()
            )
        )
        fakeRecipe.chance(1) // reset chance for next recipe component

        // fake recipe item input
        if (recipeData.itemIn) {
            fakeRecipe.uiName(`item_in0`, b => {
                if (recipeData.itemIn.chance) {
                    b.chance(recipeData.itemIn.chance)
                }
                b.inputItems(recipeData.itemIn.item)
                b.chance(1) // reset chance for next recipe component
            })
        }
        // fake recipe slime item inputs
        for (const entityIn of recipeData.entityIn) {
            fakeRecipe.uiName(`entity_item_in${recipeData.entityIn.indexOf(entityIn)}`, b => b
                .chance(1) // reset chance for next recipe component
                .inputItems(Item.of(`splendid_slimes:slime_item`, entityIn.count,
                    `{slime:{id:"splendid_slimes:${entityIn.id}"}}`).weakNBT())
            )
        }
        // fake recipe slime heart item outputs
        for (const heartOut of recipeData.heartOut) {
            let chance = heartOut.weight / recipeData.heartOut.reduce((a, b) => a + b.weight, 0)
            fakeRecipe.uiName(`fake_item_out${recipeData.heartOut.indexOf(heartOut)}`, b => b
                .chance(chance)
                .outputItems(
                    Item.of(`splendid_slimes:slime_heart`, heartOut.count,
                        `{slime:{id:"splendid_slimes:${heartOut.id}"}}`).weakNBT()
                )
            )
        }
    }
})

MBDMachineEvents.onBeforeRecipeModify('mbd2:slime_breeder', event => {
    const mbdEvent = event.getEvent()
    const { machine, recipe } = mbdEvent

    // get the slime recipe data for the recipe based on recipe id
    let recipeData = slimeRecipes[recipe.id.toString().split('/').pop()]
    let outputs = recipeData.heartOut
    // calculate total weight from all outputs
    let totalWeight = outputs.reduce((sum, o) => sum + o.weight, 0)
    let rand = Math.random() * totalWeight

    // select a random weighted output
    let selected
    for (const output of outputs) {
        if (rand < output.weight) {
            selected = output
            break
        }
        rand -= output.weight
    }

    // copy the recipe builder then add a slime heart output to it from our random output
    let builder = recipe.copy().toBuilder()
    builder.outputItems(
        Item.of(`splendid_slimes:slime_heart`, selected.count, `{slime:{id:"splendid_slimes:${selected.id}"}}`).weakNBT()
    )
    // overwrite the recipe with our copied builder
    mbdEvent.setRecipe(builder.buildMBDRecipe())
})

MBDMachineEvents.onBeforeRecipeWorking('mbd2:slime_breeder', event => {
    const mbdEvent = event.getEvent()
    const { machine, recipe } = mbdEvent

    // get storage trait for output slot and cancel recipe running if it the slot isn't empty
    // if this isn't cancelled, it'll reroll output chance until it'll output whatever is already in the slot
    let itemTrait = machine.getTraitByName("item_output_slot")
    /** @type {ItemStackTransfer.prototype} */
    let storage = itemTrait.storage

    if (storage.getStackInSlot(0).count > 0) {
        mbdEvent.setCanceled(true)
    }
})

// ServerEvents.recipes(e => {
//     e.recipes.mbd2.slime_breeding()
//         .inputEntities(
//             [
//                 JsonIO.of(
//                     {
//                         count: 1,
//                         nbt: '{Breed:"splendid_slimes:slimy"}',
//                         value: { entityType: "splendid_slimes:splendid_slime" }
//                     }
//                 )
//             ]
//         )
//         .outputEntities(
//             [
//                 JsonIO.of(
//                     {
//                         count: 1,
//                         nbt: '{Breed:"splendid_slimes:gold"}',
//                         value: { entityType: "splendid_slimes:splendid_slime" }
//                     }
//                 )
//             ]
//         )
// })

// e.recipes.mbd2.slime_breeding()
//     .inputEntities([
//         JsonIO.of(
//             {
//                 count: 1,
//                 nbt: '{Breed:"splendid_slimes:slimy"}',
//                 value: { entityType: "splendid_slimes:splendid_slime" }
//             }
//         ),
//         JsonIO.of(
//             {
//                 count: 1,
//                 nbt: '{Breed:"splendid_slimes:gold"}',
//                 value: { entityType: "splendid_slimes:splendid_slime" }
//             }
//         )
//     ])
//     .outputItems([
//         Item.of('splendid_slimes:slime_heart', { slime: { id: "splendid_slimes:gold" } }).withChance(0.3),
//         Item.of('splendid_slimes:slime_heart', { slime: { id: "splendid_slimes:gold" } }).withChance(0.3)
//     ])
//     .id('kubejs:mbd2/slime_breeder/slimy_gold_to_luminous')
