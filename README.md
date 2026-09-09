# Ziad Beranger / Portfolio 2026

Version retravaillée du portfolio statique de Ziad Beranger.

## Ce qui a changé

- Les projets sont regroupés par usage professionnel : Commercial / Digital, Editing / Post-production, Film / Authorship et Photography.
- DECA est intégré comme preuve de montage YouTube, podcast et contenu digital.
- DECA présente désormais son rôle éditorial, son positionnement de contenu, ses intros et ses éléments de post-production.
- Une sélection Commercial Photography est séparée de Lost in Wasteland.
- Jump & Stay présente Moonbeach, Les Crampets et Blackhouse Sessions comme une collaboration éditoriale continue.
- Chaque page projet fonctionne comme une étude de cas : brief, approche, livrables et valeur.
- La présentation générale distingue clairement le travail commercial et digital, le montage, le film d’auteur et la photographie.
- Les études de cas précisent désormais quand Ziad a écrit, dirigé, filmé et monté le projet, ainsi que son rôle de script, de direction et de coordination chez Follow Your Passion Media.
- Un appel à l’action invite à prendre contact pour les projets, collaborations et demandes professionnelles.
- Les chemins et noms de médias sont désormais cohérents.

## Fichiers principaux

```text
index.html        structure générale et textes fixes
styles.css       identité visuelle et responsive
app.js           projets, études de cas, galeries et vidéos
MEDIA-GUIDE.md   liste exacte des médias à ajouter
CNAME            domaine GitHub Pages
```

## Ajouter les médias

Suivre exactement la nomenclature de `MEDIA-GUIDE.md`. Il suffit ensuite de déposer chaque export dans son dossier : les chemins sont déjà inscrits dans `app.js` et `styles.css`.

Si un média manque, le site reste utilisable, mais son emplacement apparaîtra sombre ou sera ignoré dans la galerie.

## Prévisualiser sur Mac

Ouvrir le dossier dans VS Code, puis lancer depuis le terminal :

```sh
python3 -m http.server 4173
```

Ouvrir ensuite `http://localhost:4173` dans Safari ou Chrome.

## Modifier un projet

Les textes et médias de chaque projet se trouvent en haut de `app.js` dans le tableau `projects`.

Les chemins des médias existants n’ont pas été renommés. Les nouvelles cartes Jump & Stay utilisent uniquement du texte tant que les noms exacts des exports vidéo de Moonbeach, Les Crampets et Blackhouse Sessions n’ont pas été confirmés dans le dossier `assets`.

Les propriétés principales sont :

- `group` : groupe visible sur la page d’accueil ;
- `cover` : image de couverture ;
- `video` : boucle silencieuse d’ambiance ;
- `featuredVideo` : film principal avec son et commandes ;
- `gallery` : sélection d’images dans l’ordre d’affichage ;
- `context`, `contribution`, `deliverables`, `outcome` : contenu commercial de l’étude de cas.

## Avant la mise en ligne

1. Ajouter les trois polices dans `assets/fonts/`.
2. Ajouter tous les médias prioritaires indiqués dans `MEDIA-GUIDE.md`.
3. Vérifier ou corriger les crédits et dates dans `app.js`.
4. Remplacer `Ziad-Beranger-Resume.pdf` si une nouvelle version du CV est créée.
5. Tester les pages sur ordinateur et mobile.
6. Envoyer ensuite le dossier complet vers le dépôt GitHub relié à `ziadberanger.com`.
