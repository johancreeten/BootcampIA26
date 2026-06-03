# Atelier — Ancrage pédagogique augmenté par l'IA

Prototype web autonome pour animer un atelier de 1h30 avec 12 formateurs adultes autour de l'ancrage pédagogique, de la mise en action et de l'IA.

## Intention d'animation

L'atelier est conçu comme une expérience tenue par Johan et Sandra du début à la fin :

- une ouverture théâtrale façon comédie scolaire / faux cours « sous-doués » ;
- une bascule immédiate vers l'andragogie, l'ancrage et la mise en action ;
- une régie dynamique en 11 temps pour garder le rythme des 90 minutes ;
- un canevas de cadrage de l'intention pédagogique avant tout prompt ;
- un générateur de prompt et des relances d'itération pour critiquer puis améliorer les sorties IA.
Prototype web autonome pour animer un atelier de 12 formateurs adultes autour de l'ancrage pédagogique avec l'aide de l'IA.

## Objectif

Remplacer un support PowerPoint ou Genially par une expérience plus vivante :

- une ouverture théâtrale volontairement anti-andragogique ;
- une mise au point sur l'andragogie raccord avec l'univers visuel violet/bleu du slide ;
- un déroulé d'animation étape par étape ;
- une checklist de facilitation persistée dans le navigateur ;
- un canevas collectif d'ancrage pédagogique ;
- un générateur de prompt pour tester l'IA en direct.

## Lancer localement

Aucune dépendance n'est nécessaire. Ouvrir simplement `index.html` dans un navigateur, ou lancer un petit serveur local :

```bash
python3 -m http.server 4173
```

Puis ouvrir <http://localhost:4173>.

## Structure

- `index.html` : structure de l'expérience, scène d'ouverture, conducteur, canevas et prompt lab ;
- `styles.css` : direction artistique rétro salle d'examen / tableau noir / copie annotée ;
- `app.js` : conducteur 90 minutes, progression, sauvegarde locale, canevas et prompt builder.
- `index.html` : structure de l'expérience et contenus de l'atelier ;
- `styles.css` : direction artistique immersive et responsive ;
- `app.js` : navigation entre étapes, sauvegarde locale, canevas et prompt builder.
