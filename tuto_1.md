# Tutoriel 1

## @showdialog

🎯 Objectif 🎯

Fais défiler ton prénom sur l'écran LED du micro:bit ! 

C'est ton tout premier pas dans le monde du code. 

Prêt ? C'est parti ! 🚀 🚀 🚀

## Étape 1

🧩 Étape 1 : On fait le ménage

➡️ Supprime le bloc ``||basic:au démarrage||``.

## Étape 2

✨ Étape 2 : Ajoute un bloc !

➡️ Ajoute le bloc ``|| basic: afficher texte ||`` dans le bloc ``||basic: toujours||``.

```blocks

basic.forever(function () {
    basic.showString("Hello!")
})

```

## Étape 3

✏️ Étape 3 : Modifie les valeurs !

➡️ Efface le mot ``|| basic: Hello! ||`` du bloc ``|| basic: afficher texte ||``.

➡️ Écris ton prénom dans le bloc ``|| basic: afficher texte ||`` (ex. : Seb). 

```blocks

basic.forever(function () {
    basic.showString("Seb") 
})

```

## @showdialog

🚨🚨 Attention ! 🚨🚨

Certains caractères spéciaux ne sont pas acceptés.

Lesquels ?

## Étape 4

💾 Étape #4 Télécharge et teste la programmation.

➡️ Télécharge ton programme sur le micro:bit.

➡️ Regarde ton prénom défiler fièrement sur l'écran. 

## Étape 5

🧠 Étape #5 Défi supplémentaire.

➡️ Fais défiler également ton nom de famille.

Prêt ? C'est parti ! 🚀 🚀