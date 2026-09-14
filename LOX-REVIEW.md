# LOX — corrections et vérifications du 14 septembre 2026

Branche : `codex/lox-reel-gallery`. État initial propre, aucun changement non commité présent. Aucun original écrasé, aucun commit, push ou déploiement.

## Reel

`assets/projects/lox-in-a-box/lox-reel.mp4` : 1080 × 1920, 14,318 s, H.264 ~50 i/s, AAC stéréo 48 kHz, 58 112 974 octets. Analyse cropdetect sur toute la vidéo : image complète 1080:1920:0:0, sans bandes permanentes intégrées. Image vérifiée à 3 s. Audio non silencieux (moyenne −11,6 dB).

Cause CSS : largeur jusqu’à 420 px combinée à une hauteur plafonnée à 80svh, indépendante de cette largeur. Désormais la largeur est plafonnée par la hauteur du viewport et la hauteur découle du ratio 9:16. `object-fit: contain`, aucun recadrage ni étirement. Original vidéo et loop d’ambiance inchangés. Poster extrait à 3 s ; chargement du Reel à la demande, commandes natives, son activé après action, lecture en boucle.

Composition : mêmes marges, grille .7 / 1.15 / 1.15, filets, typographie et hiérarchie de l’étude de cas commune à DECA. Légende, texte et lecteur vertical en colonnes sur ordinateur, empilés sur mobile.

## Photos

11 photos présentes affichées. Correction de la référence `lox-team-service.webp` vers les dérivés du fichier réel `lox-team-service.webp.jpg`. Suppression des références inexistantes 12 à 18. `gallery-05.jpg` (4 971 393 octets, 5664 × 3374), non utilisé précédemment et similaire à la couverture, reste conservé sans ajout à la sélection. Couverture inchangée (600 274 octets). Plusieurs anciens fichiers portant l’extension .webp sont en réalité des JPEG ; les dérivés sont de vrais WebP.

Export reproductible : `scripts/optimize-lox.py` avec Pillow. Orientation EXIF appliquée, profils ICC convertis vers sRGB, redimensionnement proportionnel Lanczos, WebP qualité 88. Largeurs cibles 640 / 1280 / 2400 px, sans agrandissement. Originaux conservés. `srcset`, `sizes`, dimensions et ratios explicites, décodage asynchrone et chargement différé après les deux premières photos. La grille utilise les proportions avant chargement sans se reconstruire à chaque téléchargement.

Poids en Mo décimaux, hors couverture et vidéo. Les tailles correspondent à une sélection complète d’une variante ; le transfert réel dépend du viewport et de la densité d’écran.

| Photo originale | Dimensions | Avant (Mo) | 640 (Mo) | 1280 (Mo) | 2400 (Mo) |
|---|---|---:|---:|---:|---:|
| lox-storefront.webp | 2048 × 1280 | 0.771 | 0.062 | 0.326 | 0.983 |
| lox-product-hero.webp | 2048 × 1152 | 0.629 | 0.078 | 0.298 | 0.714 |
| lox-team-service.webp.jpg | 2048 × 1268 | 0.690 | 0.059 | 0.284 | 0.841 |
| lox-bag-street.webp | 1152 × 2048 | 0.084 | 0.060 | 0.111 | 0.111 |
| lox-food-detail.webp | 2048 × 1156 | 0.442 | 0.033 | 0.158 | 0.453 |
| lox-interior-wide.webp | 1206 × 1800 | 0.443 | 0.129 | 0.437 | 0.437 |
| lox-photo-07.jpg | 4320 × 7680 | 28.274 | 0.037 | 0.301 | 2.201 |
| lox-photo-08.jpg | 8480 × 4768 | 41.985 | 0.049 | 0.227 | 1.049 |
| lox-photo-09.jpg | 7680 × 4320 | 28.139 | 0.029 | 0.073 | 0.366 |
| lox-photo-10.jpg | 3840 × 2160 | 2.331 | 0.038 | 0.100 | 0.241 |
| lox-photo-11.jpg | 5664 × 8480 | 25.811 | 0.083 | 0.595 | 2.912 |
| **Total** | | **129.60** | **0.66** | **2.91** | **10.31** |

Réduction : 99.5 %, 97.8 %, 92.0 %.

## Vérification

- Syntaxe JavaScript et `git diff --check` : OK.
- LOX 1440 × 900 : lecteur 405 × 720 ; 11 images chargées ; aucun débordement horizontal.
- LOX 390 × 844 : lecteur 346,8 × 616,6 ; 11 variantes 640 chargées au fil du défilement ; aucun débordement horizontal.
- LOX 844 × 390 : lecteur 175,5 × 312 ; aucun débordement horizontal.
- Lecture après action clavier sur contrôle natif : currentTime 9,39 s, readyState 4, paused false, muted false. Piste audio présente et non silencieuse ; écoute humaine à confirmer. Premier essai de clic sur une commande native : plantage de l’aperçu intégré ; nouvelle session fonctionnelle.
- Ouverture des six autres projets : OK, sans débordement à 1440 px. DECA contrôlé à 390 et 1440 px : mise en page préservée, lecteurs 16:9. Limite préexistante : les trois embeds Adobe restent noirs dans cet environnement ; plusieurs images DECA sont absentes. Aucun changement aux données DECA ni aux médias des autres projets.
- Lien Instagram `_mikeferrari_` conservé exactement.

Aperçu : http://127.0.0.1:4173/#work/lox-in-a-box ; serveur local `python3 -m http.server 4173 --bind 127.0.0.1`.


# Deuxième passe — lisibilité mobile et préparation candidatures

Les contrôles ci-dessous complètent et corrigent le bilan de la première passe. Les modifications déjà présentes ont été conservées sur `codex/lox-reel-gallery`. Les nouveaux fichiers ajoutés pendant cette passe (notamment le dossier `assets/projects/commercial /`) et les changements Finder `.DS_Store` n’ont pas été modifiés.

## Corrections

- Cause réelle de la colonne mobile étroite : seconde définition de `.project-details` après les media queries, rétablissant trois colonnes. Définition de bureau consolidée avant les breakpoints ; mobile en `minmax(0, 1fr)` avec enfants sur `1 / -1`. Paragraphes utiles de 331,8 / 346,8 / 386,8 px aux viewports 375 / 390 / 430 px, marges de 21,6 px. Correctif commun à tous les projets.
- LOX : introduction et paragraphes raccourcis, quatre rôles explicites (direction créative, tournage, photographie, montage). Blocs promotionnels « Value », stratégie et livrables retirés de cet affichage compact. Aucun résultat commercial ni témoignage ajouté.
- Reel remonté avant l’étude de cas, après l’introduction et la loop. Section à en-tête commun, texte et lecteur associés en deux colonnes sur ordinateur, empilés sur mobile. Introduction moins haute. Image 9:16 entière, son après action et commandes conservés.
- LOX : photos en pleine largeur sur mobile, paires proportionnelles conservées sur ordinateur. `sizes` correspond maintenant à la largeur effective de chaque colonne. Toutes les photos sous le Reel utilisent le chargement différé natif et le décodage asynchrone.
- Débordements intrinsèques corrigés pour les longs titres photo, le hub Photography et le bouton « Next project ». Pas de changement des sélections photographiques.
- Lecteur principal DECA : priorité à l’export local déjà présent, comme annoncé dans le README, avec l’embed Adobe existant en secours en cas d’erreur de lecture. Les données et textes DECA sont identiques à ceux du début de cette passe, ainsi que les six autres projets.

## Poids réellement sélectionné dans l’aperçu

Aucun média n’a été créé ou recompressé pendant cette deuxième passe. Originaux, dérivés, couleurs, cadrages, poster et fichiers vidéo sont inchangés. Les chiffres correspondent à la somme des tailles des fichiers `currentSrc` sélectionnés après défilement complet, hors cache HTTP, couverture et vidéos, à densité d’écran 1×.

| Mesure LOX | Avant cette passe | Après |
|---|---:|---:|
| Galerie mobile à 375, 390, 430 px | 657 018 octets | 657 018 octets (0,66 Mo) |
| Galerie bureau à 1440 px | 10 309 244 octets (sélection grand format avec `sizes=100vw`) | 3 141 400 octets (3,14 Mo) |
| Total des 11 originaux | 129 599 446 octets | Inchangé, non servi dans la galerie |
| Reel LOX | 58 112 974 octets | Inchangé, chargement à la demande |
| Film principal DECA local | 69 903 191 octets | Inchangé |

Gain supplémentaire bureau : 69,5 % sur les fichiers sélectionnés. Gain cumulé par rapport aux originaux de la galerie : 97,6 % sur ordinateur et 99,5 % sur mobile 1×. Un écran Retina peut sélectionner une résolution supérieure ; ce ne sont pas des mesures de temps de chargement sur réseau cellulaire.

## Contrôles effectués

- Accueil, huit projets et hub Photography aux largeurs 375, 390, 430 et 1440 px : aucun débordement horizontal après corrections. Vérification des styles calculés, largeur du brief et placement des enfants, pas seulement du masquage horizontal existant.
- LOX : 11/11 images chargées après défilement à chaque largeur. Lecture avec audio activé, pause au clic sur le contrôle natif ; lecteur de 405 × 720 px à 1440 px, ratio exact 9:16 sur mobile avec mesures décimales. Loop d’ambiance inchangée.
- DECA : film local en lecture, `readyState=4`, progression à 21,2 secondes, `muted=false`, commandes visibles. Proportions 16:9 conservées ; test de lecture aussi à 375 px.
- Navigation : Work → LOX → Index ; Photography → Art → retour hub → retour index ; About. Pas d’envoi de message lors du contrôle des liens mailto.
- CV : fichier local existant de 171 210 octets, URL ouverte dans le navigateur. Liens mailto et Instagram `https://www.instagram.com/_mikeferrari_/` comparés au début de passe, identiques.
- Syntaxe JavaScript, `git diff --check` et comparaison des sept objets projet hors LOX : OK.

## Éléments encore manquants / limites

Aucune image de remplacement n’a été ajoutée et aucun autre disque n’a été parcouru. Les références ci-dessous étaient déjà absentes lors de l’audit ; les sélections en cours de préparation restent hors de cette passe.

- **deca** : `deca-cover-organic-v2.webp`, `deca-speaker-wide.webp`, `deca-podcast-two-shot.webp`, `deca-ai-revolution-frame.webp`, `deca-edit-timeline.webp`, `deca-detail-frame.webp`.
- **dont-call-me-back** : `dcmb-beach-wide.webp`, `dcmb-forest-portrait.webp`, `dcmb-hand-detail.webp`, `dcmb-car-sunglasses.webp`.
- **follow-your-passion** : `fyp-podcast-set.webp`, `fyp-way-to-scale.webp`, `fyp-monetise-passion.webp`, `fyp-content-house.webp`, `fyp-founder-portrait.webp`, `fyp-female-portrait.webp`.
- **commercial-photography** : `photo-cover.webp`, `photo-portrait-editorial.webp`, `photo-brand-lifestyle.webp`, `photo-event-atmosphere.webp`, `photo-product-detail.webp`, `photo-people-motion.webp`, `photo-location-wide.webp`, `photo-night-flash.webp`, `photo-final-signature.webp`.
- **lost-in-wasteland** : `wasteland-atmosphere-loop.mp4`.
- **en-quete-dappart** : `enquete-cover-paris.webp`, `enquete-presenter.webp`, `enquete-apartment-visit.webp`, `enquete-interview.webp`, `enquete-broadcast-frame.webp`.
- **jump-n-stay** : `jns-character.webp`, `jns-silhouettes.webp`, `jns-live-stage.webp`, `jns-portrait.webp`.

Les deux lecteurs secondaires DECA restent dépendants des embeds Adobe, non chargés dans cet environnement. Leurs exports locaux `deca-ai-revolution.mp4` et `deca-digital-council-interview.mp4` ne sont pas présents. Leur lecture externe ne peut donc pas être validée ici. Le portfolio ne peut pas être qualifié de complet tant que ces médias et les couvertures manquantes ne sont pas réglés.

## Choix éditoriaux ou visuels réservés à Ziad

- Valider les nouveaux textes courts et l’ordre Reel → contexte → photos de LOX.
- Fournir les nouvelles sélections Commercial Photography et Lost in Wasteland, et choisir les couvertures manquantes DECA / En quête d’appart.
- Choisir de conserver les deux films secondaires DECA (avec exports ou hébergement fonctionnel) ou de ne montrer que le film principal.

Aucun commit, push ni déploiement. Aperçu : http://127.0.0.1:4173/#work/lox-in-a-box.
