# Textarea

## Description
Le composant `dui-textarea` permet d'afficher une zone de texte multi-lignes personnalisable avec support des formulaires et validation.

## Utilisation

```html
<dui-textarea
  label="Description"
  placeholder="Entrez votre texte ici..."
  [rows]="5"
  [cols]="40"
  [(value)]="texte"
  [disabled]="false"
  [readonly]="false"
  [required]="true"
/>
```

## Propriétés

| Nom          | Type                  | Par défaut | Description |
|-------------|----------------------|-----------|-------------|
| `label`     | `string`              | `''`       | Texte affiché au-dessus du champ. |
| `placeholder` | `string`            | `''`       | Texte affiché en gris clair à l'intérieur du champ. |
| `name`      | `string`              | `''`       | Nom du champ (utile pour les formulaires). |
| `disabled`  | `boolean`             | `false`    | Désactive l'édition du champ. |
| `readonly`  | `boolean`             | `false`    | Rend le champ en lecture seule. |
| `required`  | `boolean`             | `false`    | Indique que le champ est requis. |
| `rows`      | `number`              | `3`        | Nombre de lignes visibles par défaut. |
| `cols`      | `number`              | `20`       | Nombre de colonnes visibles par défaut. |
| `value`     | `string`              | `''`       | Contenu du champ. |

## Événements

| Nom          | Type                     | Description |
|-------------|-------------------------|-------------|
| `valueChange` | `EventEmitter<string>` | Événement émis à chaque modification du texte. |

## Méthodes publiques

| Nom       | Description |
|-----------|-------------|
| `focus()` | Met le champ en focus. |

## Accessibilité
- Le label est relié au champ pour une meilleure navigation au clavier.
- L'attribut `required` permet d'indiquer que le champ est obligatoire.
- Le champ respecte les bonnes pratiques pour les lecteurs d'écran.
