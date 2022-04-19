let manyetik = 0
basic.forever(function () {
    manyetik = input.magneticForce(Dimension.Strength)
    led.plotBarGraph(
    manyetik,
    1024
    )
    if (manyetik > 50) {
        music.setTempo(manyetik)
        music.ringTone(988)
    } else {
        music.stopAllSounds()
    }
})
