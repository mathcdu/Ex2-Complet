# Exercice 2 : Formatage d'une application `React` avec `CSS/Sass`, intégration d'une librairie de composants UI (`Material UI`), déploiement sur `GitHub Pages`.

*Remarquez pour commencer que vous pouvez (mais ce n'est pas obligatoire) utiliser l'environnement de développement nuagique `GitHub Codespaces` pour compléter cet exercice.*

## Objectif général
Vous devez produire la *mise en forme* des composants `React` tel qu'illustré dans les captures d'écran jointes au bas de ces instructions. 

Utilisez `Sass` pour produire votre code `CSS` : un fichier par composant, et une seule classe racine par fichier ! À part l'ajout des composants de UI `MUI`, vous ne devez modifier la structure des composants d'aucune autre façon !

## Étapes à suivre
1. Cliquez le bouton *Open in GitHub Codespaces* (ou si vous préférez, clonez le dépôt sur votre machine locale et travaillez comme d'habitude) ; 

2. Attendez quelques secondes et `Codespaces` devrait démarrer l'installation des modules `Node` desquels dépend l'application. Sinon, vous pouvez aussi installer les modules `Node` nécessaire à l'application par vous-même ;

3. Installez les modules requis de `MUI` tel que discuté en classe avant le début de l'exercice (https://mui.com/material-ui/getting-started/installation/) ;

4. Modifiez le fichier `vite.config.js` en y ajoutant la propriété requise pour déployer votre application sur `GitHub Pages` (*base*) ; 
>Notez-bien : la valeur de cette propriété est le nom de votre dépôt de l'exercice !

5. Produisez le code `CSS/Sass` nécessaire pour implémenter le rendu visuel de l'application tel que illustré dans les captures d'écran ;

6. Intégrez les composants `MUI` suivants (tel qu'illustré dans les captures d'écran) : 
    1. Un composant `Avatar` représentant l'utilisateur connecté et contenant la photo de l'avatar (dans la barre d'entête) ;
    2. Un composant `FAB` (*Floating Action Button*) représentant le bouton flottant en bas à droite du viewport (servirait à ajouter un nouveau *dossier*) ;
    3. Trois composants `IconButton` (contenant chacun l'icône adéquate) représentant les boutons *d'action* dans les coins de chaque *fiche* de *dossier* (le premier permettrait de tourner la fiche pour dévoiler le contenu du *dossier* ; le second permettrait de supprimer le dossier représenté par cette fiche ; et le troisième permettrait de modifier les caractéristiques du dossier : toutes ces fonctionnalités seront implémentées ultérieurement dans le cours).

7. Une fois le travail testé et complété, faites une sauvegarde du dépôt (`add/commit`) suivie d'une synchronisation (`push`) ;

8. Publiez l'appli sur `GitHub Pages` (ATTENTION : avez-vous bien configuré la propriété *base* ? vos fichiers sont tous bien sauvegardés ?) ;

9. Ajoutez l'URL de déploiement dans la section *About* de la page du dépôt GitHub.

## :raising_hand: Faites valider et noter votre travail en classe ! :raising_hand:

### Si vous voulez garder une copie de ce dépôt, vous devez le télécharger ou copier/cloner (surtout si vous avez travaillé directement dans `Codespace` évidemment).

---

![Petit](https://i.imgur.com/WM5ymy7.png)
![Moyen](https://i.imgur.com/H981xC3.png)
![Grand](https://i.imgur.com/aXz4HRX.png)
