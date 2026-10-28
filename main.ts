/**
 * Au démarrage : l'animal commence avec des valeurs moyennes
 */
// Bouton A : nourrir l'animal
input.onButtonPressed(Button.A, function () {
    nourriture += 2
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
// Boutons A+B : dormir
input.onButtonPressed(Button.AB, function () {
    energie += 3
    basic.showIcon(IconNames.Asleep)
})
// Bouton B : jouer (plus de bonheur, mais ça fatigue)
input.onButtonPressed(Button.B, function () {
    bonheur += 2
    energie += -1
    basic.showIcon(IconNames.Surprised)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
// Secouer : bilan de santé + calcul du total
input.onGesture(Gesture.Shake, function () {
    basic.showString("N")
    basic.showNumber(nourriture)
    basic.showString("E")
    basic.showNumber(energie)
    basic.showString("B")
    basic.showNumber(bonheur)
    total = nourriture + energie + bonheur
    basic.showString("T")
    basic.showNumber(total)
    basic.clearScreen()
})
// Logo touché (micro:bit V2 seulement) : caresser
// Sur un micro:bit V1, remplacer par : input.onPinPressed(TouchPin.P0, ...)
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bonheur += 1
    basic.showIcon(IconNames.Heart)
    music.playTone(523, music.beat(BeatFraction.Half))
})
let total = 0
let bonheur = 0
let energie = 0
let nourriture = 0
nourriture = 5
energie = 5
bonheur = 5
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
// Toujours : le temps passe, l'animal a faim et se fatigue
basic.forever(function () {
    basic.pause(15000)
    nourriture += -1
    energie += -1
})
