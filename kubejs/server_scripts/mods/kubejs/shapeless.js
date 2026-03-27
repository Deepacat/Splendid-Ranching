ServerEvents.recipes(e => {
    Array('wooden', 'stone', 'iron', 'diamond', 'netherite').forEach(material => {
        e.shapeless(`kubejs:${material}_paxel`, [
            `minecraft:${material}_pickaxe`,
            `minecraft:${material}_axe`,
            `minecraft:${material}_shovel`
        ]).id(`kubejs:shapeless/${material}_paxel`)
    })
})
