ServerEvents.highPriorityData(e => {
	addTrades(e, {
		"$id": "banking",
		"texture": "numismatics:textures/block/bank_terminal/bank_terminal_front",
		"block_tag": "splendid_ranching:opens_banking",
		"jei_catalyst": { "item": "numismatics:magenta_card" },
		"trades": [
			{
				"offer": { "item": "mbd2:selling_port", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 4 },
				"numismatics_cost": 128,
				"trade_id": "banking_plort_sales_terminal"
			},
			{
				"offer": { "item": "mbd2:auto_selling_port", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 2 },
				"numismatics_cost": 1024,
				"trade_id": "banking_auto_plort_sales"
			},
			{
				"offer": { "item": "kubejs:splendid_wares_shop", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "banking_wares_shop"
			},
			{
				"offer": { "item": "kubejs:market_monitor", "count": 1 },
				"request": { "item": "numismatics:sprocket", "count": 2 },
				"numismatics_cost": 32,
				"trade_id": "banking_bank_market_monitor"
			},
			{
				"offer": { "item": "kubejs:market_data_storage", "count": 1 },
				"request": { "item": "numismatics:crown", "count": 1 },
				"numismatics_cost": 512,
				"trade_id": "banking_market_data_storage"
			},
			{
				"offer": { "item": "numismatics:bank_terminal", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 4 },
				"numismatics_cost": 256,
				"trade_id": "banking_bank_terminal"
			},
			{
				"offer": { "item": "numismatics_utils:portable_bank_terminal", "count": 1 },
				"request": { "item": "numismatics:sun", "count": 1 },
				"numismatics_cost": 4096,
				"trade_id": "banking_portable_bank"
			},
			{
				"offer": { "item": "numismatics:banking_guide", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 2 },
				"numismatics_cost": 128,
				"trade_id": "banking_banking_guide"
			},
			{
				"offer": { "item": "numismatics:magenta_card", "count": 1 },
				"request": { "item": "numismatics:cog", "count": 1 },
				"numismatics_cost": 64,
				"trade_id": "banking_bank_card"
			}
		]
	})
})