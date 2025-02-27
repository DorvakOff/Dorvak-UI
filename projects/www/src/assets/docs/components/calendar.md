# Calendar

Le composant `dui-calendar` permet d'afficher un calendrier interactif pour sélectionner une date.

## Utilisation

```html
<dui-calendar [(value)]="selectedDate" [min]="minDate" [max]="maxDate"></dui-calendar>
```

## Propriétés

| Nom      | Type   | Description                                      | Valeur par défaut |
|----------|--------|--------------------------------------------------|-------------------|
| `value`  | `Date` | Date sélectionnée.                              | `Date()`         |
| `min`    | `Date` | Date minimale sélectionnable (optionnel).       | `undefined`      |
| `max`    | `Date` | Date maximale sélectionnable (optionnel).       | `undefined`      |

## Événements

| Nom           | Type                | Description                                   |
|--------------|--------------------|-----------------------------------------------|
| `valueChange` | `EventEmitter<Date>` | Émit lorsque la date sélectionnée change.    |

## Fonctionnalités

- Navigation entre les mois avec des boutons.
- Désactivation des dates en dehors des limites `min` et `max`.
- Mise en surbrillance de la date sélectionnée.
- Affichage des jours du mois précédent et suivant pour compléter la grille.

## Exemple avec une plage de dates

```html
<dui-calendar [(value)]="selectedDate" [min]="new Date(2024, 0, 1)" [max]="new Date(2024, 11, 31)"></dui-calendar>
```
