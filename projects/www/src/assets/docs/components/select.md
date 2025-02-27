# Select

## Description
Le composant `dui-select` est un composant de sélection permettant de choisir une valeur parmi une liste d'options.

## Utilisation

```html
<dui-select
  [label]="'Choisissez une option'"
  [items]="items"
  [placeholder]="'Sélectionnez...'"
  [disabled]="false"
  [required]="true"
  (selectedChange)="onSelectionChange($event)"
></dui-select>
```

## Propriétés

| Nom             | Type                  | Description |
|----------------|----------------------|-------------|
| `label`        | `string`              | Libellé affiché au-dessus du champ de sélection. |
| `items`        | `SelectItem[]`        | Liste des éléments disponibles pour la sélection. Chaque élément est un objet `{ value: any, label: string }`. |
| `placeholder`  | `string` (`'Sélectionnez...'` par défaut) | Texte affiché lorsqu'aucune option n'est sélectionnée. |
| `disabled`     | `boolean` (`false` par défaut) | Désactive le champ de sélection si `true`. |
| `required`     | `boolean` (`false` par défaut) | Indique si une sélection est obligatoire. |
| `inputClass`   | `string`              | Classes CSS supplémentaires appliquées à l'input. |

## Événements

| Nom            | Type                   | Description |
|---------------|------------------------|-------------|
| `selectedChange` | `EventEmitter<any>` | Événement émis lorsqu'une nouvelle valeur est sélectionnée. |

## Méthodes publiques

| Nom                | Description |
|-------------------|-------------|
| `openCombobox()`  | Ouvre la liste déroulante des options. |
| `closeCombobox()` | Ferme la liste déroulante. |
| `onSelect(item: SelectItem)` | Sélectionne un élément de la liste. |

## Accessibilité
- Le champ utilise un `label` pour indiquer son rôle.
- Navigation possible via la touche `Tab` et fermeture avec `Échap`.
- Les options sont navigables au clavier avec `Enter` pour sélectionner.
