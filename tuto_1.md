# Tutoriel 1

## @showdialog

Programme le micro:bit pour qu'il affiche ton prénom.


## Étape 1

Supprime le bloc ``||basic:au démarrage||``.

## Étape 2

Ajoute le bloc ``|| basic: afficher texte ||`` dans le bloc ``||basic: toujours||``.

```blocks

basic.forever(function () {
    basic.showString("Hello!")
})

```

## Étape 3

Efface le mot ``|| basic: Hello! ||`` du bloc ``|| basic: afficher texte ||``.

Écris ton prénom dans le bloc ``|| basic: afficher texte ||`` (ex. : Seb). ** sans accent **

```blocks

basic.forever(function () {
    basic.showString("Seb") 
})

```
## Étape 4

Télécharge et teste la programmation.