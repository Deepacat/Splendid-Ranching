ServerEvents.highPriorityData(e => {
    addTrades(e, {
        "shop_id": "sparky_shop",
        "name": "shop.society_trading.sparky_shop",
        "texture": "createaddition:textures/block/electric_motor/brass_motor_sides",
        "block_tag": "splendid_ranching:opens_sparky_shop",
        "jei_catalyst": { "item": "createaddition:copper_spool" },
        "trades": [
            {
                "offer": { "item": "mbd2:splendid_generator", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "sparky_generator"
            },
            {
                "offer": { "item": "createaddition:copper_spool", "count": 1 },
                "request": { "item": "numismatics:bevel", "count": 1 },
                "numismatics_cost": 8,
                "trade_id": "sparky_copper_spool"
            },
            {
                "offer": { "item": "createaddition:spool", "count": 1 },
                "request": { "item": "numismatics:spur", "count": 1 },
                "numismatics_cost": 4,
                "trade_id": "sparky_empty_spool"
            },
            {
                "offer": { "item": "createaddition:festive_spool", "count": 1 },
                "request": { "item": "numismatics:bevel", "count": 1 },
                "numismatics_cost": 8,
                "trade_id": "sparky_festive_spool"
            },
            {
                "offer": { "item": "createaddition:connector", "count": 1 },
                "request": { "item": "numismatics:bevel", "count": 1 },
                "numismatics_cost": 8,
                "trade_id": "sparky_connector"
            },
            {
                "offer": { "item": "createaddition:small_light_connector", "count": 1 },
                "request": { "item": "numismatics:bevel", "count": 1 },
                "numismatics_cost": 8,
                "trade_id": "sparky_light_connector"
            },
            {
                "offer": { "item": "createaddition:tesla_coil", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "sparky_tesla_coil"
            },
            {
                "offer": { "item": "createaddition:modular_accumulator", "count": 1 },
                "request": { "item": "numismatics:cog", "count": 1 },
                "numismatics_cost": 128,
                "trade_id": "sparky_accumulator"
            },
            {
                "offer": { "item": "createaddition:redstone_relay", "count": 1 },
                "request": { "item": "numismatics:sprocket", "count": 1 },
                "numismatics_cost": 16,
                "trade_id": "sparky_redstone_relay"
            },
            {
                "offer": { "item": "createaddition:digital_adapter", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "sparky_digital_adapter"
            }
        ]
    })
})
