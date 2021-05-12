/**
 * const value2 =  ButtonHandle(enButton.Press)
 */
/**
 * SuperBit.RGB_Program().setBrightness(150)
 */
/**
 * SuperBit.RGB_Program().show()
 */
/**
 * basic.pause(200)
 */
/**
 * SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
 */
/**
 * SuperBit.RGB_Program().show()
 */
/**
 * SuperBit.RGB_Program().setBrightness(0)
 */
/**
 * })
 */
/**
 * basic.pause(200)
 */
/**
 * SuperBit.RGB_Program().show()
 */
/**
 * basic.forever(function () {
 */
/**
 * value = pins.analogReadPin(AnalogPin.P10)
 */
/**
 * if (value > 1000) {
 */
/**
 * })
 */
/**
 * }
 */
/**
 * const value =  Rocker(AnalogPin.P2, AnalogPin.P1)
 */
/**
 * SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
 */
/**
 * } else {
 */
/**
 * SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
 */
/**
 * SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
 */
/**
 * SuperBit.RGB_Program().setBrightness(0)
 */
/**
 * SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
 */
/**
 * input.onButtonPressed(Button.B, function () {
 */
/**
 * })
 */
/**
 * })
 */
/**
 * basic.forever(function () {
 */
/**
 * })
 */
/**
 * basic.forever(function () {
 */
/**
 * })
 */
/**
 * radio.sendValue("throttle", value2)
 */
/**
 * input.onButtonPressed(Button.A, function () {
 */
/**
 * SuperBit.Servo2(SuperBit.enServo.S4, 30)
 */
/**
 * SuperBit.Servo2(SuperBit.enServo.S4, 0)
 */
/**
 * basic.forever(function () {
 */
/**
 * function Buttons(pin: DigitalPin, value: enButton): boolean {
 */
/**
 * pins.setPull(pin, PinPullMode.PullUp);
 */
/**
 * if (pins.digitalReadPin(pin) == value) {
 */
/**
 * return true;
 */
/**
 * }
 */
/**
 * else {
 */
/**
 * return false;
 */
/**
 * }
 */
/**
 * }
 */
let value = 0
enum enButton {
        //% blockId="Press" block="press"
        Press = 0,
        //% blockId="Realse" block="release"
        Realse = 1
    }
