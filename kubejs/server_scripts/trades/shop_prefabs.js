ServerEvents.highPriorityData(e => {
    addTrades(e, {
        "$id": 'prefabs',
        "display_type": "image",
        "texture": "minecraft:textures/block/stone",
        "jei_catalyst": { "item": "minecraft:stone" },
        "$trades": [
            // Corrals
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('5x_corral', '5x5 Corral Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/5x5_corral",
                "trade_id": 'prefabs_5x5_corral'
            },
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('7x_corral', '7x7 Corral Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/7x7_corral",
                "trade_id": 'prefabs_7x7_corral'
            },
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('5x_breeder', '5x5 Fusion Breeder Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/5x5_breeder",
                "trade_id": 'prefabs_5x5_breeder'
            },
            // Animal Pens
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('5x_animal_pen', '5x5 Animal Pen Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/5x5_animal_pen",
                "trade_id": 'prefabs_5x5_animal_pen'
            },
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('7x_animal_pen', '7x7 Animal Pen Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/7x7_animal_pen",
                "trade_id": 'prefabs_7x7_animal_pen'
            },
            // Farms
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('11x_crop_farm', '11x11 Crop Farm Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/11x11_crop_farm",
                "trade_id": 'prefabs_11x11_crop_farm'
            },
            {
                "item": 'portable_blueprints:worn_blueprint', "count": 1, "nbt": prefabNBT('11x_gourd_farm', '11x11 Gourd Farm Prefab', 1),
                "cost": 256,
                "image": "kubejs:textures/images/society_trading/prefabs/11x11_gourd_farm",
                "trade_id": 'prefabs_11x11_gourd_farm'
            },
            // Items
            {
                "item": 'portable_blueprints:scanner', "count": 1,
                "cost": 32,
                "trade_id": 'prefabs_blueprint_scanner',
                "image": 'minecraft:textures/block/water_still'
            },
            {
                "item": 'portable_blueprints:tablet', "count": 1,
                "cost": 32,
                "trade_id": 'prefabs_blueprint_tablet',
                "image": 'minecraft:textures/block/water_still'
            }
        ]
    })
})
