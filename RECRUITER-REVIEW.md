# Validation locale — 14 septembre 2026

Branche : `codex/recruiter-ready`, créée depuis le travail utilisateur `a24c935`, puis intégration locale de `origin/main` (`3c67beb`). Aucune publication ni push pendant cette préparation.

## Corrections

- Couvertures DECA et En quête d’appart restaurées à l’identique depuis `d846469`. Elles avaient été supprimées dans `ed16385`, alors que leurs chemins étaient toujours utilisés par les cartes et les pages.
- Commercial Photography : 11 photographies sélectionnées après examen des 15 originaux de `assets/projects/commercial-photgraphy ` (espace final). Progression food, gestes, personnes, extérieur et détails. Quatre variantes/détails redondants écartés. Aucun visuel généré, aucune attribution client ajoutée.
- Galerie placée tôt après l’introduction, paires proportionnelles sur ordinateur, succession simple sur mobile. Images entières, dimensions réservées, srcset et chargement différé. Exports sRGB WebP, originaux conservés. Recette et sélection : `scripts/optimize-commercial.py`; métadonnées : `assets/projects/commercial-photography/optimized/manifest.json`.
- Chemins réparés pour trois photos DCMB, deux photos Jump & Stay et la loop Lost in Wasteland. Références introuvables retirées des galeries sans inventer de remplacements. Sections vides non rendues.
- Versions des liens CSS/JS actualisées pour la future publication.
- LOX et ses médias optimisés préexistants conservés, sans recompression supplémentaire. Crédits, CV et lien Instagram `_mikeferrari_` conservés.

## Poids (Mo décimaux)

| Médias | Originaux | Exports web |
|---|---:|---:|
| 11 photos Commercial | 218,404 Mo | 0,511 Mo (640), 2,102 Mo (1200), 4,901 Mo (1800) |
| 2 images Jump & Stay | 3,303 Mo | 0,109 Mo |
| Couvertures restaurées | absentes | DECA 83 534 octets ; Enquête 97 962 octets |

Commercial : réduction de 97,76 % même pour le lot des plus grands exports. Le navigateur choisit une variante par photo selon largeur et densité de l’écran ; ces chiffres sont des totaux de lots, pas un poids initial de page. Les trois variantes représentent 7,513 Mo stockés. Les 218 Mo d’originaux ne sont pas téléchargés par la galerie.

## Contrôles effectués

- Huit pages projets à 320, 390 et 1440 px : aucune largeur de document supérieure à la fenêtre. Accueil, photographie et About également contrôlés.
- LOX : paragraphes à 277 px sur fenêtre 320 et 347 px sur fenêtre 390 ; Reel 1080 × 1920, object-fit contain, commandes présentes, non muet et temps de lecture progressant après interaction. Loop d’introduction distincte conservée.
- Commercial : 11 images décodées, galerie desktop et mobile inspectée, aucune modification des proportions. Chargement différé et dimensions HTML présents.
- Ouverture des cartes DECA et Enquête, retour à l’index, navigation et lecteur principal DECA vérifiés. Les deux lecteurs Adobe secondaires restent des dépendances externes : réponse HTTP 200 vérifiée, lecture complète non certifiée.
- Aucun média local référencé par les couvertures, loops, lecteurs principaux et galeries des huit projets ne manque. Aucun avertissement/erreur dans les journaux navigateur consultés.
- Liens contact et Instagram conservés et vérifiés. CV servi en HTTP avec empreinte SHA-256 identique à l’original (PDF une page).
- `node --check app.js` et `git diff --check` passent.

## Sources complémentaires absentes

Ces références ont été retirées pour ne plus demander des images inexistantes. Elles ne bloquent pas la version livrée ; leur réintégration nécessiterait les fichiers ou une sélection explicitement validée. Certains anciens médias DECA existent dans l’historique mais avaient été volontairement supprimés ; seule la couverture demandée a été restaurée.

- `assets/projects/dont-call-me-back/dcmb-car-sunglasses.webp`
- `assets/projects/follow-your-passion/fyp-podcast-set.webp`
- `assets/projects/follow-your-passion/fyp-way-to-scale.webp`
- `assets/projects/follow-your-passion/fyp-monetise-passion.webp`
- `assets/projects/follow-your-passion/fyp-content-house.webp`
- `assets/projects/follow-your-passion/fyp-founder-portrait.webp`
- `assets/projects/follow-your-passion/fyp-female-portrait.webp`
- `assets/projects/en-quete-dappart/enquete-presenter.webp`
- `assets/projects/en-quete-dappart/enquete-apartment-visit.webp`
- `assets/projects/en-quete-dappart/enquete-interview.webp`
- `assets/projects/en-quete-dappart/enquete-broadcast-frame.webp`
- `assets/projects/jump-n-stay/jns-silhouettes.webp`
- `assets/projects/jump-n-stay/jns-portrait.webp`
- `assets/projects/deca/deca-speaker-wide.webp`
- `assets/projects/deca/deca-podcast-two-shot.webp`
- `assets/projects/deca/deca-ai-revolution-frame.webp`
- `assets/projects/deca/deca-edit-timeline.webp`
- `assets/projects/deca/deca-detail-frame.webp`

## Validation restante

Valider la sélection et la progression Commercial, notamment le mélange de scènes food et lifestyle. La publication et le contrôle du domaine public attendent l’accord utilisateur. Aucune fusion dans main n’a été faite.
