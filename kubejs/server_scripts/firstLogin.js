PlayerEvents.loggedIn(e => {
    if (!e.hasGameStage('started')) {
        e.player.give('splendid_slimes:slime_vac')
        e.player.give('ftbquests:book')
        e.player.give('numismatics_utils:bank_meter')

        e.addGameStage('started')
    }
})
