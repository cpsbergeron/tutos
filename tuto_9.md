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
    }
})

```

## Étape 8

Dupplique le bloc ``||logic: si alors||`` et glisse-le sous le bloc ``||logic: si alors||``.

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
    }
    if (Nombre == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
})

```

## Étape 9

Modifie les valeurs du deuxième bloc ``||logic: si alors||``.

Remplace la valeur ``||logic: 1||`` par ``||logic: 2||``.

Remplace le dessin du numéro ``||basic: 1||`` par le dessin du numéro ``||basic: 2||``.

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
    }
    if (Nombre == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
})

```

## @showdialog 

Les étapes pour les numéros 3, 4, 5 et 6 du dé ont disparu.

Dupplique le bloc ``||logic: si alors||`` et apporte les modifications nécessaires.

## Étape 10

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
          }
    if (Nombre == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
           }
    if (Nombre == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
            }
    if (Nombre == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
            }
    if (Nombre == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
            }
    if (Nombre == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
            }
})


```