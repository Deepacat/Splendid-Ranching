// PresenceJS client script for KubeJS
//
// Edit this current script in place and replace the client ID/image keys below
// with assets from your own
// Discord application: https://discord.com/developers/applications
// PresenceJS stays disabled until you set a real Discord application ID.

const $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
const $I18n = Java.loadClass('net.minecraft.client.resources.language.I18n')

const USER_SETTINGS = {
  appId: '1487269951512248350',
  activityName: 'Splendid Ranching',
  packVersion: 'DEV',
  imageKeys: {
    large: 'menu',
    small: 'curseforgeicon'
  },
  buttons: [
    { label: 'CurseForge', url: 'https://www.curseforge.com/minecraft/modpacks/splendid-ranching' },
    { label: 'GitHub', url: 'https://github.com/Deepacat/Splendid-Ranching' }
  ],
  useServerRPCStats: true
}
const STATUS_SETTINGS = {
  rotateInWorldStatuses: true,
  rotationIntervalSeconds: 12,
  economy: true,
  collection: true,
  heldPlort: true,
  hotPlort: true,
  world: true
}

const PRESENCE_APP_ID = USER_SETTINGS.appId
const ACTIVITY_NAME = USER_SETTINGS.activityName
const PACK_VERSION = USER_SETTINGS.packVersion
const LARGE_IMAGE_KEY = USER_SETTINGS.imageKeys.large
const SMALL_IMAGE_KEY = USER_SETTINGS.imageKeys.small
const BUTTONS = USER_SETTINGS.buttons
const PRESENCE_OPTIONS = {
  useServerRPCStats: USER_SETTINGS.useServerRPCStats
}
const STATUS_OPTIONS = STATUS_SETTINGS
const RPC_STATE = {
  balance: null,
  day: null,
  slimesCollected: null,
  slimesTotal: null
}
let SLIME_VALUE_DATA = {}

function getPackLabel() {
  return `${ACTIVITY_NAME} v${PACK_VERSION}`
}

function formatBalance(value) {
  const numericValue = Math.floor(Number(value))

  if (!Number.isFinite(numericValue)) {
    return '0'
  }

  return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function formatSignedPercent(value) {
  const numericValue = Math.round(Number(value) || 0)

  return numericValue > 0 ? `+${numericValue}%` : `${numericValue}%`
}

function formatBreedName(breedId) {
  return String(breedId)
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getLocalizedPlortName(breedId) {
  try {
    const item = Item.of('splendid_slimes:plort', { plort: { id: `splendid_slimes:${breedId}` } })
    return item.hoverName.string || `${formatBreedName(breedId)} Plort`
  } catch (error) {
    return `${formatBreedName(breedId)} Plort`
  }
}

function formatResourceIdFallback(resourceId, fallbackLabel) {
  if (!resourceId) {
    return fallbackLabel
  }

  const path = String(resourceId).includes(':')
    ? String(resourceId).split(':')[1]
    : String(resourceId)

  return path
    .replace(/\//g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function makeTranslationKey(prefix, resourceId) {
  if (!resourceId) {
    return null
  }

  const stringId = String(resourceId)
  const splitId = stringId.includes(':') ? stringId.split(':') : ['minecraft', stringId]
  const namespace = splitId[0]
  const path = (splitId[1] || '').replace(/\//g, '.')

  if (!namespace || !path) {
    return null
  }

  return `${prefix}.${namespace}.${path}`
}

function translateResourceId(prefix, resourceId, fallbackLabel) {
  const fallback = formatResourceIdFallback(resourceId, fallbackLabel)
  const translationKey = makeTranslationKey(prefix, resourceId)

  if (!translationKey) {
    return fallback
  }

  try {
    if ($I18n.exists(translationKey)) {
      return $I18n.get(translationKey)
    }
  } catch (error) {
    return fallback
  }

  return fallback
}

function hasRPCStats() {
  return PRESENCE_OPTIONS.useServerRPCStats
    && RPC_STATE.balance != null
    && RPC_STATE.day != null
    && RPC_STATE.slimesCollected != null
    && RPC_STATE.slimesTotal != null
}

if (PRESENCE_OPTIONS.useServerRPCStats) {
  NetworkEvents.dataReceived('kubejs:rpc', event => {
    const data = event.data || {}
    const collection = data.collection || {}

    RPC_STATE.balance = data.balance
    RPC_STATE.day = data.day
    RPC_STATE.slimesCollected = collection.collectedTotal
    RPC_STATE.slimesTotal = collection.allTotal
  })
}

NetworkEvents.dataReceived('kubejs:slime_value_data', event => {
  SLIME_VALUE_DATA = event.data || {}
})

function getHeldPlortStatus(itemName) {
  try {
    const mc = $Minecraft.getInstance()
    const player = mc == null ? null : mc.player

    if (player == null) {
      return null
    }

    const stack = player.getMainHandItem()
    if (stack == null || stack.isEmpty()) {
      return null
    }

    const item = Item.of(stack)
    if (item == null || item.id !== 'splendid_slimes:plort' || item.nbt == null || item.nbt.plort == null) {
      return null
    }

    const plortId = String(item.nbt.plort.id || '')
    const breedId = plortId.includes(':') ? plortId.split(':')[1] : plortId
    const plortData = SLIME_VALUE_DATA[breedId]

    if (plortData == null) {
      return null
    }

    const parts = [
      `${formatBalance(plortData.currentValue)}¤`,
      formatSignedPercent(plortData.multPercent)
    ]

    if (plortData.isHot) {
      parts.push('Hot')
    }

    return {
      details: `Holding ${itemName || getLocalizedPlortName(breedId)}`,
      state: parts.join(' • ')
    }
  } catch (error) {
    return null
  }
}

function getHotPlortStatus() {
  const hotPlorts = Object.entries(SLIME_VALUE_DATA)
    .filter(([, data]) => data != null && data.isHot)
    .sort((left, right) => Number(right[1].currentValue || 0) - Number(left[1].currentValue || 0))

  if (hotPlorts.length === 0) {
    return null
  }

  const [breedId, plortData] = hotPlorts[0]
  return {
    details: `Hot Plort: ${getLocalizedPlortName(breedId)}`,
    state: `${formatBalance(plortData.currentValue)}¤ • ${formatSignedPercent(plortData.multPercent)} market`
  }
}

function pickStatus(statuses) {
  if (statuses.length === 0) {
    return null
  }

  if (!STATUS_OPTIONS.rotateInWorldStatuses || statuses.length === 1) {
    return statuses[0]
  }

  const intervalSeconds = Math.max(1, Number(STATUS_OPTIONS.rotationIntervalSeconds) || 1)
  const index = Math.floor(Date.now() / (intervalSeconds * 1000)) % statuses.length

  return statuses[index]
}

function buildInWorldStatuses(data) {
  const statuses = []

  if (STATUS_OPTIONS.economy && hasRPCStats()) {
    statuses.push({
      details: `Glubcoins: ${formatBalance(RPC_STATE.balance)}¤`,
      state: `Day ${RPC_STATE.day} • ${data.modeLabel}`
    })
  }

  if (STATUS_OPTIONS.collection && hasRPCStats()) {
    statuses.push({
      details: `Slimes: ${RPC_STATE.slimesCollected}/${RPC_STATE.slimesTotal}`,
      state: `${data.completedAdvancementCount}/${data.advancementCount} Advancements`
    })
  }

  if (STATUS_OPTIONS.heldPlort) {
    const heldPlortStatus = getHeldPlortStatus(data.itemName)
    if (heldPlortStatus != null) {
      statuses.push(heldPlortStatus)
    }
  }

  if (STATUS_OPTIONS.hotPlort) {
    const hotPlortStatus = getHotPlortStatus()
    if (hotPlortStatus != null) {
      statuses.push(hotPlortStatus)
    }
  }

  if (STATUS_OPTIONS.world) {
    statuses.push({
      details: `${data.modeLabel} • ${data.worldName}`,
      state: `${data.dimension} • ${data.biomeName}`
    })
  }

  return statuses
}

function applyButtons(presence) {
  presence.clearButtons()

  for (const button of BUTTONS.slice(0, 2)) {
    if (!button || !button.label || !button.url) {
      continue
    }

    presence.addButton(button.label, button.url)
  }
}

PresenceJSEvents.build(event => {
  const ctx = event.getContext()
  const presence = event.getPresence()

  if (!PRESENCE_APP_ID) {
    event.disable()
    return
  }

  presence.setClientId(PRESENCE_APP_ID)
  if (ACTIVITY_NAME) {
    presence.setName(ACTIVITY_NAME)
  } else {
    presence.clearName()
  }
  presence.setActivityType('PLAYING')

  if (ctx == null) {
    presence.setDetails('Starting Splendid Ranching')
    presence.setState(`Loading client context • v${PACK_VERSION}`)
    if (LARGE_IMAGE_KEY) {
      presence.setLargeImage(LARGE_IMAGE_KEY, getPackLabel())
    } else {
      presence.clearLargeImage()
    }

    if (SMALL_IMAGE_KEY) {
      presence.setSmallImage(SMALL_IMAGE_KEY, 'Starting client')
    } else {
      presence.clearSmallImage()
    }

    applyButtons(presence)
    return
  }

  if (!ctx.isInWorld()) {
    presence.setDetails(getPackLabel())
    presence.setState(`Browsing menus • ${ctx.getScreenTitle() || 'Idle'}`)
    if (LARGE_IMAGE_KEY) {
      presence.setLargeImage(LARGE_IMAGE_KEY, getPackLabel())
    } else {
      presence.clearLargeImage()
    }

    if (SMALL_IMAGE_KEY) {
      presence.setSmallImage(SMALL_IMAGE_KEY, 'In menus')
    } else {
      presence.clearSmallImage()
    }

    applyButtons(presence)
    return
  }

  const worldName = ctx.getWorldName() || ctx.getServerName() || ctx.getServerAddress() || 'Unknown world'
  const dimensionId = ctx.getDimensionId() || 'minecraft:overworld'
  const biomeId = ctx.getBiomeId() || null
  const dimension = translateResourceId('dimension', dimensionId, 'Overworld')
  const biomeName = translateResourceId('biome', biomeId, 'Unknown biome')
  const itemName = ctx.getSelectedItemName() || 'Exploring'
  const modeLabel = ctx.isSingleplayer() ? 'Singleplayer' : 'Multiplayer'
  const advancementCount = typeof ctx.getAdvancementCount === 'function' ? ctx.getAdvancementCount() : 0
  const completedAdvancementCount = typeof ctx.getCompletedAdvancementCount === 'function'
    ? ctx.getCompletedAdvancementCount()
    : 0
  const activeStatus = pickStatus(buildInWorldStatuses({
    worldName: worldName,
    dimension: dimension,
    biomeName: biomeName,
    itemName: itemName,
    modeLabel: modeLabel,
    advancementCount: advancementCount,
    completedAdvancementCount: completedAdvancementCount
  }))

  if (activeStatus != null) {
    presence.setDetails(activeStatus.details)
    presence.setState(activeStatus.state)
  } else {
    presence.setDetails(`${modeLabel} • ${worldName}`)
    presence.setState(`${completedAdvancementCount}/${advancementCount} Advancements • ${dimension}`)
  }
  if (LARGE_IMAGE_KEY) {
    presence.setLargeImage(LARGE_IMAGE_KEY, `${getPackLabel()} • ${biomeName}`)
  } else {
    presence.clearLargeImage()
  }

  if (SMALL_IMAGE_KEY) {
    presence.setSmallImage(SMALL_IMAGE_KEY, `${itemName} • ${dimension}`)
  } else {
    presence.clearSmallImage()
  }

  applyButtons(presence)
  presence.setStartTimestamp(ctx.getWorldStartEpochSecond())
})

PresenceJSEvents.ready(event => {
  const user = event.getUser()
  const name = user == null ? 'unknown user' : user.getEffectiveName()
  console.info(`[PresenceJS] Connected to Discord as ${name}`)
})

PresenceJSEvents.disconnected(event => {
  console.info(`[PresenceJS] Discord disconnected: ${event.getMessage()}`)
})




