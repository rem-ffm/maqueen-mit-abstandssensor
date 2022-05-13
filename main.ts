let strip = false
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 50 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        strip = Math.randomBoolean()
        if (strip == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (strip == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            basic.pause(800)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
