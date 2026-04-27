function tagRegex(tagEvent, tag, regex) {
    console.log(`tag: ${tag}, regex: ${regex}`)
    regex = new RegExp(regex)
    let list = Item.getList().filter(item => regex.test(item.id))
    tagEvent.add(tag, list.map(item => item.id))
}

ServerEvents.tags('item', e => {
    // causes ftb to check nbt on these items in quests without setting per quest
    e.add('itemfilters:check_nbt', [
        'splendid_slimes:plort', 'splendid_slimes:slime_heart', 'splendid_slimes:slime_item'
    ])

    // alt stones
    e.add('quark:stone_tool_materials', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
    e.add('minecraft:stone_tool_materials', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
    e.add('minecraft:stone_crafting_materials', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
    e.add('forge:cobblestone', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])

    // diet related
    e.add('forge:vegetables', [
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:pumpkin_slice',
    ])
    e.add('forge:fruits', [
        'atmospheric:yucca_fruit',
        'atmospheric:roasted_yucca_fruit',
        'atmospheric:blood_orange',
        'quark:ancient_fruit',
    ])
    e.add('forge:cooked_meat', [
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:beef_patty',
        'farmersdelight:smoked_ham',
        'alexscaves:trilocaris_tail',
        '#forge:cooked_fishes'
    ])
    e.add('forge:raw_meat', [
        'farmersdelight:bacon',
        'farmersdelight:chicken_cuts',
        'farmersdelight:mutton_chops',
        'farmersdelight:minced_beef',
        'farmersdelight:ham',
        'farmersdelight:salmon_slice',
        'farmersdelight:cod_slice',
        '#forge:raw_fishes'
    ])
    e.add('forge:raw_fishes', [
        'minecraft:pufferfish',
        'alexscaves:radgill',
        'alexscaves:lanternfish',
        'alexscaves:tripodfish',
    ])
    e.add('forge:cooked_fishes', [
        'alexscaves:cooked_radgill',
        'alexscaves:cooked_lanternfish',
        'alexscaves:cooked_tripodfish',
    ])
    e.add('splendid_slimes:animal_spawn_eggs', [
        'minecraft:rabbit_spawn_egg',
        'minecraft:chicken_spawn_egg',
        'minecraft:sheep_spawn_egg',
        'minecraft:cow_spawn_egg',
        'minecraft:pig_spawn_egg',
    ])
    e.add('kubejs:small_animals', [
        'minecraft:rabbit_spawn_egg',
        'minecraft:chicken_spawn_egg',
    ])
    e.add('kubejs:candies', [
        'supplementaries:candy',
        'alexscaves:candy_cane',
        'minecraft:cookie',
    ])
    e.add('kubejs:baked_slices', [
        'farmersdelight:cake_slice',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:chocolate_pie_slice',
    ])

    // re enable alex cave locating
    e.remove('alexscaves:restricted_biome_locators', 'naturescompass:naturescompass')
})

ServerEvents.tags('block', e => {
    e.add('minecraft:base_stone_overworld', 'architects_palette:myonite')
    e.add('forge:chorus_additionally_grows_on', 'alexscaves:galena')
    e.add('forge:end_stones', 'alexscaves:galena')

    e.add('society_trading:opens_shop_selector', 'kubejs:splendid_wares_shop') // Temp

    e.add('society_trading:opens_shop_selector', 'kubejs:splendid_wares_shop') // Temp

    // biome surface blocks for animal spawns
    e.add('minecraft:animals_spawnable_on', [
        'minecraft:grass_block', 'minecraft:pink_terracotta', // dry reef
        'botania:metamorphic_fungal_stone', 'galosphere:lichen_moss', // indigo quarry
        'architects_palette:myonite', 'minecraft:moss_block', // moss blanket
        'architects_palette:onyx', 'supplementaries:flint_block', // magma mounts
        'minecraft:sand', 'atmospheric:arid_sand' // opal desert
    ])

    e.add('kubejs:terrain_non_replace', [
        'minecraft:grass_block',
        'minecraft:pink_terracotta',
        "minecraft:dirt",
        "minecraft:terracotta"
    ])

    e.add('minecraft:mooshrooms_spawnable_on', [
        'botania:metamorphic_fungal_stone',
        'galosphere:lichen_moss',
        'architects_palette:myonite'
    ])

})

ServerEvents.tags('worldgen/biome', e => {
    // e.add('minecraft:is_overworld', [
    //     'splendid_ranching:ancient_ruins',
    //     'splendid_ranching:dry_reef',
    //     'splendid_ranching:indigo_quarry',
    //     'splendid_ranching:magma_mounts',
    //     'splendid_ranching:moss_blanket',
    //     'splendid_ranching:opal_desert',
    // ])
})
