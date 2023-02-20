let Col = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            Col = randint(0, 4)
        }
        if (led.point(Col, row)) {
            led.unplot(Col, row)
            led.plot(Col + 1, row)
        }
    }
})
