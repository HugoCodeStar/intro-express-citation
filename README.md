# Création d'une application Express

Ce projet a pour but de vous faire construire une application Express
avec des routes de bases et des routes avec paramètres.

# But

Vous devez créer une application qui à des ressources à les adresses suivantes :

* /quotes - retourne un tableau des citations en JSON
* /quotes/id (où id est un nombre) - retourne la citation à l'indice id de la liste de citations en JSON
* /quotes/random - retourne une citation au hasard du tableau de citation en JSON

# Élément fourni

* Le fichier quotes.json des citations. Veuillez consulter notre projet de citation en React pour voir comment l'importer
dans notre application.

# Requis technique

* L'application Express n'est pas fournie, c'est à vous de l'installer avec le express-generator.
* Le package.json de l'application doit être dans le dossier de racine.
* L'application express doit être dans un fichier `app.js`.

# Test
Après avoir installé votre application express, il faut ajouter les modules `jest` et `supertest` avec npm.
Vous devez aussi ajouter le script suivant à votre `package.json` pour exécuter les tests.

```
  "scripts": {
    "test": "jest"
  },
```

Il faut rajouter l'action `test`. Il est probable que vous ayer l'action start, il ne faut pas la supprimer.
