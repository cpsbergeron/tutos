# Tutoriel 12

## @showdialog

Crée une animation avec un compteur.

## Étape 1

Supprime les blocs ``||basic: au démarrage ||`` et ``||basic: toujours ||``.

## Étape 2

Crée une fonction et donne-lui le nom ``||functions: Animation ||``. Ajoute un ``||variables: nombre ||`` à la fonction.

Regarde l'indice au besoin.

```blocks

function Animation (num: number) {
	
}

```

## Étape 3

Ajoute le bloc ``||loops: répéter ||`` dans le bloc ``||functions: Animation ||``.

Remplace la valeur ``||loops: 4 ||`` par le bloc ``||variables: num ||``. 


```blocks

function Animation (num: number) {
    for (let index = 0; index < num; index++) {
    	
    }
}

```

## Étape 4

Ajoute trois blocs ``||basic: montrer l'icône ||`` dans le bloc ``||functions: répéter ||``.

Regarde l'indice au besoin.

```blocks

function Animation (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
    }
}

```

## Étape 5

Ajoute le bloc ``||functions: retourner ||`` sous le bloc ``||functions: répéter ||``.

Remplace la valeur ``||functions: 0 ||`` par le bloc ``||variables: num ||``. 

Regarde l'indice au besoin.

```blocks

function Animation (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
    }
}

```

## Étape 6

Ajoute le bloc ``||basic: montrer nombre ||`` dans le bloc ``||input: lorsque le bouton A +  est pressé ||``.

```blocks

function Animation (num: number) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
    }
    return num
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})


```

## Étape 7

Remplace la valeur ``||basic: 0 ||`` par le bloc ``||functions: appel Animation ||``.

```blocks

function Animation (num: number) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
    }
    return num
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Animation(1))
})

```

## Étape 8

Remplace la valeur ``||functions: 1 ||`` par le bloc ``||math: choisir au hasard ||``.

```blocks

function Animation (num: number) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
    }
    return num
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Animation(1))
})

```

## Étape 8

Remplace la valeur ``||math: 0 ||`` par la valeur ``||math: 1 ||``.

Remplace la valeur ``||math: 10 ||`` par la valeur ``||math: 5 ||``.


```blocks

function Animation (num: number) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Chessboard)
    }
    return num
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Animation(randint(1, 5)))
})

```

## Étape 9

Télécharge le programme dans le micro:bit.
