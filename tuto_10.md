# Tutoriel 10

## @showdialog

Transforme le micro:bit en jeu de Roche, papier, ciseaux... allumette!

## Étape 1

Supprime les blocs ``||basic:au démarrage||`` et ``||basic:toujours||``.

## Étape 2

Crée une ``||variables: variable||`` et donne lui le nom ``||variables:Main||``.

Ajoute le bloc ``||variables: définir Main ||`` dans le bloc ``||input: lorsque secouer||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    Main = 0
})

```

## Étape 4

Remplace la valeur ``||variables: 0||`` dans le bloc ``||variables: définir Main||`` par le bloc ``||math: choisir au hasard||``.

Remplace les valeurs ``||math: 0||`` et ``||math: 10||`` dans le bloc ``||math: choisir au hasard||`` par les valeurs ``||math: 1||`` et ``||math: 4||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    Main = randint(1, 4)
})

```

## Étape 4

Ajoute le bloc ``||logic: si vrai alors||`` sous le bloc ``||variables: définir Main||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    Main = randint(1, 4)
    if (true) {
    	
    }
})

```

## Étape 5

Remplace la valeur ``||logic: vrai||`` par le bloc ``||logic: 0 = 0||`` dans le bloc ``||logic: si alors||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    Main = randint(1, 4)
    if (0 == 0) {
    	
    }
})

```

## Étape 6

Remplace la valeur ``||logic: 0||`` de gauche du bloc ``||logic: 0 = 0||`` par le bloc ``||variables:Main||``.

Remplace la valeur ``||logic: 0||`` de droite du bloc ``||logic: 0 = 0||`` par la valeur ``||logic: 1||``.

La valeur 1 représente les ``||logic: ciseaux||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    Main = randint(1, 4)
    if (Main == 1) {
    	
    }
})

```

## Étape 7

Ajoute le bloc ``||basic: montrer l'icône||`` sous le bloc ``||logic: si alors ||``.

Choisis ``||basic: les ciseaux||`` comme icône.

Ajoute le bloc ``||basic: pause (ms) 2000||`` sous le bloc ``||basic: montrer l'icône||``.

Ajoute le bloc ``||basic: effacer l'écran||`` sous le bloc ``||basic: pause (ms) 2000||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    Main = randint(1, 4)
    if (Main == 1) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(2000)
        basic.clearScreen()
    }
})

```

## Étape 8

Ajoute le bloc ``||basic: pause (ms) 500||`` sous le bloc ``||input: lorsque secouer||``.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    basic.pause(500)
    Main = randint(1, 4)
    if (Main == 1) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(2000)
        basic.clearScreen()
    }
})

``` 

## Étape 9

Oups! Les étapes pour programmer la roche, le papier et l'allumette ont disparu.

Programme le micro:bit pour qu'il puisse afficher les autres éléments du jeu.

Duplique le bloc de programmation ``||logic: si alors||`` à l'aide du clique droit.

Modifie les valeurs.

La valeur 1 représente les ``||logic: ciseaux||``. 

La valeur 2 représente la ``||logic: roche||``.

La valeur 4 représente le ``||logic: papier||``. 

La valeur 4 représente le ``||logic: allumette||``. 


## Étape 8

Télécharge et teste la programmation.

Secoue le micro:bit. Que remarques-tu ?

## Étape 8

Voici la programmation complète.

```blocks

let Main = 0
input.onGesture(Gesture.Shake, function () {
    basic.pause(500)
    Main = randint(1, 4)
    if (Main == 1) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (Main == 2) {
        basic.showIcon(IconNames.Target)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (Main == 3) {
        basic.showIcon(IconNames.Square)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (Main == 4) {
        basic.showIcon(IconNames.Sword)
        basic.pause(2000)
        basic.clearScreen()
    }
})

```