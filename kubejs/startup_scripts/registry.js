StartupEvents.registry('block', e => {
    // splendid wares shop terminal block for accessing the shop
    /** @type {Internal.BasicBlockJS$Builder} */
    let wares = e.create('splendid_wares_shop')
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
})
