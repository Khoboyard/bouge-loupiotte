input.onGesture(Gesture.LogoUp, function () {
    if (Y < 4) {
        led.unplot(X, Y)
        Y += 1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (X < 4) {
        led.unplot(X, Y)
        X += 1
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (X > 0) {
        led.unplot(X, Y)
        X += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    Y = 2
    X = 2
})
input.onGesture(Gesture.LogoDown, function () {
    if (Y > 0) {
        led.unplot(X, Y)
        Y += -1
    }
})
let X = 0
let Y = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let verifie_heure = input.runningTime()
Y = 2
X = 2
let kill_pixel_every = randint(4000, 12000)
basic.forever(function () {
    if (verifie_heure + kill_pixel_every < input.runningTime()) {
        led.toggle(randint(0, 4), randint(0, 4))
        music.playTone(330, music.beat(BeatFraction.Whole))
        verifie_heure = input.runningTime()
        kill_pixel_every = randint(3000, 7000)
    }
})
basic.forever(function () {
    led.plot(X, Y)
})
