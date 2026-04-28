MBDMachineEvents.onAfterRecipeWorking("mbd2:chicken_duper", e => {
    const mbdEvent = e.event
    const { machine, recipe } = mbdEvent

    if (Math.random() > 0.5) {
        for (let i = 0; i < 2; i++) {
            let chicken = machine.level
                .getBlock(machine.pos.x, machine.pos.y + 1, machine.pos.z)
                .createEntity("minecraft:chicken")

            chicken.setPosition(machine.pos.x + 0.5, machine.pos.y + 0.5, machine.pos.z + 0.5)
            chicken.setDeltaMovement(new Vec3d((Math.random() - 0.5) / 10, 0.8, (Math.random() - 0.5) / 10))
            chicken.spawn()
        }
    } else {
        machine.level.playSound(null, machine.pos.x, machine.pos.y, machine.pos.z,
            "minecraft:entity.chicken.death", "blocks", 1,
            Math.random() * (1.1 - 0.9) + 0.9
        )
    }
    machine.customData.putInt("cooldown", 200)
})

MBDMachineEvents.onTick("mbd2:chicken_duper", e => {
    const mbdEvent = e.event
    const { machine } = mbdEvent

    if (machine.customData.getInt("cooldown") > 0) {
        machine.customData.putInt("cooldown", machine.customData.getInt("cooldown") - 1)
    }
})

MBDMachineEvents.onBeforeRecipeWorking("mbd2:chicken_duper", e => {
    const mbdEvent = e.event
    const { machine, recipe } = mbdEvent

    if (machine.customData.getInt("cooldown") != 0) {
        mbdEvent.setCanceled(true)
    }
})
