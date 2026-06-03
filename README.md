# Atelier — Ancrage pédagogique augmenté par l'IA

Prototype web autonome destiné à être projeté sur un écran interactif derrière Sandra et Johan pendant un atelier de 1h30 avec 12 formateurs adultes autour de l'ancrage pédagogique, de la mise en action et de l'IA.

## Intention d'animation

L'atelier est conçu comme un support participant : Sandra et Johan gardent la main à l’oral, tandis que l’écran donne les repères, consignes et productions attendues :

- une ouverture théâtrale façon comédie scolaire / faux cours « sous-doués » ;
- une bascule immédiate vers l'andragogie, l'ancrage et la mise en action ;
- un parcours visible en 11 temps pour garder le rythme des 90 minutes sans exposer de notes internes ;
- un canevas de cadrage de l'intention pédagogique avant tout prompt ;
- un générateur de prompt et des relances d'itération pour critiquer puis améliorer les sorties IA.

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
