ServerEvents.highPriorityData(e => {
	addTrades(e, {
		"$id": 'prefabs',
		"texture": "minecraft:textures/block/stone",
		"jei_catalyst": { "item": "minecraft:stone" },
		"$trades": [
			{
				"item": 'portable_blueprints:worn_blueprint', count: 1,
				// "nbt": {
				// 	nome: 'base_camp', owner_name: 'SSCCOGAC', blueprint_name: 'base_camp',
				// 	display: { Name: { italic: false, color: '#FFFF00', text: 'Blueprint: Base Camp' } },
				// 	free_build: 1, allow_nbt: 1, remaining_uses: 1, worn_set: 1, owner: 'worn'
				// },
				"nbt": prefabNBT('base_camp', 'Base Camp', 1),
				"cost": 256,
				"trade_id": 'prefabs_basic_corral'
			}
		]
	})

	// addTrades(e, {
	//     "shop_id": 'blacksmith',
	//     "name": 'shop.society_trading.blacksmith',
	//     "display_type": 'default',
	//     "texture": 'minecraft:textures/block/smithing_table_side',
	//     // "villager_profession": 'toolsmith',
	//     // "entity": 'minecraft:cow',
	//     // "entity_data": 'Variant:0',
	//     // "block_tag": 'yourtag:opens_blacksmith',
	//     // "hidden_from_selector": true,
	//     // "selector_weight": -20,
	//     // "stage_required": 'blacksmith_unlocked',
	//     // "seasons_required": ['late_spring', 'late_summer', 'late_autumn', 'late_winter'],
	//     "trades": [
	//         {
	//             "offer": { "item": 'mbd2:slime_breeder', "count": 1 },
	//             "request": { "item": 'numismatics:crown', "count": 2 },
	//             "numismatics_cost": 1024,
	//             "trade_id": 'splendid_slime_breeder'
	//         },
	//         {
	//             "offer": {
	//                 "item": "portable_blueprints:worn_blueprint",
	//                 "count": 1,
	//                 "nbt": "{blueprint_name:\"basic_corral_template\", owner_name: \"SSCCOGAC\", display:{Name:'{\"italic\":false,\"color\":\"#FFFF00\",\"text\":\"Blueprint: Basic Corral\"}'}}"
	//             },
	//             "request": { "item": "numismatics:cog", "count": 4 },
	//             "numismatics_cost": 256,
	//             "trade_id": "splendid_basic_corral"
	//         }
	//     ],
	//     // "random_sets": []
	// })
})

/* {
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
						"trade_id": "splendid_generator"
				},
				{
						"offer": { "item": "createaddition:copper_spool", "count": 1 },
						"request": { "item": "numismatics:bevel", "count": 1 },
						"numismatics_cost": 8,
						"trade_id": "splendid_copper_spool"
				},
				{
						"offer": { "item": "createaddition:spool", "count": 1 },
						"request": { "item": "numismatics:spur", "count": 1 },
						"numismatics_cost": 4,
						"trade_id": "splendid_empty_spool"
				},
				{
						"offer": { "item": "createaddition:festive_spool", "count": 1 },
						"request": { "item": "numismatics:bevel", "count": 1 },
						"numismatics_cost": 8,
						"trade_id": "splendid_festive_spool"
				},
				{
						"offer": { "item": "createaddition:connector", "count": 1 },
						"request": { "item": "numismatics:bevel", "count": 1 },
						"numismatics_cost": 8,
						"trade_id": "splendid_connector"
				},
				{
						"offer": { "item": "createaddition:small_light_connector", "count": 1 },
						"request": { "item": "numismatics:bevel", "count": 1 },
						"numismatics_cost": 8,
						"trade_id": "splendid_light_connector"
				},
				{
						"offer": { "item": "createaddition:tesla_coil", "count": 1 },
						"request": { "item": "numismatics:crown", "count": 1 },
						"numismatics_cost": 512,
						"trade_id": "splendid_tesla_coil"
				},
				{
						"offer": { "item": "createaddition:modular_accumulator", "count": 1 },
						"request": { "item": "numismatics:cog", "count": 1 },
						"numismatics_cost": 128,
						"trade_id": "splendid_accumulator"
				},
				{
						"offer": { "item": "createaddition:redstone_relay", "count": 1 },
						"request": { "item": "numismatics:sprocket", "count": 1 },
						"numismatics_cost": 16,
						"trade_id": "splendid_redstone_relay"
				},
				{
						"offer": { "item": "createaddition:digital_adapter", "count": 1 },
						"request": { "item": "numismatics:crown", "count": 1 },
						"numismatics_cost": 512,
						"trade_id": "splendid_digital_adapter"
				}
		]
} */