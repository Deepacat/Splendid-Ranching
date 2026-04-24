ServerEvents.recipes(e => {
    // chromatic compound recipe
    e.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "minecraft:obsidian" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "create:rose_quartz" }
        ],
        "block_in": {
            "blocks": ["alexscaves:purple_soda"]
        },
        "post": [
            {
                "type": "drop_item",
                "item": "create:chromatic_compound"
            }
        ]
    }).id("kubejs:mods/lychee/inside_block/chromatic_compound")
    // unobtanium in portal
    e.remove({ output: "architects_palette:unobtanium" })
    e.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "create:refined_radiance" },
            { "item": "create:shadow_steel" }
        ],
        "block_in": { "blocks": ["minecraft:nether_portal"] },
        "post": [
            { "type": "drop_item", "item": "architects_palette:unobtanium" },
            { "type": "drop_item", "item": "architects_palette:unobtanium" }
        ]
    }).id("kubejs:mods/lychee/inside_block/unobtanium")
})

/* {
    "type": "lychee:item_inside",
    "item_in": {
        "item": "bucket"
    },
    "block_in": {
        "blocks": ["water_cauldron"],
        "state": {
            "level": 3
        }
    },
    "post": [
        {
            "type": "drop_item",
            "item": "water_bucket"
        },
        {
            "type": "place",
            "block": "cauldron"
        }
    ]
} */