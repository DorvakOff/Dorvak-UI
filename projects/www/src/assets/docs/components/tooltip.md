# Tooltip

## Description
Le composant `dui-tooltip` permet d'afficher une infobulle lorsque l'utilisateur survole un élément.

## Utilisation

```html
<dui-tooltip text="Texte du tooltip" side="top">
  <button>Survolez-moi</button>
</dui-tooltip>
```

## Propriétés

| Nom    | Type                           | Description |
|--------|--------------------------------|-------------|
| `text` | `string`                       | Contenu du tooltip. |
| `side` | `'top' | 'bottom' | 'left' | 'right'` (par défaut: `top`) | Position de l'infobulle par rapport à l'élément. |

## Comportement
- L'infobulle apparaît au survol de l'élément enfant du `dui-tooltip`.
- Un léger délai est appliqué avant la disparition pour éviter les effets brusques.

## Accessibilité
- L'infobulle est animée pour une meilleure visibilité.
- Elle suit les bonnes pratiques UX pour ne pas gêner la navigation.
