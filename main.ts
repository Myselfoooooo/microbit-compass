let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 && bearing > 315) {
        basic.showString(".")
    } else if (bearing < 135 && bearing > 46) {
        basic.showString("W")
        basic.showArrow(ArrowNames.West)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("" + (bearing))
    } else if (bearing < 225 && bearing > 136) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("" + (bearing))
    } else if (bearing < 315 && bearing > 226) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("" + (bearing))
    } else {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("" + (bearing))
    }
})
