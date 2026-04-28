StartupEvents.registry('block', e => {
    // splendid wares shop terminal block for accessing the shop
    /** @type {Internal.BasicBlockJS$Builder} */
    let wares = e.create('splendid_wares_shop', 'cardinal')
        .displayName('Splendid Wares Shop')
        .hardness(30)
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType('netherite_block')
        .model('numismatics:block/creative_display_case')
        .box(0, 0, 0, 16, 8, 16)
        .box(1, 8, 1, 15, 18, 15)
        .defaultCutout()
})

StartupEvents.registry('item', e => {
    // Axe for treechop felling
    e.create('kubejs:lumber_axe', 'axe')
        .tier('iron')
        .displayName('Lumber Axe')
        .tag('minecraft:tools')
        .tag('minecraft:axes')
        .tag('forge:tools')
        .tag('forge:tools/axes')

    // Generate generic paxels without funny tier naming
    Array('stone', 'iron', 'diamond', 'netherite').forEach(mat => {
        e.create(`kubejs:${mat}_paxel`, 'paxel')
            .tier(mat)
            .displayName(`${mat.charAt(0).toUpperCase() + mat.slice(1)} Paxel`)
            .tag('minecraft:tools')
            .tag('forge:tools')
            .tag('forge:tools/paxels')
    })

    // Paxels with names that don't match their tier
    e.create('kubejs:wooden_paxel', 'paxel')
        .tier('wood')
        .displayName('Wooden Paxel')
        .tag('minecraft:tools')
        .tag('forge:tools')
        .tag('forge:tools/paxels')
    e.create('kubejs:golden_paxel', 'paxel')
        .tier('gold')
        .displayName('Golden Paxel')
        .tag('minecraft:tools')
        .tag('forge:tools')
        .tag('forge:tools/paxels')
})
