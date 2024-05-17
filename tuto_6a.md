# Tutoriel Bonus 6A

## @showdialog

Affiche la température à l'aide d'un graphique.

## Étape 1

Crée une ``||variables: variable||`` et donne lui le nom ``||variables:Graphique||``.

Ajoute le bloc ``||variables: définir Graphique||`` dans le bloc ``||basic: au démarrage||``.

La valeur ``||variables:0||`` demeure la même.

```blocks

let Graphique = 0

```

## Étape 2

Ajoute le bloc ``||logic: si alors||`` dans le bloc ``||basic: toujours||``.

```blocks

basic.forever(function () {
    if (true) {
    	
    }
})

```

## Étape 3

Modifie le bloc ``||logic: si alors||``.

Remplace la valeur ``||logic: vrai||`` par le bloc ``||logic: 0 = 0||``.

```blocks

basic.forever(function () {
    if (0 == 0) {
    	
    }
})

```

## Étape 4

Modifie le bloc ``||logic: 0 = 0||``.

Remplace la valeur ``||logic: 0||`` de gauche par le bloc ``||variables: Graphique||``.

La valeur ``||logic: 0||`` de droite demeure la même.

```blocks

basic.forever(function () {
    let Graphique = 0
    if (Graphique == 0) {
    	
    }
})


```

## Étape 5

Ajoute le bloc ``||led: tracer graphique||`` dans le bloc ``||logic: si alors||``.

```blocks

basic.forever(function () {
    let Graphique = 0
    if (Graphique == 0) {
        led.plotBarGraph(
        0,
        0
        )
    }
})

```

## Étape 6

Modifie le bloc ``||led: tracer graphique||``.

Remplace la valeur ``||led: 0||`` du haut par le bloc ``||input: température||``.

Remplace la valeur ``||led: 0||`` du bas par la valeur ``||led: 50||``.


```blocks

basic.forever(function () {
    let Graphique = 0
    if (Graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
})

```

## Étape 7

Ajoute le bloc ``||logic: si alors||`` sous le bloc ``||logic: si alors||``.

```blocks

basic.forever(function () {
    if (graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
    if (true) {
    	
    }
})

```

## Étape 8

Modifie le bloc ``||logic: si alors||``.

Remplace la valeur ``||logic: vrai||`` par le bloc ``||logic: 0 = 0||``.

```blocks

basic.forever(function () {
    if (graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
    if (0 == 0) {
    	
    }
})

```

## Étape 9

Modifie le bloc ``||logic: 0 = 0||``.

Remplace la valeur ``||logic: 0||`` de gauche par le bloc ``||variables: Graphique||``.

Remplace la valeur ``||logic: 0||`` de droite par la valeur ``||logic: 1||``.

```blocks

basic.forever(function () {
    if (graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
    if (graphique == 1) {
    	
    }
})

```

## Étape 10

Ajoute le bloc ``||basic:effacer l'écran||`` dans le bloc ``||logic:si alors||``.

Ajoute le bloc ``||basic:montrer nombre||`` sous le bloc ``||basic:effacer l'écran||``.

Remplace la valeur ``||basic:0||`` du bloc ``||basic:montrer nombre||`` par le bloc ``||input:température||``.

```blocks

basic.forever(function () {
    if (graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
    if (graphique == 1) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
    }
})

```

## Étape 11

Ajoute le bloc ``||basic:pause||`` sous le bloc ``||basic:montrer nombre||``.

Remplace la valeur ``||basic:100||`` par ``||basic:2000||``.

```blocks

basic.forever(function () {
    if (graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
    if (graphique == 1) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
        basic.pause(2000)
    }
})

```

## Étape 12

Ajoute le bloc ``||variables:modifier graphique de 1||`` dans le bloc ``||input:lorsque le bouton A est pressé||``.

```blocks

let graphique = 0
input.onButtonPressed(Button.A, function () {
    graphique += 1
})

```

## Étape 13

Ajoute le bloc ``||variables:modifier graphique de -1||`` dans le bloc ``||input:lorsque le bouton B est pressé||``.

```blocks

let graphique = 0
input.onButtonPressed(Button.B, function () {
    graphique += -1
})

```

## Étape 14

Voici la programmation complète du tutoriel.

```blocks

input.onButtonPressed(Button.A, function () {
    graphique += 1
})
input.onButtonPressed(Button.B, function () {
    graphique += -1
})
let graphique = 0
basic.forever(function () {
    if (graphique == 0) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
    if (graphique == 1) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
        basic.pause(2000)
    }
})


```