pins.servoWritePin(AnalogPin.P0, 0)
for (let index = 0; index <= 180; index++) {
    pins.servoWritePin(AnalogPin.P0, index)
    basic.pause(100)
}
for (let index = 0; index <= 180; index++) {
    pins.servoWritePin(AnalogPin.P0, 180 - index)
    basic.pause(100)
}
basic.forever(function () {
	
})
