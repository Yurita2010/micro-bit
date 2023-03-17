input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffelen += 5
})
let voeding = 20
let knuffelen = 20
let dood = 0
basic.forever(function () {
    if (voeding > 10 || knuffelen > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (voeding > 10 && knuffelen > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    knuffelen += knuffelen - 1
    voeding += voeding - 1
    basic.pause(1000)
})
basic.forever(function () {
    if (voeding > 10 || knuffelen > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (dood == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
