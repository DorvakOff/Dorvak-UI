# Pagination

## Description
Le composant `dui-pagination` permet d'afficher une pagination dynamique pour naviguer entre différentes pages de résultats.

## Utilisation

```html
<dui-pagination
  [total]="100"
  [pageSize]="10"
  [currentPage]="currentPage"
  (pageChange)="onPageChange($event)"
/>
```

## Propriétés

| Nom             | Type                  | Description |
|----------------|----------------------|-------------|
| `total`        | `number`              | Nombre total d'éléments à paginer. |
| `pageSize`     | `number` (`10` par défaut) | Nombre d'éléments affichés par page. |
| `currentPage`  | `number` (`0` par défaut) | Index de la page actuellement sélectionnée (0-based). |
| `showItemsCount` | `boolean` (`true` par défaut) | Affiche le compteur d'éléments visibles. |

## Événements

| Nom         | Type                   | Description |
|------------|------------------------|-------------|
| `pageChange` | `EventEmitter<number>` | Événement déclenché lorsqu'un changement de page a lieu. |

## Méthodes publiques

| Nom                | Description |
|-------------------|-------------|
| `handlePageChange(page: number)` | Change la page actuelle et émet un événement `pageChange`. |
| `countPages()` | Retourne le nombre total de pages. |
| `getPagesToShow()` | Retourne la liste des pages visibles en fonction de la position actuelle. |

## Accessibilité
- Les boutons de navigation sont désactivés lorsqu'ils ne sont pas pertinents (exemple : première ou dernière page).
- L'affichage du nombre d'éléments visibles améliore l'expérience utilisateur.
