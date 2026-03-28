ServerEvents.recipes(e => {
    e.shaped('kubejs:lumber_axe', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: Item.of('splendid_slimes:plort', '{plort:{id:"splendid_slimes:fire"}}').weakNBT(),
        B: Item.of('splendid_slimes:plort', '{plort:{id:"splendid_slimes:tree"}}').weakNBT(),
        C: 'minecraft:iron_axe'
    }).id('kubejs:shaped/lumber_axe')
})