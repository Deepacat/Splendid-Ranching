ItemEvents.tooltip(e => {
    // mbd2
    e.add('mbd2:selling_port', ["§8[§7 Sells plorts using the interface §8]"])
    e.add('mbd2:auto_selling_port', [
        "§8[§7 Sells plorts on the ground §8]",
        "§8[§4 NOT YET IMPLEMENTED §8]"
    ])
    e.add('mbd2:slime_breeder', [
        "§8[§7 Fuses slimes in a 5x4x5 area behind it §8]",
        "§8[§7 The front has the eyes, the red dot faces behind §8]",
    ])
    e.add('mbd2:chicken_duper', [
        "§8[§7 50/50 Duplicates or kills a nearby chicken §8]"
    ])
    e.add('mbd2:splendid_generator', [
        "§8[§7 Generates 2.5k FE/gip from your bank account ]",
        "§8[§7 up to 25k FE/second §8]"
    ])
    // splendid slimes
    e.add('splendid_slimes:corral_block', [
        "§8[§7 Allows players to pass through, but not slimes §8]",
        "§8[§7 Redstone power will disable other mobs passing through §8]"
    ])
    e.add('splendid_slimes:slime_incubator', ["§8[§7 Grows a slime heart to spawn a new slime §8]"])
    e.add('splendid_slimes:plort_press', ["§8[§7 Creates slime hearts from plorts §8]"])
    e.add('splendid_slimes:plort_rippit', ["§8[§7 Extracts resources from a slime heart §8]"])
    e.add('splendid_slimes:slime_feeder', ["§8[§7 Nearby slimes can eat from it\'s inventory §8]"])
    // quark
    e.add('quark:feeding_trough', ["§8[§7 Feeds nearby animals from items inside §8]"])
    // torchmaster
    e.add('torchmaster:dreadlamp', ["§8[§7 Slimes count to be blocked from spawning §8]"])
    // Farmers delight
    e.add('farmersdelight:tomato', [
        "§8[§7 It's a fruit!!! §8]",
        "§8[§7 Marked as a vegetable for culinary purposes §8]"
    ])
    // Numismatics
    e.add('numismatics_utils:bank_meter', "§8[§7 Displays your bank balance on the top left of your HUD §8]")
    e.add(/numismatics:(?!.*_id_).+_card/, [
        "§8[§7 Place card into Blaze Banker to link the card to the Bankers account §8]",
        "§8[§7 Equip the linked card in Curios to link yourself to the account §8]",
        "§8[§7 Shift right-click to clear ownership §8]"
    ])
    e.add(/numismatics:\w+_id_card/, [
        "§8[§7 Place others owned ID Cards into your Blaze Banker to allow them access §8]",
    ])
    e.add('numismatics:spur', "§8[§b I'm just a little guy §8]")
    e.add('numismatics:bevel', "§8[§5 Looking good today! §8]")
    e.add('numismatics:sprocket', "§8[§a What am I made of? §8]")
    e.add('numismatics:cog', "§8[§c I guess you can spend me :| §8]")
    e.add('numismatics:crown', "§8[§6 What're you lookin' at :P §8]")
    e.add('numismatics:sun', "§8[§d Mornin' Rancher :) §8]")
    // Vanilla
    e.add('minecraft:flint_and_steel', ["§8[§7 Portals may be created, however", "§cthe nether is disabled! §8]"])
    // Create
    e.add('create:chromatic_compound', [
        "§7- At the touch of a beacons beam, ", "§7becomes infused with §rradiance",
        "§7- In the dark of the voids despair, ", "§7becomes infused with §8shadows"
    ])

    e.add('create:refined_radiance', "§7Forged by a §rgreat light.")
    e.add('create:shadow_steel', "§7Forged by a §8dark void.")
    // Architects palette
})
