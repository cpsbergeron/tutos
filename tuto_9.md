# Tutoriel 9

## @showdialog

Transforme le micro:bit en dé.

## Étape 1

Supprime les blocs ``||basic:au démarrage||`` et ``||basic:toujours||``.

## Étape 2

Crée une ``||variables: variable||`` et donne-lui le nom ``||variables:Nombre||``.

Ajoute le bloc ``||variables: définir Nombre||`` dans le bloc ``||input: lorsque secouer||``.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = 0
})

```

## Étape 3

Remplace la valeur ``||variables: 0||`` dans le bloc ``||variables: définir nombre||`` par le bloc ``||math: choisir au hasard de 0 à 10||``.

Remplace les valeurs ``||math: 0||`` et ``||math: 10||`` dans le bloc ``||math: choisir au hasard||`` par les valeurs ``||math: 1||`` et ``||math: 6||``.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = randint(1, 6)
})

```

## Étape 4

Ajoute le bloc ``||logic: si vrai alors||`` sous le bloc ``||input: lorsque secouer||``.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = randint(1, 6)
    if (true) {
        
    }
})

```

## Étape 5

Ajoute le bloc ``||logic: 0" = "0||`` dans le bloc ``||logic: si vrai alors||``.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = randint(1, 6)
    if (0 == 0) {
        
    }
})

```

## Étape 6

Remplace la valeur ``||logic: 0||`` de gauche du bloc ``||logic: 0 = 0||`` par le bloc ``||variables:Nombre||``.

Remplace la valeur ``||logic: 0||`` de droite du bloc ``||logic: 0 = 0||`` par la valeur ``||logic: 1||``.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = randint(1, 6)
    if (Nombre == 1) {
        
    }
})

```

## Étape 7

Ajoute le bloc ``||basic: montrer LEDs||`` sous le bloc ``||logic: si Nombre = 1||``.

Dessine le chiffre 1.

Ajoute le bloc ``||basic: pause (ms) 100||`` sous le bloc ``||basic: montrer LEDs||``.

Modifie la valeur ``||basic: pause (ms) 100||`` par ``||basic: pause (ms) 2000||``.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = randint(1, 6)
    if (Nombre == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(2000)
    }
})

```

## @showdialog

Oups! Les étapes pour programmer les nombres 2 à 6 ont disparu.

Programme le micro:bit pour qu'il puisse afficher les autres nombres du dé.

Duplique le bloc de programmation ``||logic: si alors||`` à l'aide du clique droit.

Modifie les valeurs.

## Étape 8

Télécharge et teste la programmation.

Secoue le micro:bit. Que remarques-tu ?

## Étape 8

Voici la programmation complète.

```blocks

let Nombre = 0
input.onGesture(Gesture.Shake, function () {
    Nombre = randint(1, 6)
    if (Nombre == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(2000)
    }
    if (Nombre == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(2000)
    }
    if (Nombre == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(2000)
    }
    if (Nombre == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        basic.pause(2000)
    }
    if (Nombre == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(2000)
    }
    if (Nombre == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(2000)
    }
})


```


