let slimeDefData = JsonIO.read("kubejs/server_scripts/slimes/slimeBaseDefinitions.jsonc")

// Update vars from server, sent to clients automatically every 5 seconds
let slimeValueData = {}
let splendidSlimesConfig = {}
let knownPlayers = {}
NetworkEvents.dataReceived('kubejs:slime_value_data', e => { slimeValueData = e.data })
NetworkEvents.dataReceived('kubejs:splendid_slimes_config_data', e => { splendidSlimesConfig = e.data })
NetworkEvents.dataReceived('kubejs:known_players', e => { knownPlayers = e.data })

// Request slime value data when reloading assets (f3+t)
ClientEvents.highPriorityAssets(e => {
    if (Utils.server === null) { return }
    Utils.server.sendData('kubejs:slime_value_data_client_request')
})

function getTierFromBreed(itemStack) {
    if (!itemStack.nbt) { return null }
    if (!itemStack.nbt['plort'] && !itemStack.nbt['slime']) { return null }
    let breed = itemStack.nbt['plort'] ?
        itemStack.nbt['plort'].id.path :
        itemStack.nbt['slime'].id.path
    return slimeDefData[breed]['slime_fusion_tier']
}

function addTierTooltip(itemStack, text) {
    let tier = getTierFromBreed(itemStack)
    if (tier === null) return
    text.add(text.length, [`Tier §d${tier}§r slime`])
}

ItemEvents.tooltip(e => {
    // Plort dynamic valuing tooltips
    e.addAdvanced(`splendid_slimes:plort`, (item, advanced, text) => {
        try {
            if (!item.nbt || !item.nbt['plort']) return // return if plort item has no nbt (base item)
            let plort = item.nbt['plort'].id.path // get plort breed
            if (slimeValueData[plort] === undefined) return

            if (slimeValueData && slimeValueData[plort] === undefined) { // if no data entry loaded for plort
                text.add(text.length + 1, [
                    `§cNo data found for plort: ${plort}`,
                    `\n§cIf this lasts longer than 10 seconds it's likely bugged. Report this please!`
                ])
                return
            }

            let plortData = slimeValueData[plort]
            let cost = plortData.currentValue
            let mult = plortData.multPercent
            let isHot = plortData.isHot

            if (e.ctrl) { // show all plort data on ctrl (For debug mostly)
                let plortDataArr = Object.entries(plortData)
                for (let [key, val] of plortDataArr) {
                    text.add(text.length + 1 + plortDataArr.indexOf(key), [
                        `${key}: §6${val}`
                    ])
                }
                return
            }

            let valColor = (mult, isHot) => {
                if (isHot) return "§6"
                return mult == 0 ? '§7' : mult < 0 ? '§c' : '§a'
            }

            // Base value and smiley
            let valueText = e.shift && item.count > 1 ?
                `§6${global.calculateCost(cost, 1, item.count)}§a☻ §rx${item.count} ` : // Shifted
                `§6${global.calculateCost(cost, 1, 1)}§a☻ ` // Not shifted

            // only add multiplier text if it's not 0 and not shifted
            if (mult !== 0)
                valueText +=
                    `§7| ${valColor(mult, isHot)}${isHot ? '🔥 ' : ''}${mult}% ` +
                    `${valColor(mult, isHot)}${mult === 0 ? '' : mult < 0 ? '↓ ' : '↑ '}`

            if (!e.shift && item.count > 1) {
                valueText += `§8[§7Shift§8]`
            }

            // Add final value text
            text.add(text.length, [
                `${valueText}`
            ])
            // Add tier tooltip after value
            addTierTooltip(item, text)
        } catch (err) {
            console.log(err)
        }
    })

    // Slime item tooltipss
    e.addAdvanced(`splendid_slimes:slime_item`, (item, advanced, text) => {
        if (!item.nbt || !item.nbt.entity || !splendidSlimesConfig.HAPPY_THRESHOLD) {
            addTierTooltip(item, text) // Tier text
            return
        }
        let slime = item.nbt.entity
        let happinessComponent
        let happiness = slime['Happiness']
        let tamed = slime['Tamed']
        let EatingCooldown = slime['EatingCooldown']
        let OwnerUUID = slime['Owner']
        let currentHunger = Math.round((EatingCooldown / splendidSlimesConfig.MAX_EATING_COOLDOWN) * 10.0)
        let maxHunger = Math.round((splendidSlimesConfig.MAX_EATING_COOLDOWN / splendidSlimesConfig.MAX_EATING_COOLDOWN) * 10.0)

        if (happiness >= splendidSlimesConfig.HAPPY_THRESHOLD) {
            happinessComponent = Component.translatable("entity.splendid_slimes.happy").withStyle(Color.GREEN)
        } else if (happiness <= splendidSlimesConfig.FURIOUS_THRESHOLD) {
            happinessComponent = Component.translatable("entity.splendid_slimes.furious").withStyle(Color.RED)
        } else if (happiness <= splendidSlimesConfig.UNHAPPY_THRESHOLD) {
            happinessComponent = Component.translatable("entity.splendid_slimes.sad").withStyle(Color.GOLD)
        } else {
            happinessComponent = Component.translatable("entity.splendid_slimes.neutral")
        }

        let tamedText = tamed ?
            `§8Owned by: §7${knownPlayers[$NbtUtils.loadUUID(OwnerUUID).toString()]}` :
            Component.translatable("entity.splendid_slimes.wild").withStyle(Color.RED)

        addTierTooltip(item, text) // Tier text
        text.add(text.length, Component.literal("State: ").darkGray().append(happinessComponent)) // Happiness text
        text.add(text.length, `§8Hunger: §7${currentHunger}/${maxHunger}`) // Hunger text
        text.add(text.length, tamedText) // Owner/wild text
    })

    // Slime heart tooltips
    e.addAdvanced(`splendid_slimes:slime_heart`, (item, advanced, text) => {
        addTierTooltip(item, text)
    })

    // Coin value tooltips
    for (let coinEntry of Object.entries(global.coinObj)) {
        e.addAdvanced(coinEntry[0], (item, advanced, text) => {
            text.remove(1)
            let val = global.coinObj[item.id]
            if (e.shift) {
                text.add(1, [
                    `§6${global.calculateCost(val, 1, item.count)}§a☻`,
                    item.count > 1 ? '§7 Stack Value' : ''
                ])
            } else {
                text.add(1, [
                    `§6${global.calculateCost(val, 1, 1)}§a☻`,
                    item.count > 1 ? '§8 [§7Shift§8]' : ''
                ])
            }
        })
    }
})
