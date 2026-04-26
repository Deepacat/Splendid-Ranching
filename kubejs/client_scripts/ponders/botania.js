Ponder.registry(e => {
    e.create("botania:fel_pumpkin").scene("fel_pumpkin_blaze", "Spawning a blaze", (scene, util) => {
        scene.showBasePlate()
        scene.world.showSection([4, 4, 4, 0, 1, 0], Facing.EAST)
        scene.idle(10)

        scene.world.setBlock([2, 1, 2], "minecraft:iron_bars", true)
        scene.idle(10)

        scene.world.setBlock([2, 2, 2], "minecraft:iron_bars", true)
        scene.idle(10)

        scene.addKeyframe()
        scene.text(80, "Placing a Fel Pumpkin atop 2 iron bars...", [2, 4, 2])
        scene.showControls(80, [2, 4, 2], "down")
            .rightClick()
            .withItem('botania:fel_pumpkin')
        scene.idle(90)

        scene.world.setBlock([2, 3, 2], "botania:fel_pumpkin", true)
        scene.world.modifyBlock([2, 3, 2], (curState) => curState.with("facing", "north"), false)
        scene.idle(3)

        scene.addKeyframe()
        scene.world.replaceBlocks([2, 3, 2, 2, 1, 2], "minecraft:air", true);
        const blaze = scene.world.createEntity("minecraft:blaze", [2.5, 1, 2.5]);
        scene.text(80, "Spawns a blaze! This blaze will only drop blaze powder.", [2, 2, 2])
        scene.idle(80)

        scene.text(70, "Though it can still be placed inside a blaze burner.", [2, 2, 2])
        scene.showControls(60, [2, 3, 2], "down")
            .rightClick()
            .withItem('create:empty_blaze_burner')
        scene.idle(40)

        scene.addKeyframe()
        scene.world.removeEntity(blaze)
        scene.idle(40)

        scene.showControls(80, [2, 3, 2], "down")
            .rightClick()
            .withItem('create:blaze_burner')
        scene.world.setBlock([2, 1, 2], "create:blaze_burner", true)
        scene.world.modifyBlock([2, 1, 2], (curState) => curState.with("blaze", "smouldering"), false)
    })
})