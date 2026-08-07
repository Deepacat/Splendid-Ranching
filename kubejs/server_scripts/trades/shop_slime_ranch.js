ServerEvents.highPriorityData(e => {
	addTrades(e, {
		"$id": "ranching",
		"texture": "splendid_slimes:textures/item/plort/slimy",
		"block_tag": "splendid_ranching:opens_slime_ranch",
		"jei_catalyst": { "item": "splendid_slimes:slime_vac" },
		"selector_weight": -10,
		"trades": [
			{
				"offer": { "item": "splendid_slimes:slime_vac", "count": 1 },
				"request": { "item": "splendid_slimes:plort", "count": 4 },
				"trade_id": "ranching_slime_vac"
			},
			{
				"offer": { "item": "splendid_slimes:corral_block", "count": 16 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "ranching_corral_blocks"
			},
			{
				"offer": { "item": "splendid_slimes:slime_incubator", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 1 },
				"numismatics_cost": 512,
				"trade_id": "ranching_incubator"
			},
			{
				"offer": { "item": "splendid_slimes:plort_press", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 1 },
				"numismatics_cost": 512,
				"trade_id": "ranching_plort_press"
			},
			{
				"offer": { "item": "splendid_slimes:plort_rippit", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "ranching_plort_rippit"
			},
			{
				"offer": { "item": "splendid_slimes:slime_feeder", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "ranching_slime_feeder"
			},
			{
				"offer": { "item": "mbd2:slime_breeder", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "ranching_slime_breeder"
			},
			{
				"offer": { "item": "kubejs:ssccogac_casing", "count": 4 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "ranching_ssccogac_casing"
			},
			{
				"offer": { "item": "quark:feeding_trough", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "ranching_animal_feeder"
			},
			{
				"offer": { "item": "torchmaster:dreadlamp", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "ranching_dread_lamp"
			}
		]
	})
})