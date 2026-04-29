ServerEvents.recipes(e => {
    e.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
    e.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
        }],
        "key": {
            "B": { "item": "sophisticatedbackpacks:copper_backpack" },
            "I": { "tag": "forge:ingots/iron" }
        },
        "pattern": ["III", "IBI", "III"],
        "result": { "item": "sophisticatedbackpacks:iron_backpack" }
    }).id('kubejs:sophisticatedbackpacks/shaped/iron_backpack')
})  