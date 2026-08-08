/**
 * Creates a society trading shop entry with priority data event
 * @param {Internal.DataPackEventJS} e  - Datapack event
 * @param {Object} shopData             - The shop category data object
 * @param {string?} shopData.$id        - Shortener to auto-generate shopData.shop_id and shopData.name from one variable
 * @param {string?} shopData.shop_id    - Shop category id (e.g. "prefabs" or "banking")
 * @param {string?} shopData.name       - The string name or language entry for the shops title (e.g. "Banking" or "shop.society_trading.banking")
 * @param {Object[]?} shopData.trades    - Original array of trade definitions (Offers)
 * @param {Object[]?} shopData.$trades   - Custom parsed array of trade definitions (Offers)
 */
function addTrades(e, shopData) {
    let finalShopData = shopData

    // ID Shortener using the "$id" key in shopData object
    if (shopData["$id"]) {
        finalShopData.shop_id = shopData["$id"]
        finalShopData.name = `shop.society_trading.${shopData["$id"]}`
        delete finalShopData["$id"]
    }

    // Trade generation helper using the "$trades" key in shopData object
    if (shopData["$trades"]) {
        let finalTrades = []
        let coinMap = global.coinMap.slice().sort(function (a, b) { return b.value - a.value })

        // Loop through trades and convert them to a regular society trading trade definition
        for (let trade of shopData["$trades"]) {
            // Set base offer (purchaseable item)
            let offer = { item: trade.item, count: trade.count || 1 }

            // Add item nbt if specified
            if (trade.nbt) {
                if (typeof trade.nbt === 'string') {
                    offer.nbt = trade.nbt
                } else {
                    offer.nbt = toSnbt(trade.nbt)
                }
            }

            let rawCost = trade.cost // The cost value given in the custom trade definition
            let roundedCost = global.roundPrice(rawCost) // The cost value rounded to the nearest coin item

            // If the rounded cost is different from the raw cost, log a warning for dev to the trade entry
            if (roundedCost !== rawCost) {
                console.warn(`"[Shop:${shopId}]" Cost ${rawCost} was rounded to ${roundedCost}. This should be fixed to be an exact coin value.`)
            }

            let requestCoin
            for (let coin of coinMap) {
                if (roundedCost % coin.value === 0 && roundedCost / coin.value <= 64) {
                    requestCoin = coin
                    break
                }
            }

            let request = {
                item: requestCoin.coin,
                count: roundedCost / requestCoin.value
            }

            let tradeId = trade.trade_id || `splendid_${Item.of(offer.item).idLocation.path}`

            // Use an explicit numismatics_cost if provided, otherwise the rounded value
            let numismaticsCost = trade.numismatics_cost !== undefined ? trade.numismatics_cost : roundedCost

            // Build the base trade object with auto‑generated fields
            let baseTrade = {
                offer: offer,
                request: request,
                numismatics_cost: numismaticsCost,
                trade_id: tradeId
            }

            // Copy any remaining keys from the original $trades entry into the final trade,
            // except those that were already consumed or handled above.
            let consumedKeys = ['item', 'count', 'nbt', 'cost', 'trade_id', 'numismatics_cost']
            for (let key of Object.keys(trade)) {
                if (!consumedKeys.includes(key)) {
                    baseTrade[key] = trade[key]
                }
            }

            finalTrades.push(baseTrade)
        }
        delete finalShopData["$trades"]
        finalShopData.trades = finalTrades
    }

    if (!shopData.trades || !shopData.name || !shopData.shop_id || !shopData.texture) {
        console.error(`[Shop:${shopData.shop_id}] Missing one or more of the following properties: "trades", "name", "shop_id", "texture"`)
        return
    }

    // // Debug
    // (function () {
    //     console.log(`Creating "[Shop:${shopData.shop_id}]" with ${shopData?.trades?.length || 0} trades.`)
    //     console.log(shopData)
    //     JsonIO.write(`kubejs/modpackData/test${shopData.shop_id}.json`, shopData)
    // })()

    // Log warning if missing language entry in english lang file
    let enlang = JsonIO.read(`kubejs/assets/society_trading/lang/en_us.json`)
    if (enlang[finalShopData.name] === undefined) {
        console.warn(`\n    [Shop:${finalShopData.shop_id}] No language entry for ${finalShopData.name}.\n    Add one at kubejs/assets/society_trading/lang/en_us.json\n`)
    }

    // Write final shop obj to data
    e.addJson(`society_trading:shops/${finalShopData.shop_id}.json`, finalShopData)
}

/**
 * Converts a JavaScript object to a Minecraft SNBT string.
 * Special keys: 'Name', 'Lore', 'text' – if their value is an object, it is JSON‑stringified.
 * Strings containing double quotes are wrapped in single quotes (and vice‑versa).
 */
function toSnbt(obj) {
    if (typeof obj === 'string') {
        if (obj.indexOf('"') !== -1) {
            // Use single quotes around the string, escape any internal single quotes
            var escaped = obj.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
            return "'" + escaped + "'"
        } else {
            // Use double quotes, escape any internal double quotes or backslashes
            var escaped = obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
            return '"' + escaped + '"'
        }
    }
    if (typeof obj === 'number') return '' + obj
    if (typeof obj === 'boolean') return obj ? 'true' : 'false'

    if (Array.isArray(obj)) {
        let items = []
        for (var i = 0; i < obj.length; i++) {
            items.push(toSnbt(obj[i]))
        }
        return '[' + items.join(',') + ']'
    }
    if (obj !== null && typeof obj === 'object') {
        let pairs = []
        let keys = Object.keys(obj)

        // Keys that should be JSON‑stringified if they contain an object
        let jsonStringKeys = ['Name', 'Lore', 'text']

        for (var i = 0; i < keys.length; i++) {
            let key = keys[i]
            let value = obj[key]
            if (jsonStringKeys.indexOf(key) !== -1 && typeof value === 'object' && value !== null) {
                // Convert the object to a JSON string, then treat as a SNBT string
                let jsonStr = JSON.stringify(value)
                pairs.push(key + ':' + toSnbt(jsonStr))
            } else {
                pairs.push(key + ':' + toSnbt(value))
            }
        }
        return '{' + pairs.join(',') + '}'
    }
    return '""' // fallback
}

function prefabNBT(blueprintId, itemName, usesAmount) {
    return {
        "nome": blueprintId,
        "blueprint_name": blueprintId,
        "remaining_uses": usesAmount,
        "display": {
            "Name": {
                "italic": false,
                "color": "#FFFF00",
                "text": itemName
            }
        },
        // Static vals
        "owner_name": "SSCCOGAC", "free_build": 1, "allow_nbt": 1, "worn_set": 1, "owner": "worn"
    }
}
