// mostly ai generated but very manually edited price adjustment slop
function dailyRecalculatePlortValues(valueData, soldPlorts, bonus) {
    // Deep clone the input object to avoid mutations
    let newValueData = Object.assign({}, valueData);

    // First reduce all currentVolumes by 25%
    for (const [plortType, _] of Object.entries(newValueData)) {
        newValueData[plortType].currentVolume *= 0.75;
    }

    // Calculate daily market fluctuation (±30% from base)
    let marketFluctuation = 1 + (Math.random() * 0.6 - 0.3) // -30% to +30%

    // Apply fluctuations to all plorts
    for (let [plortType, plortData] of Object.entries(newValueData)) {
        let soldAmount = soldPlorts[plortType] || 0

        // increase currentVolume by amount sold yesterday
        plortData.currentVolume += soldAmount

        // Calculate individual fluctuation (±30% from base)
        let individualFluctuation = 1 + (Math.random() * 0.6 - 0.3) // -30% to +30%

        // calculate modifier based on volume
        let volumeModifier = 1
        if (plortData.currentVolume >= plortData.maxVolume) {
            volumeModifier = 0.5 // Half price when at or above max volume
        } else if (plortData.currentVolume > 0) {
            // Linear reduction between 100% and 50% based on volume
            volumeModifier = 1 - (0.5 * (plortData.currentVolume / plortData.maxVolume))
        }

        // Apply bonus if plortType is in the daily bonus array
        let bonusMultiplier = 1
        if (bonus && bonus.includes(plortType)) {
            // random between 2 and 4 times multiplier for daily bonus 
            bonusMultiplier *= Math.random() * 2 + 2
        }

        // calculate new plort price from all variables
        let newPrice =
            plortData.baseValue *
            marketFluctuation *
            individualFluctuation *
            volumeModifier *
            bonusMultiplier

        // // Ensure price stays within bounds 
        // // * Disabling this is actually way more fun and cooler, hell yea I want up to +460% value
        // newPrice = Math.max(plortData.priceRange[0], Math.min(plortData.priceRange[1], newPrice))

        // shows in ctrl tooltip for debug
        newValueData[plortType].formula =
            `${plortData.baseValue} * ${marketFluctuation} * ${individualFluctuation} ` +
            `* ${volumeModifier} * ${bonusMultiplier}`

        // Round and set the new price value for the plort
        newValueData[plortType].currentValue = Math.round(newPrice)

        // Calculate multPercent as percentage difference from base value
        newValueData[plortType].multPercent = Math.round(((newValueData[plortType].currentValue / plortData.baseValue - 1) * 100))
    }

    return {
        valueData: newValueData,
        marketFluctuation: marketFluctuation
    };
}

