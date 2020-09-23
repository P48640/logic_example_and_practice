input.onButtonPressed(Button.A, function () {
    basic.showNumber(age)
    basic.showString("Age")
    if (age >= 18) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(random_number)
    basic.showString("random_number")
    if (random_number == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (random_number == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (random_number == 3) {
        basic.showIcon(IconNames.Confused)
    } else if (random_number == 4) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
let random_number = 0
let age = 0
age = randint(10, 50)
random_number = randint(1, 5)
basic.forever(function () {
	
})
