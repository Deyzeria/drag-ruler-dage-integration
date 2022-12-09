Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class MnMSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "Move", default: 0x04D40B}
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.system.speed.total;

            const ranges = [
                {range: baseSpeed, color: "Move"}
            ]

            return ranges
        }
    }
    dragRuler.registerModule("drag-ruler-dage-integration", MnMSpeedProvider)
})
