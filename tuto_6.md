# Tutoriel 6

## @showdialog

Transforme le micro:bit en thermomètre.

## Étape 1

Supprime le bloc ``||basic:au démarrage||``.

## Étape 2

Crée une ``||variables: variable||`` et donne-lui le nom ``||variables:température||``.

Ajoute le bloc ``||variables: définir température ||`` dans le bloc ``||basic: toujours||``.

```blocks

let température = 0
basic.forever(function () {
    température = 0
})

```

## Étape 3

Remplace la valeur ``||variables: 0||`` du bloc ``||variables: définir température ||`` par le bloc ``||input: température||``. 

```blocks

let température = 0
basic.forever(function () {
    température = input.temperature()
})

```

## Étape 4

Ajoute le bloc ``|| basic: montrer nombre ||`` sous le bloc ``|| variables: définir température ||``.

```blocks

let température = 0
basic.forever(function () {
    température = input.temperature()
    basic.showNumber(0)
})

```

## Étape 5

Remplace la valeur ``|| basic: 0||`` du bloc ``|| basic: montrer nombre ||`` par le bloc ``|| variables: température||``. 

```blocks

let température = 0
basic.forever(function () {
    température = input.temperature()
    basic.showNumber(température)
})
```

## Étape 6

Ajoute le bloc ``|| basic: pause (ms) 100 ||`` sous le bloc ``|| basic: montrer nombre ||``.

Modifie la valeur ``|| basic: 100 ||`` par ``|| basic: pause (ms) 1000 ||``.

```blocks

let température = 0
basic.forever(function () {
    température = input.temperature()
    basic.showNumber(température)
    basic.pause(1000)
})

```

## Étape 7

Ajoute le bloc ``|| basic: effacer l'écran ||`` sous le bloc ``|| basic: pause ||``.

```blocks

let température = 0
basic.forever(function () {
    température = input.temperature()
    basic.showNumber(température)
    basic.pause(1000)
    basic.clearScreen()
})


```

## Étape 8

Télécharge et teste la programmation.

## @showdialog

Manipule doucement le micro:bit...

Que remarques-tu?