let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 && bearing > 315) {
        basic.showString(".")
    } else if (bearing < 135 && bearing > 46) {
        basic.showString("W")
        basic.showArrow(ArrowNames.West)
    } else if (bearing < 225 && bearing > 136) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else if (bearing < 315 && bearing > 226) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    }
})
