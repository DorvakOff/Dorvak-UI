# Combobox

Le composant `dui-combobox` permet de sélectionner une ou plusieurs options dans une liste déroulante avec une fonctionnalité de recherche intégrée.

## Utilisation

```html
<dui-combobox [items]="options" placeholder="Sélectionner..." [(selected)]="selectedItem" />
```

## Propriétés

| Nom            | Type                  | Description                                                    | Valeur par défaut |
|---------------|----------------------|----------------------------------------------------------------|-------------------|
| `label`       | `string`              | Libellé affiché au-dessus du champ de sélection.               | `''`             |
| `items`       | `ComboboxItem[]`      | Liste des options disponibles.                                 | `[]`             |
| `placeholder` | `string`              | Texte d’indication affiché par défaut.                         | `'Select...'`    |
| `disabled`    | `boolean`             | Désactive la sélection.                                        | `false`          |
| `required`    | `boolean`             | Rend la sélection obligatoire.                                 | `false`          |
| `multi`       | `boolean`             | Permet la sélection multiple d’options.                       | `false`          |
| `inputClass`  | `string`              | Classes CSS appliquées à l’input.                              | `''`             |

## Événements

| Nom               | Type                    | Description                              |
|-------------------|------------------------|------------------------------------------|
| `selectedChange`  | `EventEmitter<any>`     | Émis lorsqu’une sélection est modifiée. |

## Comportement

- L’utilisateur peut filtrer les options via un champ de recherche intégré.
- En mode multi-sélection, les éléments sélectionnés sont affichés sous forme de texte résumé.
- Une icône de validation est affichée à côté des options sélectionnées.

## Exemple avec sélection multiple

```html
<dui-combobox [items]="options" multi [(selected)]="selectedItems" />
```

Dans cet exemple, plusieurs éléments peuvent être sélectionnés et seront affichés sous forme de liste.
