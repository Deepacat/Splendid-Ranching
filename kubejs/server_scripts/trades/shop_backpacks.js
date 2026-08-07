ServerEvents.highPriorityData(e => {
	addTrades(e, {
		"$id": "backpacks",
		"texture": "sophisticatedbackpacks:textures/item/upgrade_base",
		"block_tag": "splendid_ranching:open_backpacks",
		"jei_catalyst": { "item": "sophisticatedbackpacks:backpack" },
		"trades": [
			{
				"offer": { "item": "minecraft:shulker_box", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 4 },
				"numismatics_cost": 256,
				"trade_id": "backpacks_shulker_box"
			},
			{
				"offer": { "item": "quark:crate", "count": 1 },
				"request": { "item": "numismatics:sprocket", "count": 2 },
				"numismatics_cost": 32,
				"trade_id": "backpacks_crate"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:backpack", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "backpacks_backpack"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:deposit_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 2 },
				"numismatics_cost": 128,
				"trade_id": "backpacks_deposit_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:restock_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 2 },
				"numismatics_cost": 128,
				"trade_id": "backpacks_restock_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:feeding_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "backpacks_feeding_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:filter_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "backpacks_filter_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:pickup_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "backpacks_pickup_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:magnet_upgrade", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "backpacks_magnet_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:void_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 2 },
				"numismatics_cost": 128,
				"trade_id": "backpacks_void_upgrade"
			},
			{
				"offer": { "item": "sophisticatedbackpacks:battery_upgrade", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "backpacks_battery_upgrade"
			}
		]
	})
})