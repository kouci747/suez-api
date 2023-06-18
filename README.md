# Suez

## Lancer l'application backend

A l'ouverture du dossier SUEZ-API contenant le backend du projet :

Naviguer vers le dossier api : `cd api`

Toujours dans le dossier api, glisser le fichier .env fourni en pièce jointe par mail, il contient

la clé API et le bearer pour pouvoir requeter l'API themoviedb

Lancer la commande `npm run dev`

## Tester le backend :

A l'aide d'un logiciel comme insomnia ou postman, tester avec l'URL suivant :
`http://localhost:5432/api/v1/movie/getMovie/3`
//remplacer 3 par la page de résultat voulue pour simuler une pagination (valeur max : 500)

## Générer la documentation avec JS Doc

JS Doc permet de transformer les commentaires fait sur les parties du code en documentation générée sous forme de fichier HTML.
Pour la générer :

Naviguer vers le dossier api : `cd api`

Lancer la commande : `npm run doc`

(les commentaires dans le code sont par la suite condensés dans un fichier index.html dans le dossier 'docs' )

NB: la doc a déjà été générée.
