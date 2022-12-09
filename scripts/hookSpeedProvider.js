Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class AgeSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "Move", default: 0x04D40B},
                {id: "Run", default: 0x04D40B}
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.system.speed.total;

            const ranges = [
                {range: baseSpeed, color: "Move"},
                {range: baseSpeed * 2, color: "Run"}
            ]

            return ranges
        }
    }
    dragRuler.registerModule("drag-ruler-dage-integration", AgeSpeedProvider)
})
