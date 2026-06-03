# Atelier — Ancrage pédagogique augmenté par l'IA

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

- `index.html` : structure de l'expérience et contenus de l'atelier ;
- `styles.css` : direction artistique immersive et responsive ;
- `app.js` : navigation entre étapes, sauvegarde locale, canevas et prompt builder.
