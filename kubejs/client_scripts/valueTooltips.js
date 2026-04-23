let slimeData = {}

NetworkEvents.dataReceived('kubejs:slime_value_data', e => {
    slimeData = e.data
})

// Plort dynamic valuing tooltips
ItemEvents.tooltip(e => {
    e.addAdvanced(`splendid_slimes:plort`, (item, advanced, text) => {
        try {
            if (!item.nbt || !item.nbt['plort']) return // return if plort item has no nbt (base item)

            let plort = item.nbt['plort'].id.path // get plort breed

            if (slimeData && slimeData[plort] === undefined) return // return if plort breed has no data entry

            let plortData = slimeData[plort]
            let cost = plortData.currentValue
            let mult = plortData.multPercent
            let isHot = plortData.isHot

            let valColor = (mult, isHot) => {
                if (isHot) return "§6";
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

            // Add final text
            text.add(text.length, [
                `${valueText}`
            ])
        } catch (err) {
            console.log(err)
        }
    })
})

// Coin valuing tooltips
ItemEvents.tooltip(e => {
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
