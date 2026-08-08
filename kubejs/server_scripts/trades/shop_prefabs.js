ServerEvents.highPriorityData(e => {
    addTrades(e, {
        "$id": 'prefabs',
        "display_type": "image",
        "texture": "minecraft:textures/block/stone",
        "jei_catalyst": { "item": "minecraft:stone" },
        "$trades": [
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('base_camp', 'Base Camp', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/5x5_animal_pen",
                "trade_id": 'prefabs_basic_corral'
            }
        ]
    })
})
