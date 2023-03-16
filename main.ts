basic.forever(function () {
    if (!(Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) || !(Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right))) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
    }
})
