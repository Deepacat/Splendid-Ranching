ServerEvents.highPriorityData(e => {
    addTrades(e, {
        "shop_id": "building_gadgets",
        "name": "shop.society_trading.building_gadgets",
        "texture": "buildinggadgets2:textures/block/template_manager_front",
        "block_tag": "splendid_ranching:opens_building_gadgets",
        "jei_catalyst": { "item": "buildinggadgets2:template" },
        "trades": [
            {
                "offer": { "item": "buildinggadgets2:gadget_building", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "splendid_building_gadget"
            },
            {
                "offer": { "item": "buildinggadgets2:gadget_exchanging", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "splendid_exchanging_gadget"
            },
            {
                "offer": { "item": "buildinggadgets2:gadget_copy_paste", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "splendid_copy_paste_gadget"
            },
            {
                "offer": { "item": "buildinggadgets2:gadget_cut_paste", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "splendid_cut_paste_gadget"
            },
            {
                "offer": { "item": "buildinggadgets2:gadget_destruction", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "splendid_destruction_gadget"
            },
            {
                "offer": { "item": "buildinggadgets2:template_manager", "count": 1 },
                "request": { "item": "numismatics:crown", "count": 1 },
                "numismatics_cost": 512,
                "trade_id": "splendid_template_manager"
            }
        ]
    })
})