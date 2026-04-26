// Must use /reload to reload this file!
// /kubejs reload server_scripts will not reload command registry

// Converts a number value into the highest glubcoin equivalents
function coinsFromValueCommand(ctx, Commands, Arguments) {
    let player = ctx.source.player
    let amount = Arguments.INTEGER.getResult(ctx, "amount")
    /** @type {Array} */
    let coins = global.calculateCoinsFromValue(amount, [])
    player.tell(`§6${amount}§a☻§r in coins:`)
    for (let coin of coins) {
        player.tell(`${coin.count}x ${Item.of(coin.id).hoverName.string}`)
    }
}
// Reset plort value data to the base definitions (defined on server load, not always current file)
function resetPlortValueDataCommand(ctx, Commands, Arguments) {
    writeAndBackupJson(
        "kubejs/modpackData/resetValueDataBackup",
        nbtToObject(Utils.server.persistentData['slime_value_data']),
        5
    )
    ctx.source.player.tell(`§cSaved a backup to /minecraft/kubejs/modpackData/`)
    Utils.server.persistentData['slime_value_data'] = slimeBaseValues
    Utils.server.persistentData['daily_sold_plorts'] = {}
    Utils.server.persistentData['daily_sold_total'] = 0
    ctx.source.player.tell(`§dSlime value data and daily sold plort data reset to defaults!`)
}
// Update plort value data by hand from command, otherwise only runs on server load
function updatePlortValueDataCommand(ctx, Commands, Arguments) {
    ctx.source.player.tell(`§cSaved a backup to /minecraft/kubejs/modpackData/`)
    checkAndUpdateSlimeValues()
    ctx.source.player.tell(`§dSlime value data updated!`)
}

// Load plort value data from existing file or backup (bak-x.json)
function loadPlortValueDataFile(ctx, Commands, Arguments, filenamepath) {
    let file = JsonIO.read(filenamepath)
    if (file === null) {
        ctx.source.player.tell(`§cFile not found: ${filenamepath}`)
        ctx.source.player.tell(`§cSearched: /.minecraft/${filenamepath}`)
        return
    }
    ctx.source.player.tell(`§cSaved a backup to /minecraft/kubejs/modpackData/`)
    writeAndBackupJson(
        "kubejs/modpackData/loadValueDataBackup",
        nbtToObject(Utils.server.persistentData['slime_value_data']),
        5
    )

    Utils.server.persistentData['slime_value_data'] = file
    ctx.source.player.tell(`§dSlime value data updated from file: ${filenamepath}`)
}

ServerEvents.commandRegistry(e => {
    const { commands: Commands, arguments: Arguments } = e
    e.register(Commands.literal("splendidranching")
        // command to print out coins from value
        // using this to make market quests lol
        .then(Commands.literal("coinsFromValue")
            .then(Commands.argument("amount", Arguments.INTEGER.create(e))
                .executes(ctx => {
                    coinsFromValueCommand(ctx, Commands, Arguments)
                    return 1
                })
            )
        )
        // Command to reset plort value data to the files default values
        .then(Commands.literal("resetPlortValueData")
            .requires(s => s.hasPermission(2))
            .executes(ctx => {
                resetPlortValueDataCommand(ctx, Commands, Arguments)
                return 1
            })
        )
        // Command to reset plort value data to the files default values
        .then(Commands.literal("updatePlortValueData")
            .requires(s => s.hasPermission(2))
            .executes(ctx => {
                updatePlortValueDataCommand(ctx, Commands, Arguments)
                return 1
            })
        )
        .then(Commands.literal("loadPlortValueDataFile")
            .requires(s => s.hasPermission(2))
            .then(Commands.argument("filename", Arguments.STRING.create(e))
                .executes(ctx => {
                    let filename = Arguments.STRING.getResult(ctx, "filename")
                    loadPlortValueDataFile(ctx, Commands, Arguments, filename)
                    return 1
                })
            )
        )
        .then(Commands.literal("runMarketUpdates")
            .requires(s => s.hasPermission(2))
            .executes(ctx => {
                dailyUpdates(Utils.server)
                return 1
            })
        )
    )

    // patchouli command requires OP normally, but this bypasses that
    // from kubejs server
    // https://discord.com/channels/303440391124942858/1172464187486785567/
    // used to open pages from questbook

    let bookCommand = "open-book"
    e.register(Commands.literal(bookCommand)
        .then(Commands.argument('book', Arguments.RESOURCE_LOCATION.create(e))
            .executes(ctx => {
                const book = Arguments.RESOURCE_LOCATION.getResult(ctx, "book")
                const username = ctx.source.entity.username;
                let cmd = `open-patchouli-book ${username} ${book}`
                Utils.server.runCommandSilent(cmd);
                return 1
            })
        )
    )
    e.register(Commands.literal(bookCommand)
        .then(Commands.argument('book', Arguments.RESOURCE_LOCATION.create(e))
            .then(Commands.argument('entry', Arguments.RESOURCE_LOCATION.create(e))
                .executes(ctx => {
                    const book = Arguments.RESOURCE_LOCATION.getResult(ctx, "book")
                    const entry = Arguments.RESOURCE_LOCATION.getResult(ctx, "entry")
                    const username = ctx.source.entity.username;
                    let cmd = `open-patchouli-book ${username} ${book} ${entry}`
                    Utils.server.runCommandSilent(cmd);
                    return 1
                })
            )
        )
    )
    e.register(Commands.literal(bookCommand)
        .then(Commands.argument('book', Arguments.RESOURCE_LOCATION.create(e))
            .then(Commands.argument('entry', Arguments.RESOURCE_LOCATION.create(e))
                .then(Commands.argument('page', Arguments.INTEGER.create(e))
                    .executes(ctx => {
                        const book = Arguments.RESOURCE_LOCATION.getResult(ctx, "book")
                        const entry = Arguments.RESOURCE_LOCATION.getResult(ctx, "entry")
                        const page = Arguments.INTEGER.getResult(ctx, "page")
                        const username = ctx.source.entity.username;
                        let cmd = `open-patchouli-book ${username} ${book} ${entry} ${page}`
                        Utils.server.runCommandSilent(cmd);
                        return 1
                    })
                )
            )
        )
    )
})
