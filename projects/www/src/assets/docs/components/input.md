# Input

## Description
Le composant `dui-input` est un champ de saisie personnalisable compatible avec Angular et l'API `ControlValueAccessor`. Il prend en charge des icônes, des labels, la gestion des erreurs et diverses options d'accessibilité.

## Utilisation

```html
<dui-input
  label="Nom"
  placeholder="Entrez votre nom"
  [(ngModel)]="username"
  icon="user"
  required
/>
```

## Propriétés

| Nom                | Type                             | Description |
|--------------------|--------------------------------|-------------|
| `label`           | `string`                        | Texte affiché au-dessus du champ. |
| `type`            | `string` (`text` par défaut)   | Type de l'input (`text`, `password`, `email`, etc.). |
| `placeholder`     | `string`                        | Texte indicatif dans le champ. |
| `id`              | `string` (généré automatiquement) | Identifiant unique de l'input. |
| `pattern`         | `string`                        | Regex pour validation. |
| `maxlength`       | `string \\| number \\| null`   | Longueur maximale de la saisie. |
| `name`            | `string`                        | Attribut `name` du champ. |
| `icon`            | `string \\| LucideIconNode[]`  | Icône affichée à droite ou à gauche. |
| `iconPosition`    | `'left' \| 'right'` (défaut: `'right'`) | Position de l'icône. |
| `autocomplete`    | `string` (`off` par défaut)     | Valeur de l'attribut `autocomplete`. |
| `valid`           | `boolean` (`true` par défaut)  | Indique si la saisie est valide. |
| `min`             | `number`                        | Valeur minimale (pour `number`). |
| `max`             | `number`                        | Valeur maximale (pour `number`). |
| `disabled`        | `boolean` (`false` par défaut) | Désactive l'input. |
| `required`        | `boolean` (`false` par défaut) | Rend la saisie obligatoire. |
| `readonly`        | `boolean` (`false` par défaut) | Rend le champ en lecture seule. |
| `hideArrows`      | `boolean` (`false` par défaut) | Masque les flèches pour les inputs numériques. |
| `inputClass`      | `string`                        | Classes CSS additionnelles pour l'input. |
| `disableErrorBorder` | `boolean` (`false` par défaut) | Désactive la bordure rouge en cas d'erreur. |

## Événements

| Nom          | Type                         | Description |
|-------------|------------------------------|-------------|
| `valueChange` | `EventEmitter<string>`       | Événement déclenché lors d'un changement de valeur. |
| `iconClick`  | `EventEmitter<void>`         | Événement déclenché lorsqu'on clique sur l'icône. |

## Méthodes publiques

| Nom         | Description |
|------------|-------------|
| `focus()`  | Met le focus sur l'input. |

## Accessibilité
- Le label est associé à l'input via `for`.
- L'état `disabled` est correctement géré.
- Les erreurs sont signalées par une bordure rouge par défaut (désactivable via `disableErrorBorder`).
