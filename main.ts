input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.round(0 * 0))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
    	
    }
})
basic.showNumber(input.lightLevel())
basic.showNumber(input.temperature())
basic.pause(100)
