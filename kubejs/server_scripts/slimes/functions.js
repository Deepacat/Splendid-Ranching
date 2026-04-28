// Most functions here are used for plortDataManagement, but many are used elsewhere. Probably just Ctrl+F it since ProbeJS hardly works!

// main daily update functions to run
/**
 * @param {{ server: { persistentData: { [x: string]: any; }; tell: (arg0: string | Internal.MutableComponent) => void; }; }} bwabwa
 */
function dailyUpdates(server) {
    let dailySoldPlorts = server.persistentData['daily_sold_plorts'] || {}
    let dailySoldTotal = server.persistentData['daily_sold_total'] || 0

    // if within 20 ticks of "6 am"
    server.tell("— §6Goooood morning§r, Rancher!")
    if (dailySoldTotal > 0 && Object.entries(Object.assign({}, dailySoldPlorts)).length > 0) { // if there was anything sold, tell about it
        server.tell(`— Yesterday you sold:`)
        for (let plortBreed in dailySoldPlorts) {
            let count = dailySoldPlorts[plortBreed]
            server.tell(
                Text.of(`—— ${count} ${plortBreed} plorts`)
                    .color(slimeBaseDefinitions[plortBreed].color)
            )
        }
        server.tell(`—— For a total of §6${dailySoldTotal}§a☻!`)
    }

    marketUpdates(server) // run daily market updates
}

function calculateVolumeModifier(plortData) {
    let volumeModifier
    if (plortData.currentVolume >= plortData.maxVolume) {
        volumeModifier = 0.5 // Half price when at or above max volume
    } else if (plortData.currentVolume > 0) {
        // Linear reduction between 100% and 50% based on volume
        volumeModifier = 1 - (0.5 * (plortData.currentVolume / plortData.maxVolume))
    }
    return volumeModifier
}

// mostly ai generated but very manually edited price adjustment slop
/**
 * @param {Internal.MinecraftServer} server
 */
function marketUpdates(server) {
    let slimeValueData = server.persistentData['slime_value_data']
    let dailySoldPlorts = server.persistentData['daily_sold_plorts']

    // 1-4 random plorts to have double value
    let hotDemands = Object.keys(slimeValueData)
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 3) + 1)

    server.tell(`— Today's hot §dplort§r demands are:`)
    for (let plortBreed of hotDemands) {
        server.tell(Text.of(`—— ${plortBreed}`).color(slimeBaseDefinitions[plortBreed].color))
    }

    // Deep clone the input object to avoid mutations
    let newValueData = Object.assign({}, slimeValueData);

    // First reduce all currentVolumes by 25%
    for (const [plortType, _] of Object.entries(newValueData)) {
        newValueData[plortType].currentVolume *= 0.75;
    }

    // Calculate daily market fluctuation (±30% from base)
    let marketFluctuation = 1 + (Math.random() * 0.6 - 0.3) // -30% to +30%

    // Apply fluctuations to all plorts
    for (let [plortType, plortData] of Object.entries(newValueData)) {
        let soldAmount = dailySoldPlorts[plortType] || 0

        // increase currentVolume by amount sold yesterday
        plortData.currentVolume += soldAmount

        // Calculate individual fluctuation (±30% from base)
        let individualFluctuation = 1 + (Math.random() * 0.6 - 0.3) // -30% to +30%

        // calculate modifier based on volume
        let volumeModifier = calculateVolumeModifier(plortData)

        // Apply bonus if plortType is in the daily bonus (hot demands) array
        let bonusMultiplier = 1
        if (hotDemands && hotDemands.includes(plortType)) {
            // random between 2 and 4 times multiplier for daily bonus
            bonusMultiplier *= Math.random() * 2 + 2
            newValueData[plortType].isHot = true;
        } else {
            newValueData[plortType].isHot = false;
        }

        // calculate new plort price from all variables
        let newPrice =
            plortData.baseValue * marketFluctuation * individualFluctuation
            * volumeModifier * bonusMultiplier

        // // Ensure price stays within bounds
        // // * Disabling this is actually way more fun and cooler, hell yea I want up to +460% value
        // newPrice = Math.max(plortData.priceRange[0], Math.min(plortData.priceRange[1], newPrice))

        // shows in ctrl tooltip for debug
        newValueData[plortType].formula = {
            marketFluctuation: marketFluctuation,
            individualFluctuation: individualFluctuation,
            volumeModifier: volumeModifier,
            bonusMultiplier: bonusMultiplier
        }

        // Saved for presence and client stuff
        newValueData[plortType].flucPercent = Math.round((marketFluctuation - 1) * 100)

        // Round and set the new price value for the plort
        newValueData[plortType].currentValue = Math.round(newPrice)

        // Calculate multPercent as percentage difference from base value
        newValueData[plortType].multPercent = Math.round(((newValueData[plortType].currentValue / plortData.baseValue - 1) * 100))
    }

    writeAndBackupJson( // Create a backup of the old data before saving the market updates
        "kubejs/modpackData/autoMarketValueDataBackup",
        nbtToObject(Utils.server.persistentData['slime_value_data']),
        5
    )

    // set new slime value data on server
    server.persistentData['slime_value_data'] = newValueData

    let fluc = Math.round((marketFluctuation - 1) * 100)
    let flucText = fluc > 0 ? `§a+${fluc}% :)` : `§c${fluc}% :(`
    server.tell(`— General Market fluctuation is at ` + flucText)

    // reset daily data
    server.persistentData['daily_sold_plorts'] = {}
    server.persistentData['daily_sold_total'] = 0

    // update all players with new slime data for tooltips
    for (let player of server.players) {
        player.sendData('kubejs:slime_value_data', server.persistentData['slime_value_data'])
    }
}

// Update server values from file, used for update compatibility
// Only ran on initial server start or by debug command
function checkAndUpdateSlimeValues() {
    writeAndBackupJson(
        "kubejs/modpackData/updateValueDataBackup",
        nbtToObject(Utils.server.persistentData['slime_value_data']),
        5
    )
    // Copies old slime data to a JS object for use and readability
    let serverOldData = Object.assign({}, Utils.server.persistentData['slime_value_data'])
    let newValueData = {}

    // Just a reference for clarity when reading
    let newSlimeBaseValues = slimeBaseValues

    for (let [plortType, plortData] of Object.entries(newSlimeBaseValues)) {
        // Gets old server data for slime
        let oldServerSlime = Object.assign({}, serverOldData[plortType])

        // Checks if slime existed previously, if not set to default data and continue to next slime
        if (oldServerSlime === undefined) {
            newValueData[plortType] = Object.assign({}, plortData)
            continue
        }

        // Merge the new slime data into the old data
        newValueData[plortType] = Object.assign(serverOldData[plortType], plortData)

        // Reset the currentvalues to previous as they're overwritten to defaults
        newValueData[plortType].currentValue = oldServerSlime.currentValue
        newValueData[plortType].currentVolume = Math.min(newValueData[plortType].maxVolume, oldServerSlime.currentVolume)

        // Reapply the original daily market formula to the new plort data if old formula exists in the new format
        // Future me please make a function for these both
        // (v0.3.0 data cannot be updated to v0.4.0, only v0.4.0+ supports migration)
        if (oldServerSlime.formula && oldServerSlime.formula.marketFluctuation) {
            let newPrice = newValueData[plortType].baseValue *
                oldServerSlime.formula.marketFluctuation *
                oldServerSlime.formula.individualFluctuation *
                calculateVolumeModifier(newValueData[plortType]) *
                oldServerSlime.formula.bonusMultiplier
            newValueData[plortType].currentValue = Math.round(newPrice)
            newValueData[plortType].flucPercent = Math.round((oldServerSlime.formula.marketFluctuation - 1) * 100)
            newValueData[plortType].multPercent = Math.round(((newValueData[plortType].currentValue / plortData.baseValue - 1) * 100))
        }
    }
    Utils.server.persistentData['slime_value_data'] = newValueData
}

/**
 * @param {Internal.SimplePlayerEventJS} player
 */
function getSlimeCollectionData(player) {
    let collectedSlimes = []
    for (let [slime, slimeData] of Object.entries(slimeBaseDefinitions)) {
        let questId = slimeData.ftb_quests_completion_id

        let questObj = FTBQuests.getObject(player.level, questId)
        if (!questObj) { continue }

        let isCompleted = FTBQuests.getData(player).isCompleted(questObj)
        if (isCompleted) { collectedSlimes.push(slime) }
    }

    return {
        collectedSlimeList: collectedSlimes,
        collectedTotal: collectedSlimes.length,
        allTotal: Object.keys(slimeBaseDefinitions).length
    }
}

// Gets the numismatics account data of a numismatics bank card itemstack
/**
 * @param {Internal.ItemStack} itemStack
 */
function getAccountOfCardItem(itemStack) {
    if (!itemStack.nbt || itemStack.nbt['AccountID'] == null) return

    let accountUUID = $NbtUtils.loadUUID(itemStack.nbt['AccountID'])
    let account = global.GLOBAL_BANK.getAccount(accountUUID)
    return account
}
// Function to get player numismatics account, and also check if they have a bank card equipped to use that account instead
// Only works for online players
function getNumismaticAccount(player) {
    let account = global.GLOBAL_BANK["getAccount(net.minecraft.world.entity.player.Player)"](player)
    $CuriosApi.getCuriosInventory(player).ifPresent(inventory => {
        for (let curio of inventory.getEquippedCurios().allItems) {
            if (new RegExp(/numismatics:.*card$/).test(curio.id)) {
                account = getAccountOfCardItem(curio)
                break
            }
        }
    })
    return account
}

// Converts java compoungTag into a JS Object for use getting data from persistentData
// ai generated deepa is liable kill me
function nbtToObject(tag) {
    if (tag === null || tag === undefined) return null

    const id = tag.getId()  // numeric NBT type ID

    // CompoundTag (id 10)
    if (id === 10) {
        const obj = {}
        for (let key of tag.getAllKeys()) {
            obj[key] = nbtToObject(tag.get(key))
        }
        return obj
    }

    // ListTag (id 9)
    if (id === 9) {
        const arr = []
        for (let i = 0; i < tag.size(); i++) {
            arr.push(nbtToObject(tag.get(i)))
        }
        return arr
    }

    // Numeric tags (1=Byte,2=Short,3=Int,4=Long,5=Float,6=Double)
    if ([1, 2, 3, 4, 5, 6].includes(id)) {
        return tag.getAsNumber()
    }

    // String (id 8)
    if (id === 8) return tag.getAsString()

    // ByteArray (id 7), IntArray (11), LongArray (12)
    if (id === 7) return tag.getAsByteArray()
    if (id === 11) return tag.getAsIntArray()
    if (id === 12) return tag.getAsLongArray()

    return tag.toString()
}

// create backups files 1-x, overwrite first one and copy rest
function writeAndBackupJson(filePath, writeData, maxBackups) {
    let existingCount = 0
    for (let i = 1; i <= maxBackups; i++) {
        if (JsonIO.read(`${filePath}-bak${i}.json`) != null) {
            existingCount = i
        }
    }
    for (let i = existingCount; i >= 1; i--) {
        if (i === maxBackups) { continue }
        JsonIO.write(`${filePath}-bak${i + 1}.json`, JsonIO.read(`${filePath}-bak${i}.json`))
    }
    console.log(`backing up ${filePath} to ${filePath}-bak1.json`)
    JsonIO.write(`${filePath}-bak1.json`, writeData)
}
