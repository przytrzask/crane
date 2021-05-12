def on_button_pressed_a():
    basic.pause(200)
    SuperBit.servo2(SuperBit.enServo.S4, 30)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.pause(200)
    SuperBit.servo2(SuperBit.enServo.S4, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    SuperBit.RGB_Program().set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever)

def on_forever2():
    value = Rocker(AnalogPin.P2, AnalogPin.P1)
    radio.send_value("rocker", value)
basic.forever(on_forever2)

def on_forever3():
    value2 = ButtonHandle(enButton.Press)
    radio.send_value("throttle", value2)
basic.forever(on_forever3)
