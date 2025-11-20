ServerEvents.tags('item', e => {
    // causes ftb to check nbt on these items in quests without setting per quest
    e.add('itemfilters:check_nbt', [
        'splendid_slimes:plort', 'splendid_slimes:slime_heart', 'splendid_slimes:slime_item'
    ])
    e.add('quark:stone_tool_materials', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
    e.add('minecraft:stone_tool_materials', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
    e.add('minecraft:stone_crafting_materials', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
    e.add('forge:cobblestone', ['botania:metamorphic_forest_cobblestone', 'botania:metamorphic_plains_cobblestone', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_mountain_cobblestone', 'botania:metamorphic_swamp_cobblestone', 'botania:metamorphic_desert_cobblestone', 'botania:metamorphic_taiga_cobblestone', 'botania:metamorphic_mesa_cobblestone'])
})

ServerEvents.tags('block', e => {
    e.add('minecraft:base_stone_overworld', 'architects_palette:myonite')
    e.add('forge:chorus_additionally_grows_on', 'alexscaves:galena')
    e.add('forge:end_stones', 'alexscaves:galena')
    
    // biome surface blocks for animal spawns
    e.add('minecraft:animals_spawnable_on', [
        'minecraft:grass_block', 'minecraft:pink_terracotta', // dry reef
        'botania:mycelite', 'galosphere:lichen_moss', // indigo quarry
        'architects_palette:myonite', 'minecraft:moss_block', // moss blanket
        'architects_palette:onyx', 'supplementaries:flint_block', // magma mounts
        'minecraft:sand', 'atmospheric:arid_sand' // opal desert
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