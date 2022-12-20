basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) == 2) {
        servos.P1.setAngle(0)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 3) {
        servos.P1.setAngle(39)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 4) {
        servos.P1.setAngle(86)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 5) {
        servos.P1.setAngle(180)
    }
})
