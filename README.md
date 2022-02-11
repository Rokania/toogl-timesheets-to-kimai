# toggl-timesheets-to-kimai

Ce script permet de transférer les timesheets provenant de Toggl vers Kimai.

## Comment l'utiliser

### Variables d'env

Pour utiliser le script il faut créer un fichier `.env` contenant toutes les variables d'env du fichier `.env.sample`.

#### Clé API Toggl

Pour trouver la clé d'API de Toggl, il faut aller dans `Profile setting` et ensuite aller dans `API Token`.

#### Clé API Kimai

Pour trouver la clé d'API de Kimai, il faut cliquer sur votre profil en haut à droite puis sur `Editer`. Créer le nouveau `Mot de passe de l'API`.

### Lancer le script 

Pour lancer le script il suffit de taper 

``` bash
> npm i
> npm start
```

Taper ensuite la date de début (format YYYY-MM-DD) et la date de fin (format YYYY-MM-DD).