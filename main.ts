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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
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
Y = 2
X = 2
basic.forever(function () {
    led.plot(X, Y)
})
